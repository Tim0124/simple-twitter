import Button from 'UIcomponents/buttons/Button'
import Input from '../../UIcomponents/input/Input'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import style from './RegisterForm.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Register() {

  const [account, setAccount] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [ckeck, setCheck] = useState('')

  return (
    <div className={`${style.registerWrapper}`}>
      <div className={`${style.registerContainer}`}>
        <div className={`${style.registerLogo}`}>
          <Logo />
        </div>
        <h1 className={`${style.registerTitle}`}>建立你的帳號</h1>
        <form>
          <div className={`${style.registerInputGroup}`}>
            <Input
              label='帳號'
              placeholder='請輸入帳號'
              value={account}
              onChange={(accountInputValue) => setAccount(accountInputValue)}/>
            <Input
              label='名稱'
              placeholder='請輸入使用者名稱'
              value={username}
              onChange={(nameInputValue) => setUsername(nameInputValue)}/>
            <Input
              label='Email'
              placeholder='請輸入Email'
              value={email}
              onChange={(emailInputValue) => setEmail(emailInputValue)}/>
            <Input
              label='密碼'
              placeholder='請設定密碼'
              type='password'
              value={password}
              onChange={(passwordInputValue) => setPassword(passwordInputValue)}/>
            <Input
              label='密碼確認'
              placeholder='請再次輸入密碼'
              type='password'
              value={ckeck}
              onChange={(checkInputValue) => setCheck(checkInputValue)}/>
          </div>
        </form>
        <div className={`${style.registerButtonGroup}`}>
          <Button text='註冊' size='large' />
        </div>
        <div className={`${style.registerSecButtonGroup}`}>
          <Link>
            <u className={`${style.registerCancelLink}`}>取消重填</u>
          </Link>
        </div>
      </div>
    </div>
  )
}

