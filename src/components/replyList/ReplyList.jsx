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
import replyAPI from 'api/replyAPI'
import { Toast } from 'heplers/helpers'

export default function ReplyList() {
	const [currentTweet, setCurrentTweet] = useState([])
	const [tweetReply, setTweetReply] = useState([])
	const useReplyModal = useContext(ReplyTweetModalContext)
	const handleOtherUser = useContext(GetOtherUserIdContext)
	const handleShowReplyModal = useContext(ShowReplyModalContext)
	const tweetId = useParams().tweet_id
	const navigate = useNavigate()
	const [isDisable, setIsDisable] = useState(true)
	const [isReplyText, setIsReplyText] = useState('')
	const userId = localStorage.getItem('userId')

	const handleButtonChange = (e) => {
		setIsReplyText(e.target.value)
	}

	const handleReplySubmit = (e) => {
		e.preventDefault()
		if (isReplyText.trim().length > 140) {
			Toast.fire({
				icon: 'error',
				title: '字數不可超過140字',
			})
			return
		}
		replyAPI
			.postReplyTweet(tweetId, isReplyText)
			.then((response) => {
				Toast.fire({
					icon: 'success',
					title: '回覆成功',
				})
				setIsReplyText('')
			})
			.catch((error) => {
				console.error(error)
			})
	}

	useEffect(() => {
		tweetAPI.getTweet(tweetId).then((response) => {
			const { data } = response
			setCurrentTweet(data)
		})
		navigate(`/reply/${tweetId}`)
	}, [])

	useEffect(() => {
		tweetAPI.getReplyTweet(tweetId).then((response) => {
			const { data } = response
			setTweetReply(data)
		})
	}, [])

	useEffect(() => {
		if (isReplyText.trim().length === 0) {
			setIsDisable(true)
		} else {
			setIsDisable(false)
		}
	}, [isReplyText.trim().length === 0])

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
				onDisable={isDisable}
				onButtonChange={handleButtonChange}
				onSubmit={handleReplySubmit}
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
