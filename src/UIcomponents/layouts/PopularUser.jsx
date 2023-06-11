import style from './PopularUser.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Button from '../../UIcomponents/buttons/Button'; 
import { useState } from 'react'

export default function PopularUser({ name, avatar, account, isFollow }) {
  const [follow, setFollow] = useState(isFollow)

  const handleFollowClick = () => {
    setFollow(!follow);
  }

  return (
    <div className={`${style.popularUserContainer}`}>
      <div className={`${style.popularUserItems}`}>
        <div className={`${style.popularUserList}`}>
          <div className={`${style.popularUserLogo}`}>
            <img src={avatar} className={`${style.popularUserImg}`} alt="" />
          </div>
          <div className={`${style.popularUserNameGroup}`}>
            <div className={`${style.popularUserName}`}>{name}</div>
            <div className={`${style.popularUserAccount}`}>@{account}</div>
          </div>
        </div>
        <div className={`${style.popularUserButton}`}>
          {follow === true ?
            <Button size='middle' text='正在跟隨' onClick={handleFollowClick} /> :
            <div className={`${style.popularUserFollower}`}>
              <Button size='white-exsmall' text='跟隨' onClick={handleFollowClick} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}
