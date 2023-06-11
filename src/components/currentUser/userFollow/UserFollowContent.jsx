import style from './UserFollowContent.module.scss'
import { ReactComponent as Like } from '../../../assets/like.svg'
import { ReactComponent as Message } from '../../../assets/message.svg'
import Button from 'UIcomponents/buttons/Button'

export default function UserFollowerContent ({name, avatar, content, isFollow}) {

  return (
    <div className={`${style.userFollowContainer}`}>
      <div className={`${style.userFollowList}`}>
        <div className={`${style.userFollowLogo}`}>
          <img src={avatar} className={`${style.userFollowImg}`} alt="" width='50px' heigh='50px' />
        </div>
        <div className={`${style.userFollowInfo}`}>
          <div className={`${style.userFollowSecInfo}`}>
            <div className={`${style.userFollowNameGroup}`}>
              <div className={`${style.userFollowName}`}>{name}</div>
            </div>
            {isFollow === true ?
            <div className={`${style.userFollowingButton}`}>
            <Button size='middle' text='正在跟隨'/>
            </div>
            :
            <div className={`${style.userFollowButton}`}>
              <Button size='white-exsmall' text='跟隨'/>
            </div> 
            }
          </div>
          <div className={`${style.userFollowContent}`}>{content}</div>
        </div>
      </div>
    </div>
  )
}