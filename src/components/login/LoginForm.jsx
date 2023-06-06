import Button from 'UIcomponents/buttons/Button'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import style from './LoginForm.module.scss'
import Input from 'UIcomponents/input/Input'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { login } from 'api/auth'


function LoginForm() {

  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')


  const handleClick = async () => {

    if (account.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }

    const { success, token } = await login({ account, password })

    if (success) {
      localStorage.setItem('authToken', token);
    }
  }

  return (
    <div className={`${style.loginContainer}`}>
      <div className={`${style.loginLogo}`}><Logo /></div>
      <h1 className={`${style.loginTitle}`}>登入Alphitter</h1>
      <form action="">
        <div className={`${style.loginInputGroup}`}>
          <Input
            label='帳號'
            placeholder='請輸入帳號'
            value={account}
            onChange={(accountInputValue) => setAccount(accountInputValue)}
          />
          <Input
            type='password'
            label='密碼'
            placeholder='請輸入密碼'
            value={password}
            onChange={(passwordInputValue) => setPassword(passwordInputValue)}
          />
        </div>
        <Button
          text='登入'
          size='large'
          onRegister={handleClick} />
        <div className={`${style.loginButtonGroup}`}>
          <div className={`${style.loginButtonSecGroup}`}>
            <Link>
              <u className={`${style.loginRegisterButton}`}>註冊</u>
            </Link>
            <p>・</p>
            <Link>
              <u className={`${style.loginAdminButton}`} >後台登入</u>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm