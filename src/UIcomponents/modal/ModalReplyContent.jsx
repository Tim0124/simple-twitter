import style from './ModalReplyContent.module.scss'

const replyData = {
    id: '1',
    name: 'Pizza Hut1',
    avatar: 'https://picsum.photos/300/300?text=188',
    account: `@Pizza Hut1`,
    content: 'lla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborumlla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.',
    time:"10:05",
    quantity:20,
    likeQuantity:12,
    date:"2021年11月10日",
  }

export default function ModalReplyContent () {
  return(
    <main className={`${style.replyTweetContent}`}>
        <form action="" className={`${style.replyTweetForm}`}>
          <div className={`${style.contentGroup}`}>
          <div className={`${style.avatarItem}`}>
            <img src={replyData.avatar} alt="" className={`${style.avatar}`} />
            <span className={`${style.line}`}></span>
          </div>
          <div className={`${style.replyTweetInfo}`}>
            <div className={`${style.replyTweetNameGroup}`}>
              <div className={`${style.replyTweetName}`}>
                <p className={`${style.tweetName}`}>{replyData.name}</p>
              </div>
              <div className={`${style.replyTweetSmallAccount}`}>
                <div className={`${style.replyTweetAccount}`}>
                  <p>{replyData.account}</p>
                </div>
                <div className={`${style.replyTweetDot}`}>
                  <p>・</p>
                </div>
                <div className={`${style.replyTweetTime}`}>
                  <p>{replyData.time}</p>
                </div>
              </div>
            </div>
            <div className={`${style.replyTweetReplyGroup}`}>
              <div className={`${style.replyTweetReplyTextItem}`}>
                <p className={`${style.replyTweetText}`}>回覆</p>
              </div>
              <div className={`${style.replyTweetReplyAccountItem}`}>
                <p className={`${style.replyTweetAccountText}`}>{replyData.account}</p>
              </div>
            </div>
            <div className={`${style.replyTweetTextItem}`}>
                <p className={`${style.replyTweetContentText}`}>{replyData.content}</p>
            </div>
          </div>
          </div>
          <div className={`${style.replyTweetInputGroup}`}>
            <div className={`${style.replyTweetAvatarItem}`}>
              <img src={replyData.avatar} alt="" className={`${style.replyTweetAvatar}`} />
            </div>
            <textarea className={`${style.replyTweetInput}`} type="text" placeholder='推你的回覆'/>
            <footer className={`${style.footerText}`}>
              <p>內容不可空白</p>
            </footer>
          </div>
        </form>
      </main>
  )
}