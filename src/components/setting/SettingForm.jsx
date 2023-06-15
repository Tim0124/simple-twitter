import Button from 'UIcomponents/buttons/Button'
import Input from '../../UIcomponents/input/Input'
import style from './SettingForm.module.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from 'UIcomponents/layouts/Sidebar'
import { useContext, useEffect, useState } from 'react'
import { ChangeStepContext } from 'context/SideBarContext'
import { Toast } from 'heplers/helpers'
import { setting } from 'api/auth'
import authorization from 'api/authorization'
import tweetAPI from 'api/tweetAPI'

export default function Setting() {
	const [account, setAccount] = useState('')
	const [accountError, setAccountError] = useState('')
	const [name, setName] = useState('')
	const [nameError, setNameError] = useState('')
	const [password, setPassword] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const [email, setEmail] = useState('')
	const [emailError, setEmailError] = useState('')
	const [checkPassword, setCheckPassword] = useState('')
	const [checkError, setCheckError] = useState('')
	const { pathname } = useLocation()
	const [accountAPI, setAccountAPI] = useState([])
	const navigate = useNavigate()
	const handleChangeStep = useContext(ChangeStepContext)
	const token = localStorage.getItem('authToken')
	const id = localStorage.getItem('userId')

	useEffect(() => {
		tweetAPI.getCurrentUserTweet(id).then((response) => {
			const { data } = response
			setAccountAPI(data)
		})
	}, [])

	useEffect(() => {
		if (pathname === '/setting') {
			handleChangeStep(3)
		}
	}, [pathname])

	const handleAccountChange = (e) => {
		setAccount(e.target.value)
	}

	const handleUsernameChange = (e) => {
		setName(e.target.value)
	}

	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	}

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}

	const handleCheckPasswordChange = (e) => {
		setCheckPassword(e.target.value)
	}

	const handleClick = () => {
		localStorage.removeItem('authToken')
		Toast.fire({
			title: '已登出',
			icon: 'info',
		})
		navigate('/login')
	}

	const handleSaveClick = async (e) => {
		e.preventDefault()
		if (account.trim().length === 0) {
			setAccountError('帳號欄位不能為空白')
		} else if (account.length > 50) {
			setAccountError('帳號字數超過上限')
		} else if (name.length === 0) {
			setNameError('名稱欄位不能為空白')
		} else if (name.length > 50) {
			setNameError('名稱字數超過上限')
		} else if (password.length === 0) {
			setPasswordError('密碼欄位不能為空白')
		} else if (email.length === 0) {
			setEmailError('Email欄位不能為空白')
		} else if (checkPassword.length === 0) {
			setCheckError('密碼確認欄位不能為空')
		} else if (password !== checkPassword) {
			setCheckError('密碼與密碼確認輸入值不同')
		}

		const result = await setting({
			id,
			token,
			account,
			email,
			name,
			password,
			checkPassword,
		})

		if (result) {
			Toast.fire({
				title: '修改成功！',
				icon: 'success',
			})
		}
		Toast.fire({
			title: '修改失敗！',
			icon: 'error',
		})
	}

	return (
		<>
			<div className={`${style.settingWrapper}`}>
				<section className={`${style.settingContainer}`}>
					<div className={`${style.settingHeaderBorder}`}>
						<h1 className={`${style.settingTitle}`}>帳戶設定</h1>
					</div>
					<div>
						<form className={`${style.settingInputGroup}`}>
							<div className={`${style.errorMessage}`}>
								<Input
									label='帳號'
									type='text'
									value={accountAPI.account}
									onChange={handleAccountChange}
								/>
								{accountError && (
									<div className={style.accountErrorMessage}>
										{accountError}
									</div>
								)}
							</div>
							<div className={`${style.errorMessage}`}>
								<Input
									label='名稱'
									placeholder='請輸入使用者名稱'
									value={accountAPI.name}
									onChange={handleUsernameChange}
								/>
								{nameError && (
									<div className={style.nameErrorMessage}>{nameError}</div>
								)}
							</div>
							<div className={`${style.errorMessage}`}>
								<Input
									label='Email'
									placeholder='請輸入Email'
									value={accountAPI.email}
									onChange={handleEmailChange}
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
								/>
								{passwordError && (
									<div className={style.passwordErrorMessage}>
										{passwordError}
									</div>
								)}
							</div>
							<div className={`${style.errorMessage}`}>
								<Input
									label='密碼確認'
									placeholder='請再次輸入密碼'
									type='password'
									value={checkPassword}
									onChange={handleCheckPasswordChange}
								/>
								{checkError && (
									<div className={style.checkPasswordErrorMessage}>
										{checkError}
									</div>
								)}
							</div>
						</form>
					</div>
					<div className={`${style.settingButtonGroup}`}>
						<div className={`${style.settingButton}`}>
							<Button text='儲存' size='middle' onClick={handleSaveClick} />
						</div>
						<div className={`${style.settingLoginout}`}>
							<div className={`${style.loginout}`} onClick={handleClick}>
								<u>登出</u>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}
