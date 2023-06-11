import style from './MainTweetsContent.module.scss'
import { ReactComponent as Dislike } from '../../assets/unlike.svg'
import { ReactComponent as Like } from '../../assets/redlike.svg'
import { ReactComponent as Message } from '../../assets/message.svg'
import { useState } from 'react'

export default function MainTweetsContent({ id, name, avatar, account, content, time, quantity, isLike, isLikeQuantity, onCurrentClick}) {
  const [like, setLike] = useState(isLike);
  const [likeQuantity, setLikeQuantity] = useState(isLikeQuantity);

  const handleLikeClick = () => {
    setLike(!like);
    if (!like) {
      setLikeQuantity(prevQuantity => prevQuantity + 1);
    } else {
      setLikeQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className={`${style.mainTweetsContainer}`}>
      <div className={`${style.mainTweetsList}`}>
        <div className={`${style.mainTweetsLogo}`} onClick={()=>onCurrentClick(id)}>
          <img src={avatar} className={`${style.mainTweetsImg}`} alt="" width='50px' heigh='50px' />
        </div>
        <div className={`${style.mainTweetsInfo}`}>
          <div className={`${style.mainTweetsSecInfo}`}>
            <div className={`${style.mainTweetsNameGroup}`}>
              <div className={`${style.mainTweetsName}`}>{name}</div>
              <div className={`${style.mainTweetsSmallAccount}`}>
                <div className={`${style.mainTweetsAccount}`}>{account}</div>
                <div className={`${style.mainTweetsdot}`}>・</div>
                <div className={`${style.mainTweetsTime}`}>{time}</div>
              </div>
            </div>
          </div>
          <div className={`${style.mainTweetsContent}`}>{content}</div>
          <div className={`${style.mainTweetsQuantityGroup}`}>
            <div className={`${style.mainTweetsQuantity}`}>
              <Message width='16px' height='16px'/>
              <p>{quantity}</p>
              </div>
            <div className={`${style.mainTweetsLikeQuantity}`}>
              {like === true ? 
                <Like width='16px' height='16px' onClick={handleLikeClick} /> :
                <Dislike width='16px' height='16px' onClick={handleLikeClick}/> }
              <p>{likeQuantity}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}