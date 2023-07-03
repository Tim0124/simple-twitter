import style from './UserReplyList.module.scss'
import UserReplyContent from './UserReplyContent'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ChangeTabContext } from 'context/UserTabContext'
import tweetAPI from 'api/tweetAPI'
import userAPI from 'api/userAPI'
import { checkPermission } from 'api/auth'
import { Toast } from 'heplers/helpers'
import TweetsSkeleton from 'components/skeleton/TweetsSkeleton'

export default function UserReplyList() {
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const [replies, setReplies] = useState([])
	const currentUserId = localStorage.getItem('userId')
	const [userId, setUserId] = useState('')
	const pageId = useParams().user_id
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
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	useEffect(() => {
		if (userId) {
			tweetAPI
				.getUserReplies(userId)
				.then((response) => {
					if (response.status !== 200) {
						throw new Error(response.message)
					}
					const { data } = response
					setReplies(data)
					setIsLoading(false)
				})
				.catch((error) => {
					console.error(error)
				})
		}
	}, [userId])

	useEffect(() => {
		if (pathname === `/user/self/reply/${pageId}`) {
			handleChangeTab(2)
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
		<div className={`${style.userReplyContainer}`}>
			<section className={`${style.userReplyContent}`}>
				{isLoading ? (
					<div>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => <TweetsSkeleton key={index}/>)}
					</div>
				) : (
					replies.map((reply) => (
					<UserReplyContent
						key={reply?.id}
						comment={reply?.comment}
						replyAccount={reply?.tweetUser.account}
						time={reply?.relativeTimeFromNow}
						name={reply?.User.name}
						avatar={reply?.User.avatar}
						account={reply?.User.account}
						tweetUserId={reply?.tweetUser.id}
						tweetId={reply?.TweetId}
					/>
				))
				)}
			</section>
		</div>
	)
}
