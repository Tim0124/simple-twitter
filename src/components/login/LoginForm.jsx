import { ReactComponent as Logo } from '../../assets/logo.svg'
import './LoginForm.scss'

function LoginForm() {
  return (
    <div className='container'>
      <div className='title'><Logo/></div>
      <h1 className='title'>登入Alphitter</h1>
      <form action="">
        <div>
          <label htmlFor="">
            <div className='inputTitle'>帳號</div>
              <input 
                placeholder="請輸入帳號"
                type="text"
                name='帳號'
              />
             </label>
              <label htmlFor="">
            <div className='inputTitle'>密碼</div>
              <input 
                placeholder="請輸入密碼"
                type="text"
               />
          </label>
          <div className='group'>
            <button className='button'>登入</button>
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