import Button from 'UIcomponents/buttons/Button'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Input from 'UIcomponents/input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { adminLogin, checkPermission } from 'api/auth'
import Swal from 'sweetalert2'
import { AuthContext } from 'context/AuthContext'
import authorization from 'api/authorization'
import AdminForm from 'components/admin/AdminForm'
import { Toast } from 'heplers/helpers'

export default function AdminLogin() {
	const [account, setAccount] = useState('')
	const [password, setPassword] = useState('')
	const { isAuthenticated } = useContext(AuthContext)
	const [isProcessing, setIsProcessing] = useState(false)
	const navigate = useNavigate()

	const handleClick = async () => {
		try {
			if (account.length === 0) {
				return
			}
			if (password.length === 0) {
				return
			}
			await authorization
				.adminLogin({
					account,
					password,
				})
				.then((response) => {
					const { data } = response.data
					setIsProcessing(true)
					if (response.data.status !== 'success') {
						throw new Error(response.data.message)
					}
					localStorage.setItem('authToken', data.token)
					Toast.fire({
						icon: 'success',
						title: '登入成功！',
					})
					navigate('/admin/tweets')
				})
		} catch (error) {
			setIsProcessing(false)
			Toast.fire({
				icon: 'error',
				title: '輸入帳號密碼有誤！',
			})
			console.error(error)
		}
	}

	const handleAccountChange = (e) => {
		setAccount(e.target.value)
	}

	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	}

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/tweets')
		}
	}, [navigate])

	return (
		<>
			<AdminForm
				account={account}
				password={password}
				onAccountChange={handleAccountChange}
				onPasswordChange={handlePasswordChange}
				onLoginClick={handleClick}
				disabled={isProcessing}
			/>
		</>
	)
}
