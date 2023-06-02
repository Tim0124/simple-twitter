import Button from 'UIcomponents/buttons/Button'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import './LoginForm.scss'
import Input from 'UIcomponents/input/Input'

function LoginForm() {
  return (
    <div className='container'>
      <div className='title'><Logo/></div>
      <h1 className='title'>登入Alphitter</h1>
      <form action="">
        <div className='inputGroup'>
          <Input
            name='帳號'
            placeholder='請輸入帳號'
          />
          <Input
            name='密碼'
            placeholder='請輸入密碼'
          />
          <div>
            <Button text='登入' size='large'/>
          </div>
        </div>
        <div className='link'>
          <a href="">註冊</a>・
          <a href="">後台登入</a>
        </div>
      </form>
    </div>
  )
}

export default LoginForm