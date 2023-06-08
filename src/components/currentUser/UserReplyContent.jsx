import style from './UserReplyContent.module.scss'
import { ReactComponent as Like } from '../../assets/unlike.svg'
import { ReactComponent as Message } from '../../assets/message.svg'

export default function UserReplyContent ({name, account, avatar, content, quantity, likeQuantity, time}) {
  return (
    <div className={`${style.userReplyContainer}`}>
      <div className={`${style.userReplyList}`}>
        <div className={`${style.userReplyLogo}`}>
          <img src={avatar} className={`${style.userReplyImg}`} alt="" width='50px' heigh='50px' />
        </div>
        <div className={`${style.userReplyInfo}`}>
          <div className={`${style.userReplySecInfo}`}>
            <div className={`${style.userReplyNameGroup}`}>
              <div className={`${style.userReplyName}`}>{name}</div>
              <div className={`${style.userReplySmallAccount}`}>
                <div className={`${style.userReplyAccount}`}>
                  <p>{account}</p>
                </div>
                <div className={`${style.userReplyDot}`}>
                  <p>・</p>
                </div>
                <div className={`${style.userReplyTime}`}>
                  <p>{time}</p>
                  <p>小時</p> 
                </div>
              </div>
            </div>
          </div>
          <div className={`${style.replyListItemAccountGroup}`}>
            <p className={`${style.replyListItemText}`}>回覆</p>
            <p className={`${style.replyListItemAccount}`}>{account}</p>
          </div>
          <div className={`${style.replyListItemContentGroup}`}>
            <p className={`${style.replyListItemContentItem}`}>{content}</p>
          </div>
          <div className={`${style.userReplyQuantityGroup}`}>
            <div className={`${style.userReplyQuantity}`}>
              <Message width='16px' height='16px'/>
              <p>{quantity}</p>
              </div>
            <div className={`${style.userReplyLikeQuantity}`}>
              <Like width='16px' height='16px'/>
              <p>{likeQuantity}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}