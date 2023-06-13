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
	const tweetId = useParams().tweet_id
	const navigate = useNavigate()

	useEffect(() => {
		tweetAPI.getTweet(tweetId).then((response) => {
			const { data } = response
			setCurrentTweet(data)
		})
		tweetAPI.getReplyTweet(tweetId).then((response) => {
			const { data } = response
			setTweetReply(data)
		})
		navigate(`/reply/${tweetId}`)
	}, [navigate])

	return (
		<div className={`${style.replyContainer}`}>
			<ReplyListHeader />
			<ReplyListTweet
				avatar={currentTweet.User?.avatar}
				name={currentTweet.User?.name}
				account={currentTweet.User?.account}
				content={currentTweet?.description}
				quantity={currentTweet?.repliesCount}
				likeQuantity={currentTweet?.likesCount}
				time={currentTweet?.relativeTimeFromNow}
				date={currentTweet?.switchTime}
			/>
			<div className={`${style.replyListContent}`}>
				{tweetReply.map((tweet) => (
					<ReplyListItem
						key={tweet.id}
						id={tweet.replyUser.id}
						account={tweet.replyUser.account}
						comment={tweet.comment}
						time={tweet.relativeTimeFromNow}
						avatar={tweet.replyUser.avatar}
						user={tweet.replyUser.name}
						onOtherUserId={handleOtherUser}
						
					/>
				))}
			</div>
			{useReplyModal && <ModalReplyTweet />}
		</div>
	)
}
