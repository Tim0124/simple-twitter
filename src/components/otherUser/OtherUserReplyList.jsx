import style from './OtherUserReplyList.module.scss'
import UserReplyContent from './OtherUserReplyContent'
import { useLocation, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ChangeTabContext } from 'context/UserTabContext'
import tweetAPI from 'api/tweetAPI'

export default function UserReplyList() {
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const [replies, setReplies] = useState([])
	const userId = useParams().user_id

	useEffect(() => {
		tweetAPI.getUserReplies(userId).then((response) => {
			const { data } = response
			setReplies(data)
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
				{replies.map((reply) => (
					<UserReplyContent
						key={reply?.id}
						comment={reply?.comment}
						replyAccount={reply?.tweetUser.account}
						time={reply?.relativeTimeFromNow}
						name={reply?.User?.name}
						avatar={reply?.User?.avatar}
						account={reply?.User?.account}
						tweetUserId={reply?.tweetUser?.id}
					/>
				))}
			</section>
		</div>
	)
}
