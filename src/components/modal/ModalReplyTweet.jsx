import style from './ModalReplyTweet.module.scss'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import ModalReplyContent from '../../components/modal/ModalReplyContent'
import Button from 'UIcomponents/buttons/Button'
import { ReactComponent as Close } from '../../assets/Vector.svg'

export default function ModalReplyTweet () {
  return (
     <div className={`${style.postTweetContainer}`}>
      <header className={`${style.tweetsHeader}`}>
        <nav className={`${style.tweetsNavbar}`}>
          <div className={`${style.navTitle}`}>
            <h1 className={`${style.titleArrow}`}><Arrow/></h1>
            <h1 className={`${style.titleClose}`}><Close style={{color:'#ff6600'}}/></h1>
          </div>
          <div className={`${style.navButton}`}>
            <Button size='middle' text='回覆'/>
          </div>
        </nav>
      </header>
      <ModalReplyContent/>
      <div className={`${style.footerButtonItem}`}>
        <footer className={`${style.footerText}`}>
              <p>內容不可空白</p>
            </footer>
        <div className={`${style.footerButton}`}>
        <Button size='middle' text='回覆'/>
      </div>
      </div>
    </div>
  )
}