import style from './ModalPostTweet.module.scss'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import ModalContent from '../../components/modal/ModalContent'
import Button from 'UIcomponents/buttons/Button'
import { ReactComponent as Close } from '../../assets/X.svg'

export default function PostTweet () {
  return (
    <div className={`${style.postTweetContainer}`}>
      <header className={`${style.tweetsHeader}`}>
        <nav className={`${style.tweetsNavbar}`}>
          <div className={`${style.navTitle}`}>
            <h1 className={`${style.titleArrow}`}><Arrow/></h1>
            <h1 className={`${style.titleClose}`}><Close style={{color:'#ff6600'}}/></h1>
          </div>
          <div className={`${style.navButton}`}>
            <Button size='middle' text='推文'/>
          </div>
        </nav>
      </header>
      <ModalContent/>
      <div className={`${style.footerButtonItem}`}>
        <div className={`${style.footerButton}`}>
        <Button size='middle' text='推文'/>
      </div>
      </div>
    </div>
  )
}