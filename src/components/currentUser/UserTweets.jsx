import UserNavbar from './UserNavbar'
import style from './UserTweets.module.scss'
import UserTweetsContent from './UserTweetsContent'
import UserTab from 'UIcomponents/tabs/UserTab'
import UserInfo from 'UIcomponents/layouts/UserInfo'
import UserInfoHeader from 'UIcomponents/layouts/UserInfoHeader'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ChangeStepContext } from 'context/SideBarContext'
import tweetAPI from 'api/tweetAPI'
import { ChangeTabContext } from 'context/UserTabContext'

export default function UserTweets() {
	const { pathname } = useLocation()
	const tweetId = useParams().tweet_id
	const handleChangeStep = useContext(ChangeStepContext)
	const [userInfo, setUserInfo] = useState([])
	const [allTweets, setAllTweets] = useState([])
	const handleChangeTab = useContext(ChangeTabContext)
	const navigate = useNavigate()
	const currentUserId = localStorage.getItem('userId')

	useEffect(() => {
		tweetAPI.getCurrentUserTweet(currentUserId).then((response) => {
			const { data } = response
			setUserInfo(data)
		})
		tweetAPI.getCurrentUserAllTweet(currentUserId).then((response) => {
			const { data } = response
			setAllTweets(data)
		})
	}, [])

	useEffect(() => {
		if (pathname === '/user/self' || `/user/${currentUserId}`) {
			handleChangeStep(2)
			handleChangeTab(1)
		}
	}, [pathname])
	return (
		<div className={`${style.userTweetsContainer}`}>
			<section className={`${style.UserTweetsContent}`}>
				{allTweets.map((tweet) => (
					<UserTweetsContent
						id={tweet.id}
						key={tweet.id}
						description={tweet.description}
						relativeTime={tweet.relativeTimeFromNow}
						repliesCount={tweet.repliesCount}
						likeCount={tweet.likesCount}
						name={tweet.User.name}
						account={tweet.User.account}
						avatar={tweet.User.avatar}
						isSelfUserLike={tweet.isSelfUserLike}
					/>
				))}
			</section>
		</div>
	)
}
