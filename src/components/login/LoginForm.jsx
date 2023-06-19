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
	const [accountError, setAccountError] = useState('')
	const [password, setPassword] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const navigate = useNavigate()

	const handleLoginClick = async () => {
		try {
			if (account.trim().length === 0) {
				setAccountError('帳號欄位不能為空白')
				setTimeout(() => {
					setAccountError('')
				}, 2000)
			} else if (account.length > 50) {
				setAccountError('帳號字數超過上限')
				setTimeout(() => {
					setAccountError('')
				}, 2000)
			} else if (password.trim().length === 0) {
				setPasswordError('密碼欄位不能為空白')
				setTimeout(() => {
					setPasswordError('')
				}, 2000)
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
				title: '帳號不存在！',
				timer: 2000,
				icon: 'error',
				showConfirmButton: false,
			})
		} catch (error) {
			Toast.fire({
				title: '登入失敗',
				timer: 2000,
				icon: 'error',
				showConfirmButton: false,
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
				<div className={`${style.errorMessage}`}>
					<Input
						label='帳號'
						placeholder='請輸入帳號'
						value={account}
						onChange={handleAccountChange}
						isError={!!accountError}
					/>
					{accountError && (
						<div className={style.accountErrorMessage}>{accountError}</div>
					)}
				</div>
				<div className={`${style.errorMessage}`}>
					<Input
						type='password'
						label='密碼'
						placeholder='請輸入密碼'
						value={password}
						onChange={handlePasswordChange}
						isError={!!passwordError}
					/>
					{passwordError && (
						<div className={style.passwordErrorMessage}>{passwordError}</div>
					)}
				</div>
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
