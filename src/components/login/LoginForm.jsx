import Button from 'UIcomponents/buttons/Button'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import style from './LoginForm.module.scss'
import Input from 'UIcomponents/input/Input'
import { Link } from 'react-router-dom'


function LoginForm() {
  return (
    <div className={`${style.loginContainer}`}>
      <div className={`${style.loginLogo}`}><Logo/></div>
      <h1 className={`${style.loginTitle}`}>登入Alphitter</h1>
      <form action="">
        <div className={`${style.loginInputGroup}`}>
          <Input
            name='帳號'
            placeholder='請輸入帳號'
          />
          <Input
            name='密碼'
            placeholder='請輸入密碼'
          />
        </div>
          <Button text='登入' size='large' />
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