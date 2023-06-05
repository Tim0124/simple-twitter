import MainHeader from './MainHeader'
import style from './PostTweet.module.scss'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'

export default function PostTweet () {
  return (
    <div className={`${style.postTweetContainer}`}>
      <MainHeader title='首頁' arrow={<Arrow/>}/>
      <main className={`${style.postTweetContent}`}>
        <form action="">
          <div className={`${style.contentGroup}`}>
          <div className={`${style.avatarItem}`}>
            <img src="https://picsum.photos/300/300?text=8" alt="" className={`${style.avatar}`} />
          </div>
          <input className={`${style.postTweet}`} type="text" />
        </div>
        </form>
      </main>
    </div>
  )
}
