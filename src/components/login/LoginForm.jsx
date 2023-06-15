import Button from 'UIcomponents/buttons/Button'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import style from './LoginForm.module.scss'
import Input from 'UIcomponents/input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { checkPermission, login } from 'api/auth'
import { Toast } from 'heplers/helpers'

function LoginForm() {
	const [account, setAccount] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const handleLoginClick = async () => {
		try {
			if (account.length === 0) {
				return
			}
			if (password.length === 0) {
				return
			}

			const { success, token, user } = await login({
				account,
				password,
			})

			if (success) {
				localStorage.setItem('authToken', token)
				localStorage.setItem('userId', user.id)
				Toast.fire({
					title: '登入成功！',
					timer: 2000,
					icon: 'success',
					showConfirmButton: false,
				})
				navigate('/home')
				return
			}
			Toast.fire({
				title: '登入失敗！',
				timer: 2000,
				icon: 'error',
				showConfirmButton: false,
			})
		} catch (error) {
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
		const checkTokenIsVaild = async () => {
			const authToken = localStorage.getItem('authToken')

			if (!authToken) {
				return
			}

			const result = await checkPermission(authToken)

			if (result) {
				navigate('/home')
			}
		}
		checkTokenIsVaild()
	}, [])

	return (
		<div className={`${style.loginContainer}`}>
			<div className={`${style.loginLogo}`}>
				<Logo />
			</div>
			<h1 className={`${style.loginTitle}`}>登入Alphitter</h1>
			<div className={`${style.loginInputGroup}`}>
				<Input
					label='帳號'
					placeholder='請輸入帳號'
					value={account}
					onChange={handleAccountChange}
				/>
				<Input
					type='password'
					label='密碼'
					placeholder='請輸入密碼'
					value={password}
					onChange={handlePasswordChange}
				/>
			</div>
			<div className={`${style.loginButton}`}>
				<Button text='登入' size='large' onClick={handleLoginClick} />
			</div>
			<div className={`${style.loginButtonGroup}`}>
				<div className={`${style.loginButtonSecGroup}`}>
					<Link to='/register'>
						<u className={`${style.loginRegisterButton}`}>註冊</u>
					</Link>
					<p>・</p>
					<Link to='/admin'>
						<u className={`${style.loginAdminButton}`}>後台登入</u>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default LoginForm
