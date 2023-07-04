import ReplyListHeader from './ReplyListHeader'
import ReplyListTweet from './ReplyListTweet'
import style from './ReplyList.module.scss'
import ReplyListItem from './ReplyListItem'
import { useContext, useEffect, useState } from 'react'
import { ShowReplyModalContext } from 'context/ModalContext'
import ModalReplyTweet from 'UIcomponents/modal/ModalReplyTweet'
import { useNavigate, useParams } from 'react-router-dom'
import tweetAPI from 'api/tweetAPI'
import { GetOtherUserIdContext } from 'context/OtherUserContext'
import replyAPI from 'api/replyAPI'
import { Toast } from 'heplers/helpers'
import { checkPermission } from 'api/auth'
import ReplySkeleton from 'components/skeleton/ReplySkeleton'

export default function ReplyList() {
	const [currentTweet, setCurrentTweet] = useState([])
	const [tweetReply, setTweetReply] = useState([])
	const handleOtherUser = useContext(GetOtherUserIdContext)
	const handleShowReplyModal = useContext(ShowReplyModalContext)
	const tweetId = useParams().tweet_id
	const navigate = useNavigate()
	const [isDisable, setIsDisable] = useState(true)
	const [isReplyText, setIsReplyText] = useState('')
	const [isLoading, setIsLoading] = useState(true)

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
				if (response.status !== 200) {
					throw new Error(response.message)
				}
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
		tweetAPI
			.getTweet(tweetId)
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(response.message)
				}
				const { data } = response
				setCurrentTweet(data)
				setIsLoading(false)
			})
			.catch((error) => {
				console.error(error)
			})
		navigate(`/reply/${tweetId}`)
	}, [])

	useEffect(() => {
		tweetAPI
			.getReplyTweet(tweetId)
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(response.message)
				}
				const { data } = response
				setTweetReply(data)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	useEffect(() => {
		if (isReplyText.trim().length === 0) {
			setIsDisable(true)
		} else {
			setIsDisable(false)
		}
	}, [isReplyText.trim().length === 0])

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
		<div className={`${style.replyContainer}`}>
			<ReplyListHeader />
			{isLoading ? (
				<ReplySkeleton/>
			) : (
				<ReplyListTweet
				id={currentTweet?.id}
				userId={currentTweet.UserId}
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
			)}
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
				{tweetReply.length === 0 && (
					<div className='my-5 text-center text-gray-400 animate-pulse'>尚有推文回覆</div>
				)}
			</div>
			{handleShowReplyModal && <ModalReplyTweet />}
		</div>
	)
}
