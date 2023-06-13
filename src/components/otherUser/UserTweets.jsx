import UserNavbar from './UserNavbar'
import style from './UserTweets.module.scss'
import UserTweetsContent from './UserTweetsContent'
import UserTab from 'UIcomponents/tabs/UserTab'
import UserInfo from 'UIcomponents/layouts/UserInfo'
import UserInfoHeader from 'UIcomponents/layouts/UserInfoHeader'
import { useLocation, useParams } from 'react-router-dom'
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

	useEffect(() => {
		const currentUserId = localStorage.getItem('userId')
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
		if (pathname === '/user/self') {
			handleChangeStep(2)
			handleChangeTab(1)
		}
	}, [])
	return (
		<div className={`${style.userTweetsContainer}`}>
			{/* <div className={`${style.userInfoHeaderContainer}`}>
				<UserInfoHeader
					name={userInfo.name}
					tweet={userInfo.tweetsCount}
					page='/home'
				/>
			</div>
			<UserInfo 
				key={userInfo.id}
				name={userInfo.name}
				account={userInfo.account}
				avatar={userInfo.avatar}
				backgroundImage={userInfo.backgroundImage}
				introduction={userInfo.introduction}
				follower={userInfo.followersCount}
				following={userInfo.followingsCount}
			/> */}
			{/* <UserTab /> */}
			<section className={`${style.UserTweetsContent}`}>
				{allTweets.map((tweet) => (
					<UserTweetsContent
						key={tweet.id}
						description={tweet.description}
						relativeTime={tweet.relativeTimeFromNow}
						repliesCount={tweet.repliesCount}
						likeCount={tweet.likesCount}
						name={tweet.User.name}
						account={tweet.User.account}
						avatar={tweet.User.avatar}
					/>
				))}
			</section>
		</div>
	)
}