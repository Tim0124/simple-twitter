import style from './UserFollowContent.module.scss'
import Button from 'UIcomponents/buttons/Button'
import followingAPI from 'api/followingAPI'
import { useState } from 'react'

export default function UserFollowerContent({
	id,
	name,
	account,
	avatar,
	content,
	isSelfUserFollow,
}) {
	// const setRender = useContext(SetRenderContext)
	const [follow, setFollow] = useState(isSelfUserFollow)

	const handleFollowClick = () => {
		setFollow(true)
		followingAPI
			.postFollow(id)
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(response.message)
				}
				// setRender('true')
			})
			.catch((error) => {
				console.error('Error:', error)
				// setRender('false')
			})
	}

	const handleUnFollowClick = () => {
		setFollow(false)
		followingAPI
			.deleteFollow(id)
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(response.message)
				}
				// setRender('false')
			})
			.catch((error) => {
				console.error('Error:', error)
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
						{follow === true ? (
							<div className={`${style.popularUserfollowing}`}>
								<Button
									size='middle'
									text='正在跟隨'
									onClick={handleUnFollowClick}
								/>
							</div>
						) : (
							<div className={`${style.popularUserFollower}`}>
								<Button
									size='white-exsmall'
									text='跟隨'
									onClick={handleFollowClick}
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
