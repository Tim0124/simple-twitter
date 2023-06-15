import style from './PopularUser.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Button from '../../UIcomponents/buttons/Button'
import { useState } from 'react'
import followingAPI from 'api/followingAPI'
import { Link } from 'react-router-dom'

export default function PopularUser({
	id,
	name,
	avatar,
	account,
	isUserFollowed,
	onOtherUserId,
}) {
	const [follow, setFollow] = useState(isUserFollowed)
	const handleFollowClick = () => {
		setFollow(true)
		followingAPI
			.getFollow(id)
			.then((response) => {
				console.log(response)
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	}

	const handleUnFollowClick = () => {
		setFollow(false)
		followingAPI
			.getUnFollow(id)
			.then((response) => {
				console.log(response)
			})
			.catch((error) => {
				console.error('Error:', error)
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
