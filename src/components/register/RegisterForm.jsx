import Button from 'UIcomponents/buttons/Button'
import Input from '../../UIcomponents/input/Input'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import style from './RegisterForm.module.scss'
import { Link } from 'react-router-dom'


export default function Register() {
  return (
    <section className={`${style.registerContainer}`}>
      <div className={`${style.registerLogo}`}>
        <Logo />
      </div>
      <h1 className={`${style.registerTitle}`}>建立你的帳號</h1>
      <form>
        <div className={`${style.registerInputGroup}`}>
          <Input
            name='帳號'
            placeholder='請輸入帳號' />
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
        <div className={`${style.registerButtonGroup}`}>
        <Button text='註冊' size='large'/>
      </div>
        <div className={`${style.registerSecButtonGroup}`}>
        <Link>
            <u className={`${style.registerCancelLink}`}>取消重填</u>
        </Link>
      </div>
    </section>
  )
}

