import style from './AdminTweetsCards.module.scss'
import { ReactComponent as Tweet } from '../../assets/greytweet.svg'
import { ReactComponent as Like } from '../../assets/greylike.svg'

export default function AdminTweetsCard({
	name,
	avatar,
	account,
	tweet,
	like,
	following,
	follower,
	backgroundImage,
}) {
	return (
		<div className={`${style.adminTweetsCardContainer}`}>
			<div className={`${style.adminTweetsCardWrapper}`}>
				<div className={`${style.adminTweetsCardList}`}>
					<img
						src={backgroundImage}
						className={`${style.adminTweetsCardImg}`}
						alt=''
					/>
				</div>
				<div className={`${style.adminTweetsCardAvatar}`}>
					<img
						src={avatar}
						className={`${style.adminTweetsCardImgAvatar}`}
						alt=''
					/>
				</div>
				<div className={`${style.adminTweetsCardInfo}`}>
					<div className={`${style.adminTweetsCardNameGroup}`}>
						<div className={`${style.adminTweetsCardName}`}>
							<p>{name}</p>
						</div>
						<div className={`${style.adminTweetsCardAccount}`}>
							<p>@{account}</p>
						</div>
					</div>
					<div className={`${style.adminTweetsCardSecInfo}`}>
						<div className={`${style.adminTweetsCardIconGroup}`}>
							<div className={`${style.adminTweetsCardTweet}`}>
								<Tweet />
								<p>{tweet}</p>
							</div>
							<div className={`${style.adminTweetsCardLike}`}>
								<Like />
								<p>{like}</p>
							</div>
						</div>
						<div className={`${style.adminTweetsCardFollowGroup}`}>
							<div className={`${style.adminTweetsCardFollowing}`}>
								<p className={`${style.following}`}>{following}&nbsp;個</p>
								<p>跟隨中</p>
							</div>
							<div className={`${style.adminTweetsCardFollower}`}>
								<p className={`${style.follower}`}>{follower}&nbsp;位</p>
								<p>跟隨者</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
