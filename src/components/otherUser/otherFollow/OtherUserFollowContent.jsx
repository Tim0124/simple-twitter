import style from './OtherUserFollowContent.module.scss'
import Button from 'UIcomponents/buttons/Button'

export default function UserFollowerContent({
	name,
	account,
	avatar,
	content,
	isFollow,
}) {
	return (
		<div className={`${style.userFollowContainer}`}>
			<div className={`${style.userFollowList}`}>
				<div className={`${style.userFollowLogo}`}>
					<img
						src={avatar}
						className={`${style.userFollowImg}`}
						alt={account}
					/>
				</div>
				<div className={`${style.userFollowInfo}`}>
					<div className={`${style.userFollowSecInfo}`}>
						<div className={`${style.userFollowNameGroup}`}>
							<div className={`${style.userFollowName}`}>{name}</div>
							<div className={`${style.userFollowSmallAccount}`}>
								<div className={`${style.userFollowAccount}`}>@{account}</div>
							</div>
						</div>
						{isFollow === true ? (
							<div className={`${style.userFollowingButton}`}>
								<Button size='middle' text='正在跟隨' />
							</div>
						) : (
							<div className={`${style.userFollowButton}`}>
								<Button size='white-exsmall' text='跟隨' />
							</div>
						)}
					</div>
					<div className={`${style.userFollowContent}`}>{content}</div>
				</div>
			</div>
		</div>
	)
}
