import style from './OtherUserReplyList.module.scss'
import UserReplyContent from './OtherUserReplyContent'
import { useLocation, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ChangeTabContext } from 'context/UserTabContext'
import tweetAPI from 'api/tweetAPI'
import TweetsSkeleton from 'components/skeleton/TweetsSkeleton'

export default function UserReplyList() {
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const [replies, setReplies] = useState([])
	const userId = useParams().user_id
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		tweetAPI
			.getUserReplies(userId)
			.then((response) => {
				const { data } = response
				setReplies(data)
				setIsLoading(false)
			})
			.catch((error) => {
				console.error('[Other user reply error]', error)
			})
	}, [])

	useEffect(() => {
		if (pathname === `/user/other/reply/${userId}`) {
			handleChangeTab(2)
		}
	}, [pathname])

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
						id={reply?.TweetId}
						key={reply?.id}
						comment={reply?.comment}
						replyAccount={reply?.tweetUser.account}
						time={reply?.relativeTimeFromNow}
						name={reply?.User?.name}
						avatar={reply?.User?.avatar}
						account={reply?.User?.account}
						tweetUserId={reply?.tweetUser?.id}
					/>
				))
				)}
			</section>
		</div>
	)
}
