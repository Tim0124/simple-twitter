import Button from 'UIcomponents/buttons/Button'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import style from './AdminForm.module.scss'
import Input from 'UIcomponents/input/Input'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { adminLogin } from 'api/auth'

function AdminForm() {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = async () => {

    if (account.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }

    const { success, token } = await adminLogin({ account, password })

    if (success) {
      localStorage.setItem('authToken', token);
    }
  }

  return (
    <div className={`${style.adminContainer}`}>
      <div className={`${style.adminLogo}`}><Logo /></div>
      <h1 className={`${style.adminTitle}`}>後台登入</h1>
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
        <Link to='/admin/tweets'>
          <div className={`${style.adminButtonGroup}`}>
            <Button 
              text='登入' 
              size='large'
              onClick={handleClick} 
            />
            </div>
        </Link>
        <div className={`${style.adminButtonGroup}`}>
          <div className={`${style.adminButtonSecGroup}`}>
            <Link to='/login'>
              <u className={`${style.forntButton}`} >前台登入</u>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default AdminForm