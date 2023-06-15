import UserNavbar from './UserNavbar'
import style from './OtherUserTweets.module.scss'
import UserTweetsContent from './OtherUserTweetsContent'
import UserTab from 'UIcomponents/tabs/UserTab'
import UserInfo from 'UIcomponents/layouts/UserInfo'
import UserInfoHeader from 'UIcomponents/layouts/UserInfoHeader'
import { useLocation, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ChangeStepContext } from 'context/SideBarContext'
import tweetAPI from 'api/tweetAPI'
import { ChangeTabContext } from 'context/UserTabContext'
import { OtherUserContext } from 'context/OtherUserContext'
import otherUserAPI from 'api/otherUserAPI'

export default function UserTweets() {
	const { pathname } = useLocation()
	const userId = useParams().user_id
	const handleChangeStep = useContext(ChangeStepContext)
	const [userInfo, setUserInfo] = useState([])
	const [allTweets, setAllTweets] = useState([])
	const [otherUser, setOtherUser] = useState([])
	const handleChangeTab = useContext(ChangeTabContext)
	const OtherUserData = useContext(OtherUserContext)

	useEffect(() => {
		console.log(userId)
		tweetAPI.getCurrentUserAllTweet(userId).then((response) => {
			const { data } = response
			setOtherUser(data)
		})
	}, [])

	useEffect(() => {
		if (pathname === `/user/other/${userId}`) {
			handleChangeStep(2)
			handleChangeTab(1)
		}
	}, [pathname])
	return (
		<div className={`${style.userTweetsContainer}`}>
			<section className={`${style.UserTweetsContent}`}>
				{otherUser.map((user) => (
					<UserTweetsContent
						id={user.id}
						key={user.id}
						name={user.User.name}
						avatar={user.User.avatar}
						account={user.User.account}
						time={user.relativeTimeFromNow}
						description={user.description}
						repliesCount={user.repliesCount}
						likeCount={user.likesCount}
						isSelfUserLike={user.isSelfUserLike}
					/>
				))}
			</section>
		</div>
	)
}
