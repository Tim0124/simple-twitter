import style from './UserReplyList.module.scss'
import UserReplyContent from './UserReplyContent'
import { useLocation, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ChangeTabContext } from 'context/UserTabContext'
import tweetAPI from 'api/tweetAPI'
import userAPI from 'api/userAPI'

export default function UserReplyList() {
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const [replies, setReplies] = useState([])
	const currentUserId = localStorage.getItem('userId')
	const [userId, setUserId] = useState('')
	const pageId = useParams().user_id

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

	return (
		<div className={`${style.userReplyContainer}`}>
			<section className={`${style.userReplyContent}`}>
				{replies.map((reply) => (
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
				))}
			</section>
		</div>
	)
}
