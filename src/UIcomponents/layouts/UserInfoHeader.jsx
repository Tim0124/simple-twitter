import style from './UserInfoHeader.module.scss'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import { Link } from 'react-router-dom'

export default function UserInfoHeader ({name, tweet, page}) {
  return (
    <header className={`${style.userInfoHeader}`}>
          <nav className={`${style.userInfoNavbar}`}>
            <Link to={page}>
              <div className={`${style.userInfoNavTitle}`}>
              <h1 className={`${style.userInfoText}`}><Arrow /></h1>
            </div>
            </Link>
            <div className={`${style.userInfoHeaderGroup}`}>
              <div className={`${style.userInfoNavName}`}>{name}</div>
              <div className={`${style.userInfoTweet}`}>{tweet}&nbsp;推文</div>
            </div>
          </nav>
        </header>
  )
}