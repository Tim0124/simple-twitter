import style from './OtherUserLike.module.scss'
import OtherUserLikeContent from './OtherUserLikeContent'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ChangeTabContext } from 'context/UserTabContext'
import tweetAPI from 'api/tweetAPI'
import { checkPermission } from 'api/auth'
import { Toast } from 'heplers/helpers'
import TweetsSkeleton from 'components/skeleton/TweetsSkeleton'

export default function UserLike() {
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const [likesTweet, setLikesTweet] = useState([])
	const navigate = useNavigate()
	const userId = useParams().user_id
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		tweetAPI
			.getUserLikes(userId)
			.then((response) => {
				const { data } = response
				setLikesTweet(data)
				setIsLoading(false)
			})
			.catch((error) => {
				console.error('[Other user like error: ]', error)
			})
	}, [])

	useEffect(() => {
		if (pathname === `/user/other/like/${userId}`) {
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
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
							<TweetsSkeleton key={index} />
						))}
					</div>
				) : (
					likesTweet.map((like) => (
						<OtherUserLikeContent
							id={like.TweetId}
							key={like.id}
							name={like.User?.name}
							account={like.User?.account}
							avatar={like.User?.avatar}
							content={like.Tweet?.description}
							time={like.Tweet?.relativeTimeFromNow}
							likesCount={like.Tweet?.likesCount}
							repliesCount={like.Tweet?.repliesCount}
							isSelfUserLike={like.isSelfUserLike}
							tweetUserId={like.User?.id}
						/>
					))
				)}
			</section>
		</div>
	)
}
