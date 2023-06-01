import { ReactComponent as Logo } from '../../assets/logo.svg'
import './LoginForm.scss'

function LoginForm() {
  return (
    <div className='container'>
      <div><Logo/></div>
      <h1 className='title'>登入Alphitter</h1>
      <form action="">
        <div>
          <label htmlFor="">
            <div>
              <input 
                value="帳號"
                placeholder="請輸入帳號"
                type="text"
              />
            </div>
            <div>
              <input 
                value="密碼"
                placeholder="請輸入密碼"
                type="text"
               />
            </div>
          </label>
          <button>登入</button>
        </div>
        <div>
          <a href="">註冊</a>
          <a href="">後台登入</a>
        </div>
      </form>
    </div>
  )
}

export default LoginForm