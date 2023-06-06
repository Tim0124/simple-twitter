import style from './UserInfo.module.scss'


const data = [
  {
    id: 1,
    avatar: 'https://picsum.photos/300/300?text=1',
    background: 'https://picsum.photos/300/300?text=1',
    name: 'John Doe',
    account: '@heyjone',
    tweet: 25,
    following: 34,
    follower: 59,
  }
]

export default function UserInfo({name, background, }) {
  return(
    <div className={`${style.adminTweetsCardContainer}`}>
      <div className={`${style.adminTweetsCardHeader}`}>{name}</div>
      <div className={`${style.adminTweetsCardWrapper}`}>
        <div className={`${style.adminTweetsCardList}`}>
          <img src='' className={`${style.adminTweetsCardImg}`} alt='' />
        </div>
        <div className={`${style.adminTweetsCardAvatar}`}>
          <img src='' className={`${style.adminTweetsCardImgAvatar}`} alt='' />
        </div>
        <div className={`${style.adminTweetsCardInfo}`}>
          <div className={`${style.adminTweetsCardNameGroup}`}>
            <div className={`${style.adminTweetsCardName}`}><p></p></div>
            <div className={`${style.adminTweetsCardAccount}`}><p></p></div>
          </div>
          <div className={`${style.adminTweetsCardSecInfo}`}>
            <div className={`${style.adminTweetsCardIconGroup}`}>
              <div className={`${style.adminTweetsCardTweet}`}><p>k</p></div>
              <div className={`${style.adminTweetsCardLike}`}><p>k</p></div>
            </div>
            <div className={`${style.adminTweetsCardFollowGroup}`}>
              <div className={`${style.adminTweetsCardFollowing}`}>
                <p className={`${style.following}`}>&nbsp;個</p><p>跟隨中</p>
              </div>
              <div className={`${style.adminTweetsCardFollower}`}>
                <p className={`${style.follower}`}>&nbsp;位</p><p>跟隨中</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}