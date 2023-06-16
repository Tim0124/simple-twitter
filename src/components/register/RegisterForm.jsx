import Button from 'UIcomponents/buttons/Button'
import Input from '../../UIcomponents/input/Input'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import style from './RegisterForm.module.scss'
import { checkPermission, register } from 'api/auth'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Toast } from 'heplers/helpers'

export default function Register() {
	const [account, setAccount] = useState('')
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [accountError, setAccountError] = useState('')
	const [nameError, setNameError] = useState('')
	const [password, setPassword] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const [emailError, setEmailError] = useState('')
	const [checkPassword, setCheckPassword] = useState('')
	const [checkError, setCheckError] = useState('')
	const navigate = useNavigate()

	const handleClick = async () => {
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
		} else if (name.trim().length === 0) {
			setNameError('名稱欄位不能為空白')
			setTimeout(() => {
				setNameError('')
			}, 2000)
		} else if (name.length > 50) {
			setNameError('名稱字數超過上限')
			setTimeout(() => {
				setNameError('')
			}, 2000)
		} else if (password.trim().length === 0) {
			setPasswordError('密碼欄位不能為空白')
			setTimeout(() => {
				setPasswordError('')
			}, 2000)
		} else if (email.trim().length === 0) {
			setEmailError('Email欄位不能為空白')
			setTimeout(() => {
				setEmailError('')
			}, 2000)
		} else if (checkPassword.trim().length === 0) {
			setCheckError('密碼確認欄位不能為空')
			setTimeout(() => {
				setCheckError('')
			}, 2000)
		} else if (password !== checkPassword) {
			setCheckError('密碼與密碼確認輸入值不同')
			setTimeout(() => {
				setCheckError('')
			}, 2000)
		}

		const { success } = await register({
			account,
			name,
			email,
			password,
			checkPassword,
		})

		if (success) {
			Toast.fire({
				title: '註冊成功！',
				timer: 1000,
				icon: 'success',
				showConfirmButton: false,
			})
			navigate('/login')
			return
		}
		Toast.fire({
			title: '註冊失敗！',
			timer: 1000,
			icon: 'error',
			showConfirmButton: false,
		})
	}

	const handleAccountChange = (e) => {
		setAccount(e.target.value)
	}
	const handleNameChange = (e) => {
		setName(e.target.value)
	}
	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}
	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	}
	const handleCheckPasswordChange = (e) => {
		setCheckPassword(e.target.value)
	}

	return (
		<div className={`${style.registerWrapper}`}>
			<div className={`${style.registerContainer}`}>
				<div className={`${style.registerLogo}`}>
					<Logo />
				</div>
				<h1 className={`${style.registerTitle}`}>建立你的帳號</h1>
				<div className={`${style.registerInputGroup}`}>
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
							label='名稱'
							placeholder='請輸入使用者名稱'
							value={name}
							onChange={handleNameChange}
							isError={!!nameError}
						/>
						{nameError && (
							<div className={style.nameErrorMessage}>{nameError}</div>
						)}
					</div>
					<div className={`${style.errorMessage}`}>
						<Input
							label='Email'
							placeholder='請輸入Email'
							value={email}
							onChange={handleEmailChange}
							isError={!!emailError}
						/>
						{emailError && (
							<div className={style.emailErrorMessage}>{emailError}</div>
						)}
					</div>
					<div className={`${style.errorMessage}`}>
						<Input
							label='密碼'
							placeholder='請設定密碼'
							type='password'
							value={password}
							onChange={handlePasswordChange}
							isError={!!passwordError}
						/>
						{passwordError && (
							<div className={style.passwordErrorMessage}>{passwordError}</div>
						)}
					</div>
					<div className={`${style.errorMessage}`}>
						<Input
							label='密碼確認'
							placeholder='請再次輸入密碼'
							type='password'
							value={checkPassword}
							onChange={handleCheckPasswordChange}
							isError={!!checkError}
						/>
						{checkError && (
							<div className={style.checkPasswordErrorMessage}>
								{checkError}
							</div>
						)}
					</div>
				</div>
				<div className={`${style.registerButtonGroup}`}>
					<Button text='註冊' size='large' onClick={handleClick} />
				</div>
				<div className={`${style.registerSecButtonGroup}`}>
					<Link to='/login'>
						<u className={`${style.registerCancelLink}`}>取消</u>
					</Link>
				</div>
			</div>
		</div>
	)
}
