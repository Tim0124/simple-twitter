import style from './FollowTab.module.scss'

export default function FollowTab () {
  
  return(
    <section className={`${style.userTweetsWrapper}`}>
        <div className={`${style.userTweetsGroup}`}>
          <div className={`${style.userTweetsItem} ${style.userAction}` }>
            <p>追隨者</p>
          </div>
          <div className={`${style.userReplyItem} `}>
            <p>正在追隨</p>
          </div>
        </div>
      </section>
  )
}