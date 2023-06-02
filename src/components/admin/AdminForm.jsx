import Button from 'UIcomponents/buttons/Button'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import './AdminForm.scss'
import Input from 'UIcomponents/input/Input'
import { Link } from 'react-router-dom'

function LoginForm() {
  return (
    <div className='loginContainer'>
      <div className='loginLogo'><Logo /></div>
      <h1 className='loginTitle'>後台登入</h1>
      <form action="">
        <div className='loginInputGroup'>
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
        <div className='loginButtonGroup'>
          <div className='loginButtonSecGroup'>
            <Link>
              <u className='loginAdminButton' >前台登入</u>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm