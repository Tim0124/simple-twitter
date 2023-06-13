import UserNavbar from './UserNavbar'
import style from './UserLike.module.scss'
import UserLikeContent from './UserLikeContent'
import FollowTab from 'UIcomponents/tabs/FollowTab'
import UserTab from 'UIcomponents/tabs/UserTab'
import UserInfo from 'UIcomponents/layouts/UserInfo'
import UserInfoHeader from 'UIcomponents/layouts/UserInfoHeader'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ChangeTabContext } from 'context/UserTabContext'
import tweetAPI from 'api/tweetAPI'

export default function UserLike() {
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const [likesTweet, setLikesTweet] = useState([])

	useEffect(() => {
		const currentUserId = localStorage.getItem('userId')
		tweetAPI.getCurrentUserLikes(currentUserId).then((response) => {
			const { data } = response
			setLikesTweet(data)
		})
	}, [pathname])

	useEffect(() => {
		if (pathname === '/user/self/like') {
			handleChangeTab(3)
		}
	}, [pathname])

	return (
		<div className={`${style.userTweetsContainer}`}>
			{/* <div className={`${style.userInfoHeaderContainer}`}>
				<UserInfoHeader
					name={data[0].name}
					tweet={data[0].tweet}
					page='/home'
				/>
			</div>
			<UserInfo /> */}
			{/* <UserTab /> */}
			<section className={`${style.UserTweetsContent}`}>
				{likesTweet.map((like) => (
					<UserLikeContent
						id={like.id}
						key={like.id}
						name={like.User.name}
						account={like.User.account}
						avatar={like.User.avatar}
						content={like.Tweet.description}
						time={like.Tweet.relativeTimeFromNow}
						likesCount={like.Tweet.likesCount}
						repliesCount={like.Tweet.repliesCount}
						isSelfUserLike={like.isSelfUserLike}
					/>
				))}
			</section>
		</div>
	)
}
