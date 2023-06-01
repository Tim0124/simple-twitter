import { ReactComponent as Logo } from '../../assets/logo.svg'
import './RegisterForm.scss'

export default function Register() {
  return (
    <section className='register'>
      <Logo className='' />
      <h1>建立你的帳號</h1>
      <div>
        <label>帳號
          <input placeholder='請輸入帳號'></input>
        </label>
      </div>
      <div>
        <label>名稱
          <input placeholder='請輸入使用者名稱'></input>
        </label>
      </div>
      <div>
        <label>Email
          <input placeholder='請輸入Email'></input>
        </label>
      </div>
      <div>
        <label>密碼
          <input placeholder='請設定密碼'></input>
        </label>
      </div>
      <div>
        <label>確認密碼
          <input placeholder='請再次輸入密碼'></input>
        </label>
      </div>
      <button>註冊</button>
      <button>取消重填</button>
    </section>

  )
}