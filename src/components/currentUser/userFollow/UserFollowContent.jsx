import style from './UserFollowContent.module.scss'
import Button from 'UIcomponents/buttons/Button'
import followingAPI from 'api/followingAPI'
import { useContext } from 'react'
import { SetRenderContext } from 'context/FollowContext'

export default function UserFollowerContent({
	id,
	name,
	account,
	avatar,
	content,
	isFollow,
}) {
	const setRender = useContext(SetRenderContext)

	const handleFollowClick = () => {
		followingAPI
			.postFollow(id)
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(response.message)
				}
				// setRender('true')
			})
			.catch((error) => {
				console.error(error)
				// setRender('false')
			})
	}

	const handleUnFollowClick = () => {
		followingAPI
			.deleteFollow(id)
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(response.message)
				}
				// setRender('false')
			})
			.catch((error) => {
				console.error(error)
				// setRender('false')
			})
	}

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
								<Button
									size='middle'
									text='正在跟隨'
									onClick={handleFollowClick}
								/>
							</div>
						) : (
							<div className={`${style.userFollowButton}`}>
								<Button
									size='white-exsmall'
									text='跟隨'
									onClick={handleUnFollowClick}
								/>
							</div>
						)}
					</div>
					<div className={`${style.userFollowContent}`}>{content}</div>
				</div>
			</div>
		</div>
	)
}
