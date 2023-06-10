import Button from 'UIcomponents/buttons/Button'
import Input from '../../UIcomponents/input/Input'
import style from './SettingForm.module.scss'
import { Link } from 'react-router-dom'
import Sidebar from 'UIcomponents/layouts/Sidebar'
import { useState } from 'react'

export default function Register() {
	const [account, setAccount] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [check, setCheck] = useState('')

	const handleAccountChange = (e) => {
		setAccount(e.target.value)
	}

	const handleUsernameChange = (e) => {
		setUsername(e.target.value)
	}

	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	}

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}

	const handleCheckPasswordChange = (e) => {
		setCheck(e.target.value)
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
							<Input
								label='帳號'
								placeholder='請輸入帳號'
								value={account}
								onChange={handleAccountChange}
							/>
							<Input
								label='名稱'
								placeholder='請輸入使用者名稱'
								value={username}
								onChange={handleUsernameChange}
							/>
							<Input
								label='Email'
								placeholder='請輸入Email'
								value={email}
								onChange={handleEmailChange}
							/>
							<Input
								label='密碼'
								placeholder='請設定密碼'
								type='password'
								value={password}
								onChange={handlePasswordChange}
							/>
							<Input
								label='密碼確認'
								placeholder='請再次輸入密碼'
								type='password'
								value={check}
								onChange={handleCheckPasswordChange}
							/>
						</form>
					</div>
					<div className={`${style.settingButtonGroup}`}>
						<div className={`${style.settingButton}`}>
							<Button text='儲存' size='middle' />
						</div>
						<div className={`${style.settingLoginout}`}>
							<Link className={`${style.loginout}`}>
								<u>登出</u>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}
