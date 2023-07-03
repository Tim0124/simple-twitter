import style from './UserTweets.module.scss'
import UserTweetsContent from './UserTweetsContent'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ChangeStepContext } from 'context/SideBarContext'
import tweetAPI from 'api/tweetAPI'
import { ChangeTabContext } from 'context/UserTabContext'
import userAPI from 'api/userAPI'
import { checkPermission } from 'api/auth'
import { Toast } from 'heplers/helpers'
import Loader from 'styles/Loader'
import TweetsSkeleton from 'components/skeleton/TweetsSkeleton'

export default function UserTweets() {
	const { pathname } = useLocation()
	const handleChangeStep = useContext(ChangeStepContext)
	// const [userInfo, setUserInfo] = useState([])
	const [allTweets, setAllTweets] = useState([])
	const handleChangeTab = useContext(ChangeTabContext)
	const [userId, setUserId] = useState('')
	const currentUserId = localStorage.getItem('userId')
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(true)

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
						setIsLoading(false)
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
					Toast.fire({
						title: '帳號不存在',
						timer: 2000,
						icon: 'error',
						showConfirmButton: false,
					})
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
				{isLoading ? (
					<div>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => <TweetsSkeleton key={index}/>)}
					</div>
				) : (
					allTweets.map((tweet) => (
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
				))
				)}
			</section>
		</div>
	)
}
