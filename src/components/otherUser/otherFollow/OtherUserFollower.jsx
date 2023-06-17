import style from './OtherUserFollower.module.scss'
import UserFollowerContent from './OtherUserFollowContent'
import { useContext, useEffect, useState } from 'react'
import followingAPI from 'api/followingAPI'
import { useLocation } from 'react-router-dom'
import { ChangeTabContext } from 'context/UserTabContext'
import { OtherUserContext } from 'context/OtherUserContext'

export default function UserFollower() {
	const [followers, setFollowers] = useState([])
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const OtherUserId = useContext(OtherUserContext)
	const id = OtherUserId

	useEffect(() => {
		followingAPI.getFollowers(id).then((response) => {
			if (response.status !== 200) {
					throw new Error(response.message)
				}
			const { data } = response
			setFollowers(data)
		}).catch((error) => {
			console.error(error)
		})
	}, [])

	useEffect(() => {
		if (pathname === `/user/other/follower/${id}`) {
			handleChangeTab(4)
		}
	}, [pathname])

	return (
		<div className={`${style.userFollowerContainer}`}>
			{/* <div className={`${style.userInfoHeaderContainer}`}>
				<UserInfoHeader
					name={data[0].name}
					tweet={data[0].tweet}
					page='/user/self'
				/>
			</div>
			<div className={`${style.userInfoContainer}`}>
				<UserInfo />
			</div> */}
			<section className={`${style.userFollowerContent}`}>
				{followers.map((follower) => (
					<UserFollowerContent
						key={follower.id}
						followerId={follower.followerId}
						followingId={follower.followingId}
						name={follower.User.name}
						avatar={follower.User.avatar}
						account={follower.User.account}
						isFollow={follower.isSelfUserFollow}
						content={follower.User.introduction}
					/>
				))}
			</section>
		</div>
	)
}
