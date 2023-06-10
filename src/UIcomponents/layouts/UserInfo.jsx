import style from './UserInfo.module.scss'
import Button from 'UIcomponents/buttons/Button'
import UserInfoHeader from './UserInfoHeader'
import { Link } from 'react-router-dom'

const data = [
	{
		id: 1,
		avatar: 'https://picsum.photos/300/300?text=2',
		background: 'https://i.imgur.com/5ZDLPuU.jpeg',
		name: 'John Doe',
		account: '@heyjone',
		tweet: 25,
		following: 34,
		follower: 59,
		content:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
	},
]

export default function UserInfo() {
	return (
		<div className={`${style.userInfoContainer}`}>
			<div className={`${style.userInfoWrapper}`}>
				<div className={`${style.userInfoImgGroup}`}>
					<div className={`${style.userInfoBackground}`}>
						<img
							src={data[0].background}
							className={`${style.userInfoCardImg}`}
							alt=''
						/>
					</div>
					<div className={`${style.userInfoCardAvatar}`}>
						<img
							src={data[0].avatar}
							className={`${style.userInfoImgAvatar}`}
							alt=''
						/>
					</div>
				</div>
				<div className={`${style.userInfoAllContent}`}>
					<div className={`${style.userInfoBottonArea}`}>
						<div className={`${style.userInfoButton}`}>
							<Button size='white-exsmall' text='編輯個人資料' />
						</div>
					</div>
					<div className={`${style.userInfoBottomArea}`}>
						<div className={`${style.userInfoContentArea}`}>
							<div className={`${style.userInfoNameGroup}`}>
								<div className={`${style.userInfoName}`}>
									<p>{data[0].name}</p>
								</div>
								<div className={`${style.userInfoAccount}`}>
									<p>{data[0].account}</p>
								</div>
							</div>
						</div>
						<div className={`${style.userInfoContent}`}>
							<p>{data[0].content}</p>
						</div>
						<div className={`${style.adminTweetsCardFollowGroup}`}>
							<Link to='/user/self/following'>
								<div className={`${style.adminTweetsCardFollowing}`}>
									<p className={`${style.following}`}>
										{data[0].following}&nbsp;個
									</p>
									<p>跟隨中</p>
								</div>
							</Link>
							<Link to='/user/self/follower'>
								<div className={`${style.adminTweetsCardFollower}`}>
									<p className={`${style.follower}`}>
										{data[0].follower}&nbsp;位
									</p>
									<p>跟隨者</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
