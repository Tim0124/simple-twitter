import Button from 'UIcomponents/buttons/Button'
import style from './ReplyListHeader.module.scss'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'

export default function ReplyListHeader({title, arrow}) {
  return (
    <header className={`${style.tweetsHeader}`}>
      <nav className={`${style.tweetsNavbar}`}>
        <div className={`${style.navIconItem}`}>
          <div className={`${style.navIcon}`}><Arrow/></div>
        </div>
        <div className={`${style.navTitleItem}`}>
          <p className={`${style.navTitle}`}>推文</p>
        </div>
      </nav>
    </header>
  )
}