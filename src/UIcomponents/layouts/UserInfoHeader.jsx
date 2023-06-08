import style from './UserInfoHeader.module.scss'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'

export default function UserInfoHeader ({name, tweet}) {
  return (
    <header className={`${style.userInfoHeader}`}>
          <nav className={`${style.userInfoNavbar}`}>
            <div className={`${style.userInfoNavTitle}`}>
              <h1 className={`${style.userInfoText}`}><Arrow /></h1>
            </div>
            <div className={`${style.userInfoHeaderGroup}`}>
              <div className={`${style.userInfoNavName}`}>{name}</div>
              <div className={`${style.userInfoTweet}`}>{tweet}&nbsp;推文</div>
            </div>
          </nav>
        </header>
  )
}