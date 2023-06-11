import style from './UserReplyContent.module.scss'
import { ReactComponent as Like } from '../../assets/redlike.svg'
import { ReactComponent as Message } from '../../assets/message.svg'
import { ReactComponent as Dislike } from '../../assets/unlike.svg'
import { useState } from 'react';

export default function UserReplyContent ({name, account, avatar, content, isLike, quantity, likeQuantity, time}) {
  const [like, setLike] = useState(isLike);
  const [isLikeQuantity, setIsLikeQuantity] = useState(likeQuantity)

  const handleLikeClick = () => {
    setLike(!like);
    if (!like) {
      setIsLikeQuantity(isLikeQuantity + 1);
    } else {
      setIsLikeQuantity(isLikeQuantity - 1);
    }
  }
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
              {like === true ?
                <Like width='16px' height='16px' onClick={handleLikeClick} /> :
                <Dislike width='16px' height='16px' onClick={handleLikeClick} />}
              <p>{isLikeQuantity}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
