import style from './UserTab.module.scss'

export default function UserTab () {
  return(
    <section className={`${style.userTweetsWrapper}`}>
        <div className={`${style.userTweetsGroup}`}>
          <div className={`${style.userTweetsItem} ` }>
            <p>推文</p>
          </div>
          <div className={`${style.userReplyItem} ${style.userActive}`}>
            <p>回覆</p>
          </div>
          <div className={`${style.userLikeItem} `}>
            <p>喜歡的內容</p>
          </div>
        </div>
      </section>
  )
}