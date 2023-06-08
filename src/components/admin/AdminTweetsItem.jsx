import style from './AdminTweetsItem.module.scss'
import { ReactComponent as X } from '../../assets/X.svg'

export default function AdminTweetsItem({ name, avatar, account, content, time }) {
  return (
    <div className={`${style.adminTweetsContainer}`}>
      <div className={`${style.adminTweetsList}`}>
        <div className={`${style.adminTweetsLogo}`}>
          <img src={avatar} className={`${style.adminTweetsImg}`} alt="" width='50px' heigh='50px' />
        </div>
        <div className={`${style.adminTweetsInfo}`}>
          <div className={`${style.adminTweetsSecInfo}`}>
            <div className={`${style.adminTweetsNameGroup}`}>
              <div className={`${style.adminTweetsName}`}>{name}</div>
              <div className={`${style.adminTweetsSmallAccount}`}>
                <div className={`${style.adminTweetsAccount}`}>{account}</div>
                <div className={`${style.adminTweetsdot}`}>・</div>
                <div className={`${style.adminTweetsTime}`}>{time}</div>
              </div>
            </div>
            <div className={`${style.adminTweetsX}`}>
              <X/>
            </div>
          </div>
          <div className={`${style.adminTweetsContent}`}>{content}</div>
        </div>
      </div>
    </div>
  )
}