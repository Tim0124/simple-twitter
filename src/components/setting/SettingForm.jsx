import Button from 'UIcomponents/buttons/Button'
import Input from '../../UIcomponents/input/Input'
import style from './SettingForm.module.scss'
import { Link } from 'react-router-dom'
import Sidebar from 'UIcomponents/layouts/Sidebar'

export default function Register() {
  return (
    <>
      <div className={`${style.settingWrapper}`}>
        <div className={`${style.rightContainer}`}></div>
        <section className={`${style.settingContainer}`}>
          <div className={`${style.settingHeaderBorder}`}>
            <h1 className={`${style.settingTitle}`}>帳戶設定</h1>
          </div>
          <div className={`${style.settingInputGroup}`}>
            <form>
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
                name='密碼再確認'
                placeholder='請再次輸入密碼' />
            </form>
          </div>
          <div className={`${style.settingButtonGroup}`}>
            <Button text='儲存' size='extremely-small' />
            <div className={`${style.settingButtonSecGroup}`}>
            </div>
          </div>
        </section>
        <section className={`${style.settingFooter}`}>
          <div className={`${style.settingFooterBorder}`}></div>
        </section>
        <Sidebar />
      </div>
    </>
  )
}

