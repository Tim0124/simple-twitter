import style from './OtherUserInfo.module.scss'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import Button from 'UIcomponents/buttons/Button'
import { ReactComponent as Message } from '../../assets/orangemsg.svg'
import { ReactComponent as Noti } from '../../assets/orangenoti.svg'

const data = [
  {
    id: 1,
    avatar: 'https://picsum.photos/300/300?text=2',
    background: 'https://picsum.photos/300/300?text=1',
    name: 'John Doe',
    account: '@heyjone',
    tweet: 25,
    following: 34,
    follower: 59,
    content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
  }
]

export default function OtherUserInfo() {
  return (
    <div className={`${style.UserInfoContainer}`}>
      <div className={`${style.userInfoWrapper}`}>
        <header className={`${style.userInfoHeader}`}>
          <nav className={`${style.userInfoNavbar}`}>
            <div className={`${style.userInfoNavTitle}`}>
              <h1 className={`${style.userInfoText}`}><Arrow /></h1>
            </div>
            <div className={`${style.userInfoHeaderGroup}`}>
              <div className={`${style.userInfoNavName}`}>{data[0].name}</div>
              <div className={`${style.userInfoTweet}`}>{data[0].tweet}&nbsp;推文</div>
            </div>
          </nav>
        </header>
        <div className={`${style.userInfoImgGroup}`}>
          <div className={`${style.userInfobackground}`}>
            <img src={data[0].background} className={`${style.userInfoCardImg}`} alt='' />
          </div>
          <div className={`${style.userInfoCardAvatar}`}>
            <img src={data[0].avatar} className={`${style.userInfoImgAvatar}`} alt='' />
          </div>
        </div>
        <div className={`${style.userInfoBottonArea}`}>
          <div className={`${style.userInfoMsg}`}>
            <Message />
          </div>
          <div className={`${style.userInfoNoti}`}>
            <Noti />
          </div>
          <div className={`${style.userInfoButton}`}>
            <Button
              size='middle'
              text='正在跟隨' />
          </div>
        </div>
        <div className={`${style.userInfoAllContent}`}>
          <div className={`${style.userInfoBottomArea}`}>
            <div className={`${style.userInfoContentArea}`}>
              <div className={`${style.userInfoNameGroup}`}>
                <div className={`${style.userInfoName}`}><p>{data[0].name}</p></div>
                <div className={`${style.userInfoAccount}`}><p>{data[0].account}</p></div>
              </div>
            </div>
            <div className={`${style.userInfoContent}`}>
              <p>{data[0].content}</p>
            </div>
            <div className={`${style.adminTweetsCardFollowGroup}`}>
              <div className={`${style.adminTweetsCardFollowing}`}>
                <p className={`${style.following}`}>{data[0].following}&nbsp;個</p><p>跟隨中</p>
              </div>
              <div className={`${style.adminTweetsCardFollower}`}>
                <p className={`${style.follower}`}>{data[0].follower}&nbsp;位</p><p>跟隨中</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}