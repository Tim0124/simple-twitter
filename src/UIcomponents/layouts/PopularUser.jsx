import style from './PopularUser.module.scss'
import Button from '../../UIcomponents/buttons/Button'
import { useContext, useState } from 'react'
import followingAPI from 'api/followingAPI'
import { Link } from 'react-router-dom'
import { GetRenderContext, SetRenderContext } from 'context/FollowContext'

export default function PopularUser({
	id,
	name,
	avatar,
	account,
	isUserFollowed,
	onOtherUserId,
	// followingId
}) {
	const [follow, setFollow] = useState(isUserFollowed)
	const setRender = useContext(SetRenderContext)
	const render = useContext(GetRenderContext)

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
				setRender('false')
			})
			.catch((error) => {
				console.error('Error:', error)
				setRender('false')
			})
	}
	return (
		<div className={`${style.popularUserContainer}`}>
			<div className={`${style.popularUserItems}`}>
				<div className={`${style.popularUserList}`}>
					<Link to={`/user/other/${id}`}>
						<div
							className={`${style.popularUserLogo}`}
							onClick={() => onOtherUserId(id)}
						>
							<img src={avatar} className={`${style.popularUserImg}`} alt='' />
						</div>
					</Link>
					<div className={`${style.popularUserNameGroup}`}>
						<div className={`${style.popularUserName}`}>{name}</div>
						<div className={`${style.popularUserAccount}`}>@{account}</div>
					</div>
				</div>
				<div className={`${style.popularUserButton}`}>
					{follow ? (
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
			</div>
		</div>
	)
}
