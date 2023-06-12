import Button from 'UIcomponents/buttons/Button'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import style from './AdminForm.module.scss'
import Input from 'UIcomponents/input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Toast } from 'heplers/helpers'
import { adminLogin } from 'api/auth'

function AdminForm() {
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

      const { success, token, user } = await adminLogin({
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
        navigate('/admin/tweets')
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
  return (
    <div className={`${style.adminContainer}`}>
      <div className={`${style.adminLogo}`}><Logo /></div>
      <h1 className={`${style.adminTitle}`}>後台登入</h1>
      <div className={`${style.adminInputGroup}`}>
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
      <Button text='登入' size='large' onClick={handleLoginClick} />
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