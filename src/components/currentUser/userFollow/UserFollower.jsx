import style from './UserFollower.module.scss'
import FollowTab from 'UIcomponents/tabs/FollowTab'
import UserFollowerContent from './UserFollowContent'
import UserInfo from 'UIcomponents/layouts/UserInfo'
import UserInfoHeader from 'UIcomponents/layouts/UserInfoHeader'
import { useContext, useEffect, useState } from 'react'
import followingAPI from 'api/followingAPI'
import { useLocation, useNavigate } from 'react-router-dom'
import { ChangeTabContext } from 'context/UserTabContext'

export default function UserFollower() {
	const [followers, setFollowers] = useState([])
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)

	useEffect(() => {
		const id = localStorage.getItem('userId')
		followingAPI.getFollowers(id).then((response) => {
			const {data} = response
			setFollowers(data)
		})
	},[pathname])

	useEffect(() => {
		if(pathname === '/user/self/follower') {
			handleChangeTab(4)
		}
	},[pathname])

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
