import style from './UserLike.module.scss'
import UserLikeContent from './UserLikeContent'
import { useLocation } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ChangeTabContext } from 'context/UserTabContext'
import tweetAPI from 'api/tweetAPI'
import { checkPermission } from 'api/auth'

export default function UserLike() {
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const [likesTweet, setLikesTweet] = useState([])
	const currentUserId = localStorage.getItem('userId')
	const navigate = useNavigate()

	useEffect(() => {
		tweetAPI
			.getUserLikes(currentUserId)
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(response.message)
				}
				const { data } = response
				setLikesTweet(data)
			})
			.catch((error) => {
				console.error('[Userlike error]', error)
			})
	}, [])

	useEffect(() => {
		if (pathname === `/user/self/like/${currentUserId}`) {
			handleChangeTab(3)
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
				{likesTweet.map((like) => (
					<UserLikeContent
						id={like?.TweetId}
						key={like?.id}
						name={like?.User?.name}
						account={like?.User?.account}
						avatar={like?.User?.avatar}
						content={like?.Tweet?.description}
						time={like?.Tweet?.relativeTimeFromNow}
						likesCount={like?.Tweet?.likesCount}
						repliesCount={like?.Tweet?.repliesCount}
						isSelfUserLike={like?.isSelfUserLike}
						tweetUserId={like?.User?.id}
					/>
				))}
			</section>
		</div>
	)
}
