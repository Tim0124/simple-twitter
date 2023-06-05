import style from './MainTweetsContent.module.scss'
import { ReactComponent as Like } from '../../assets/unlike.svg'
import { ReactComponent as Message } from '../../assets/message.svg'

export default function MainTweetsContent ({name, avatar, account, content,time, quantity, likeQuantity}) {

  return (
    <div className={`${style.mainTweetsContainer}`}>
      <div className={`${style.mainTweetsList}`}>
        <div className={`${style.mainTweetsLogo}`}>
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
              <Message/>
              <p>{quantity}</p>
              </div>
            <div className={`${style.mainTweetsLikeQuantity}`}>
              <Like/>
              <p>{likeQuantity}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}