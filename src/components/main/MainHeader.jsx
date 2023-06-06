import Button from 'UIcomponents/buttons/Button'
import style from './MainHeader.module.scss'

export default function MainHeader({title, arrow}) {
  return (
    
      <header className={`${style.tweetsHeader}`}>
        <nav className={`${style.tweetsNavbar}`}>
          <div className={`${style.navAvatarItem}`}>
            <img className={`${style.navAvatar}`} src='https://picsum.photos/300/300?text=99' alt="" />
          </div>
          <div className={`${style.navTitle}`}>
            <h1 className={`${style.titleText}`}>{arrow}</h1>
          </div>
          <div className={`${style.navButton}`}>
            <Button size='middle' text='推文'/>
          </div>
        </nav>
      </header>
  )
}