import Button from 'UIcomponents/buttons/Button'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import style from './AdminForm.module.scss'
import Input from 'UIcomponents/input/Input'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function AdminForm() {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className={`${style.adminContainer}`}>
      <div className={`${style.adminLogo}`}><Logo /></div>
      <h1 className={`${style.adminTitle}`}>後台登入</h1>
      <form action="">
        <div className={`${style.adminInputGroup}`}>
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
        <Button text='登入' size='large' />
        <div className={`${style.adminButtonGroup}`}>
          <div className={`${style.adminButtonSecGroup}`}>
            <Link>
              <u className={`${style.forntButton}`} >前台登入</u>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AdminForm