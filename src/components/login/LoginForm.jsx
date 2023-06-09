import Button from 'UIcomponents/buttons/Button'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import style from './LoginForm.module.scss'
import Input from 'UIcomponents/input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { checkPermission, login } from 'api/auth'
import Swal from 'sweetalert2'

function LoginForm() {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  

  const handleLoginClick = async () => {

    if (account.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }

    const {success, token} = await login({ account, password})

    if (success) {
      localStorage.setItem("authToken", token)
      Swal.fire({
        position: 'top',
        title: '登入成功！',
        timer: 1000,
        icon: 'success',
        showConfirmButton: false,
      });
      return
    }
    Swal.fire({
      position: 'top',
      title: '登入失敗！',
      timer: 1000,
      icon: 'error',
      showConfirmButton: false,
    })
  
  }

  const handleAccountChange = (e) => { 
    setAccount(e.target.value)
  }

   const handlePasswordChange = (e) => { 
    setPassword(e.target.value)
  }

  useEffect(() => {

      navigate('/login')

    
  },[navigate,])

  return (
    <div className={`${style.loginContainer}`}>
      <div className={`${style.loginLogo}`}><Logo /></div>
      <h1 className={`${style.loginTitle}`}>登入Alphitter</h1>
      <div className={`${style.loginInputGroup}`}>
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
      <div className={`${style.loginButton}`}>
        <Button
          text='登入'
          size='large'
          onClick={handleLoginClick}
        />
      </div>
      <div className={`${style.loginButtonGroup}`}>
        <div className={`${style.loginButtonSecGroup}`}>
          <Link to='/register'>
            <u className={`${style.loginRegisterButton}`}>註冊</u>
          </Link>
          <p>・</p>
          <Link to='/admin'>
            <u className={`${style.loginAdminButton}`} >後台登入</u>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginForm