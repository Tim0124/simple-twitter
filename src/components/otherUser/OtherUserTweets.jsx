import style from './OtherUserTweets.module.scss'
import UserTweetsContent from './OtherUserTweetsContent'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ChangeStepContext } from 'context/SideBarContext'
import tweetAPI from 'api/tweetAPI'
import { ChangeTabContext } from 'context/UserTabContext'
import { checkPermission } from 'api/auth'
import { Toast } from 'heplers/helpers'

export default function UserTweets() {
	const { pathname } = useLocation()
	const userId = useParams().user_id
	const handleChangeStep = useContext(ChangeStepContext)
	const [otherUser, setOtherUser] = useState([])
	const handleChangeTab = useContext(ChangeTabContext)
	const navigate = useNavigate()

	useEffect(() => {
		tweetAPI
			.getUserAllTweet(userId)
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(response.message)
				}
				const { data } = response
				setOtherUser(data)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [userId])

	useEffect(() => {
		if (pathname === `/user/other/${userId}`) {
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
