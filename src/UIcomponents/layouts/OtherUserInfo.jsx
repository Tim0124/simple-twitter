import style from './UserInfo.module.scss'
import Button from 'UIcomponents/buttons/Button'
import UserInfoHeader from './UserInfoHeader'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import followingAPI from 'api/followingAPI'

export default function UserInfo({
	name,
	account,
	avatar,
	backgroundImage,
	introduction,
	follower,
	following,
	onHideUserInfo,
	userId,
}) {
	return (
		<div className={`${style.userInfoContainer} ${style[onHideUserInfo]}`}>
			<div className={`${style.userInfoWrapper}`}>
				<div className={`${style.userInfoImgGroup}`}>
					<div className={`${style.userInfoBackground}`}>
						<img
							src={backgroundImage}
							className={`${style.userInfoCardImg}`}
							alt=''
						/>
					</div>
					<div className={`${style.userInfoCardAvatar}`}>
						<img
							src={avatar}
							className={`${style.userInfoImgAvatar}`}
							alt={account}
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
									<p>{name}</p>
								</div>
								<div className={`${style.userInfoAccount}`}>
									<p>@{account}</p>
								</div>
							</div>
						</div>
						<div className={`${style.userInfoContent}`}>
							<p>{introduction}</p>
						</div>
						<div className={`${style.adminTweetsCardFollowGroup}`}>
							<Link to={`/user/other/following/${userId}`}>
								<div className={`${style.adminTweetsCardFollowing}`}>
									<p className={`${style.following}`}>{following}&nbsp;個</p>
									<p>跟隨中</p>
								</div>
							</Link>
							<Link to={`/user/other/follower/${userId}`}>
								<div className={`${style.adminTweetsCardFollower}`}>
									<p className={`${style.follower}`}>{follower}&nbsp;位</p>
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
