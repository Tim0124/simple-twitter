import Button from 'UIcomponents/buttons/Button'
import Input from '../../UIcomponents/input/Input'
import style from './SettingForm.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ChangeStepContext } from 'context/SideBarContext'
import { Toast } from 'heplers/helpers'
import { checkPermission, setting } from 'api/auth'
import userAPI from 'api/userAPI'

export default function Setting() {
	const [accountAPI, setAccountAPI] = useState([])
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
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const handleChangeStep = useContext(ChangeStepContext)
	const token = localStorage.getItem('authToken')
	const id = localStorage.getItem('userId')

	useEffect(() => {
		userAPI
			.getCurrentUser()
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(data.message)
				}
				const { data } = response
				setAccountAPI(data)
				setAccount(data.account)
				setName(data.name)
				setEmail(data.email)
			})
			.catch((error) => {
				console.error('[Setting error: ]', error)
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
		} else if (email.trim().length === 0) {
			setEmailError('Email欄位不能為空白')
			setTimeout(() => {
				setEmailError('')
			}, 2000)
		} else if (password !== checkPassword) {
			setCheckError('密碼與密碼確認輸入值不同')
			setTimeout(() => {
				setCheckError('')
			}, 2000)
		}

		const { success, errorMessage } = await setting({
			id,
			token,
			account,
			email,
			name,
			password,
			checkPassword,
		})
		if (success) {
			Toast.fire({
				title: '修改成功！',
				timer: 1000,
				icon: 'success',
				showConfirmButton: false,
			})
		} else if (errorMessage === 'Error: account 已重複註冊') {
			setTimeout(() => {
				setAccountError('')
				Toast.fire({
					title: '此帳號已存在',
					timer: 1000,
					icon: 'error',
					showConfirmButton: false,
				})
			}, 2000)
		} else if (errorMessage === 'Error: email 已重複註冊') {
			setTimeout(() => {
				setEmailError('')
				Toast.fire({
					title: '此信箱已被註冊',
					timer: 1000,
					icon: 'error',
					showConfirmButton: false,
				})
			}, 2000)
		} else {
			Toast.fire({
				title: '修改失敗！',
				timer: 1000,
				icon: 'error',
				showConfirmButton: false,
			})
		}
	}

	useEffect(() => {
		const checkTokenIsValid = async () => {
			try {
				const authToken = localStorage.getItem('authToken')
				if (!authToken) {
					navigate('/login')
				}
				const result = await checkPermission(authToken)
				if (!result) {
					navigate('/login')
				}
			} catch (error) {
				console.error(error)
			}
		}

		checkTokenIsValid()
	}, [])

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
									placeholder='請輸入帳號'
									value={account}
									onChange={handleAccountChange}
									isError={!!accountError}
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
									value={name}
									onChange={handleUsernameChange}
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
									isError={!!checkError}
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
