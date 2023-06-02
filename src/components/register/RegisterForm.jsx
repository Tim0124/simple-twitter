import Input from '../../UIcomponents/input/Input'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import './RegisterForm.scss'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <section className='register'>
      <Logo/>
      <h1>建立你的帳號</h1>
      <form>
        <div className='inputGroup'>
          <Input 
            name='帳號'
            placeholder='請輸入帳號'/>
          <Input
            name='名稱'
            placeholder='請輸入使用者名稱' />
          <Input
            name='Email'
            placeholder='請輸入Email' />
          <Input
            name='密碼'
            placeholder='請設定密碼' />
          <Input
            name='密碼確認'
            placeholder='請再次輸入密碼' />
        </div>
      </form>
      <div className='buttonGroup'>
      <button className='registerBotton'>註冊</button>
      <Link>
        <p className='cancelLink' >取消重填</p>
      </Link>
      </div>
    </section>

  )
}