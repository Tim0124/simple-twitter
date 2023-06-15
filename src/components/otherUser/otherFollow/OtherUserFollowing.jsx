import style from './OtherUserFollowing.module.scss'
import FollowTab from 'UIcomponents/tabs/FollowTab'
import OtherUserFollowerContent from './OtherUserFollowContent'
import UserInfo from 'UIcomponents/layouts/UserInfo'
import UserInfoHeader from 'UIcomponents/layouts/UserInfoHeader'
import { useContext, useEffect, useState } from 'react'
import tweetAPI from 'api/tweetAPI'
import followingAPI from 'api/followingAPI'
import { useLocation, useNavigate } from 'react-router-dom'
import { ChangeTabContext } from 'context/UserTabContext'
import { OtherUserContext } from 'context/OtherUserContext'

export default function UserFollowing() {
	const [following, setFollowing] = useState([])
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const OtherUserId = useContext(OtherUserContext)
	const id = OtherUserId
	

	useEffect(() => {
		followingAPI.getFollowings(id).then((response) => {
			const { data } = response
			setFollowing(data)

		})
	}, [pathname])

	useEffect(() => {
		if (pathname === `/user/other/following/${id}`) {
			handleChangeTab(5)
		}
	}, [pathname])
	return (
		<div className={`${style.userFollowingContainer}`}>
			{/* <div className={`${style.userInfoHeaderContainer}`}>
				<UserInfoHeader name={data[0].name} tweet={data[0].tweet} />
			</div>
			<div className={`${style.userInfoContainer}`}>
				<UserInfo />
			</div> */}

			<section className={`${style.userFollowingContent}`}>
				{following.map((follow) => (
					<OtherUserFollowerContent
						key={follow.followingId}
						followerId={follow.followerId}
						followingId={follow.followingId}
						name={follow.User.name}
						avatar={follow.User.avatar}
						account={follow.User.account}
						content={follow.User.introduction}
						isFollow={follow.isSelfUserFollow}
					/>
				))}
			</section>
		</div>
	)
}
