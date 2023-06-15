import ReplyListHeader from './ReplyListHeader'
import ReplyListTweet from './ReplyListTweet'
import style from './ReplyList.module.scss'
import { data } from 'UIcomponents/layouts/PopularUserList'
import ReplyListItem from './ReplyListItem'
import { useContext, useEffect, useState } from 'react'
import {
	ReplyTweetModalContext,
	ShowReplyModalContext,
} from 'context/ModalContext'
import ModalReplyTweet from 'UIcomponents/modal/ModalReplyTweet'
import { useNavigate, useParams } from 'react-router-dom'
import tweetAPI from 'api/tweetAPI'
import { GetOtherUserIdContext } from 'context/OtherUserContext'

export default function ReplyList() {
	const [currentTweet, setCurrentTweet] = useState([])
	const [tweetReply, setTweetReply] = useState([])
	const useReplyModal = useContext(ReplyTweetModalContext)
	const handleOtherUser = useContext(GetOtherUserIdContext)
	const handleShowReplyModal = useContext(ShowReplyModalContext)
	const tweetId = useParams().tweet_id
	const navigate = useNavigate()
	const [comment, setComment] = useState([])
	console.log(comment)

	useEffect(() => {
		tweetAPI.getTweet(tweetId).then((response) => {
			const { data } = response
			console.log(data)
			setCurrentTweet(data)
		})

		navigate(`/reply/${tweetId}`)
	}, [navigate])

	useEffect(() => {
		tweetAPI.getReplyTweet(tweetId).then((response) => {
			const { data } = response
			setTweetReply(data)
		})
	}, [tweetReply])

	return (
		<div className={`${style.replyContainer}`}>
			<ReplyListHeader />
			<ReplyListTweet
				id={currentTweet?.id}
				avatar={currentTweet.User?.avatar}
				name={currentTweet.User?.name}
				account={currentTweet.User?.account}
				content={currentTweet?.description}
				quantity={currentTweet?.repliesCount}
				likesCount={currentTweet?.likesCount}
				time={currentTweet?.relativeTimeFromNow}
				date={currentTweet?.switchTime}
				isSelfUserLike={currentTweet?.isSelfUserLike}
			/>
			<div className={`${style.replyListContent}`}>
				{tweetReply.map((tweet) => (
					<ReplyListItem
						key={tweet?.id}
						id={tweet.replyUser?.id}
						account={tweet?.replyUser?.account}
						comment={tweet?.comment}
						time={tweet?.relativeTimeFromNow}
						avatar={tweet?.replyUser?.avatar}
						user={tweet?.replyUser?.name}
						onOtherUserId={handleOtherUser}
						tweetAccount={tweet?.tweetUser?.account}
					/>
				))}
			</div>
			{handleShowReplyModal && <ModalReplyTweet />}
		</div>
	)
}
