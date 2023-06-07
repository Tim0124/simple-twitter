import style from './ReplyListTweet.module.scss'
import { ReactComponent as Like } from '../../assets/unlike.svg'
import { ReactComponent as Message } from '../../assets/message.svg'
import Button from 'UIcomponents/buttons/Button'

export  default function ReplyListTweet ({avatar, name, account, content, quantity, likeQuantity, time, date}) {
  
  return (
    <div className={`${style.replyTweetsContainer}`}>
      <div className={`${style.replyTweetsList}`}>
        <div className={`${style.replyTweetsInfo}`}>
          <div className={`${style.replyTweetsSecInfo}`}>
            <div className={`${style.replyTweetsLogo}`}>
              <img src={avatar} className={`${style.replyTweetsImg}`} alt="" width='50px' heigh='50px' />
            </div>
            <div className={`${style.replyTweetsNameGroup}`}>
              <div className={`${style.replyTweetsName}`}><p>{name}</p></div>
              <div className={`${style.replyTweetsSmallAccount}`}>
                <p className={`${style.replyTweetsAccount}`}>
                  {account}
                </p>
              </div>
            </div>
          </div>
          <div className={`${style.replyTweetsContent}`}>
            <p>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.</p>
          </div>
          <div className={`${style.replyTweetsCreateGroup}`}>
            <div className={`${style.replyTweetsTimeItem}`}>
            <p className={`${style.replyTweetsTimeText}`}>上午</p>
            <p className={`${style.replyTweetsTime}`}>{time}</p>
          </div>
          <div className={`${style.replyTweetsDotItem}`}>・</div>
          <div className={`${style.replyTweetsDateItem}`}>
            <p className={`${style.replyTweetsDate}`}>{date}</p>
          </div>
          </div>
          <div className={`${style.replyTweetsQuantityGroup}`}>
            <div className={`${style.replyTweetsQuantity}`}>
              <p className={`${style.replyQuantity}`}>{quantity}</p>
              <p className={`${style.replyQuantityText}`}>回覆</p>
            </div>
            <div className={`${style.replyTweetsLikeQuantity}`}>
              <p className={`${style.replyLikeQuantity}`}>{likeQuantity}</p>
              <p className={`${style.replyQuantityText}`}>喜歡次數</p>
            </div>
          </div>
          <div className={`${style.replyTweetsIconGroup}`}>
            <div className={`${style.replyTweetsIcon}`}>
              <Message/>
            </div>
            <div className={`${style.replyTweetsLikeIcon}`}>
              <Like/>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.replyTweetsForm}`}>
            <div className={`${style.replyTweetsContentGroup}`}>
              <div className={`${style.replyTweetsInputGroup}`}>
                <div className={`${style.replyTweetsAvatarItem}`}>
                <img src="https://picsum.photos/300/300?text=82" alt="" className={`${style.replyTweetsAvatar}`} />
              </div>
                <div className={`${style.replyTweetsInputItem}`}>
                  <p>有什麼新鮮事？</p>
                </div>
              </div>
              <div className={`${style.replyTweetsButtonGroup}`}>
                <div className={`${style.replyTweetsButtonItem}`}>
                  <Button text='回覆' size='middle' />
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}