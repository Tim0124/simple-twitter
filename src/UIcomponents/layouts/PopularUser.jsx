import style from './PopularUser.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Button from '../../UIcomponents/buttons/Button'
import { useState } from 'react'
import followingAPI from 'api/followingAPI'

export default function PopularUser({
	id,
	name,
	avatar,
	account,
	isUserFollowed,
}) {
	const [follow, setFollow] = useState(isUserFollowed)

	// const handleFollowClick = (id) => {
	// 	setFollow(!follow)
	// 	followingAPI
	// 		.getFollow(id)
	// 		.then((response) => {
	// 			console.log(response)
	// 		})
	// 		.catch((error) => {
	// 			console.error('Error:', error)
	// 		})
	// }

	// const handleUnFollowClick = (id) => {
	// 	setFollow(!follow)
	// 	followingAPI
	// 		.getUnFollow(id)
	// 		.then((response) => {
	// 			console.log(response)
	// 		})
	// 		.catch((error) => {
	// 			console.error('Error:', error)
	// 		})
	// }

	return (
		<div className={`${style.popularUserContainer}`}>
			<div className={`${style.popularUserItems}`}>
				<div className={`${style.popularUserList}`}>
					<div className={`${style.popularUserLogo}`}>
						<img src={avatar} className={`${style.popularUserImg}`} alt='' />
					</div>
					<div className={`${style.popularUserNameGroup}`}>
						<div className={`${style.popularUserName}`}>{name}</div>
						<div className={`${style.popularUserAccount}`}>@{account}</div>
					</div>
				</div>
				<div className={`${style.popularUserButton}`}>
					{follow ? (
						<Button size='middle' text='正在跟隨' id={id} />
					) : (
						<div className={`${style.popularUserFollower}`}>
							<Button size='white-exsmall' text='跟隨' id={id} />
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
