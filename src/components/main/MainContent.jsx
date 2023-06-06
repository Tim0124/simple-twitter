import Button from 'UIcomponents/buttons/Button'
import style from './MainContent.module.scss'

export default function PostContent () {
  return(
    <main className={`${style.postTweetContent}`}>
        <div className={`${style.postTweetForm}`}>
          <div className={`${style.contentGroup}`}>
          <div className={`${style.avatarItem}`}>
            <img src="https://picsum.photos/300/300?text=8" alt="" className={`${style.avatar}`} />
          </div>
          <div className={`${style.postTweetInputGroup}`}>
            <div className={`${style.postTweetInput}`}>
              <p>有什麼新鮮事？</p>
            </div>
          <footer className={`${style.footerArea}`}>
            <div className={`${style.footerButton}`}>
              <Button text='推文' size='middle'/>
            </div>
            </footer>
          </div>
        </div>
        </div>
      </main>
  )
}