import style from './UserTweets.module.scss'
import UserTweetsContent from './UserTweetsContent'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ChangeStepContext } from 'context/SideBarContext'
import tweetAPI from 'api/tweetAPI'
import { ChangeTabContext } from 'context/UserTabContext'
import userAPI from 'api/userAPI'
import { checkPermission } from 'api/auth'

export default function UserTweets() {
	const { pathname } = useLocation()
	const handleChangeStep = useContext(ChangeStepContext)
	// const [userInfo, setUserInfo] = useState([])
	const [allTweets, setAllTweets] = useState([])
	const handleChangeTab = useContext(ChangeTabContext)
	const [userId, setUserId] = useState('')
	const currentUserId = localStorage.getItem('userId')
	const navigate = useNavigate()

	useEffect(() => {
		userAPI
			.getCurrentUser()
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(response.message)
				}
				const { data } = response
				setUserId(data.id)

				tweetAPI
					.getUserAllTweet(currentUserId)
					.then((response) => {
						if (response.status !== 200) {
							throw new Error(response.message)
						}
						const { data } = response
						setAllTweets(data)
					})
					.catch((error) => {
						console.error(error)
					})
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	useEffect(() => {
		if (pathname === '/user/self' || `/user/${userId}`) {
			handleChangeStep(2)
			handleChangeTab(1)
		}
	}, [pathname])

	useEffect(() => {
		const checkTokenIsValid = async () => {
			try {
				const authToken = localStorage.getItem('authToken')
				if (!authToken) {
					navigate('/login')
				}
				const result = await checkPermission(authToken)
				if (!result) {
					navigate('/login')
				}
			} catch (error) {
				console.error(error)
			}
		}

		checkTokenIsValid()
	}, [])

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
