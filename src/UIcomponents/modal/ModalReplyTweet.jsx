import style from './ModalReplyTweet.module.scss'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import ModalReplyContent from './ModalReplyContent'
import Button from 'UIcomponents/buttons/Button'
import { ReactComponent as Close } from '../../assets/Vector.svg'
import ModalBlackDrop from './ModalBlackDrop'
import { useContext, useEffect, useState } from 'react'
import {
	GetReplyTweetIdContext,
	ReplyTweetModalContext,
	ShowReplyModalContext,
} from 'context/ModalContext'
import tweetAPI from 'api/tweetAPI'
import userAPI from 'api/userAPI'
import { Toast } from 'heplers/helpers'
import replyAPI from 'api/replyAPI'

export default function ModalReplyTweet() {
	const ShowModal = useContext(ReplyTweetModalContext)
	const handleReplyModal = useContext(ShowReplyModalContext)
	const ReplyTweetId = useContext(GetReplyTweetIdContext)
	const [replyTweet, setReplyTweet] = useState([])
	const [currentUser, setCurrentUser] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [comment, setUserComment] = useState('')
	const [showError, setShowError] = useState(false)

	const handleInputChange = (e) => {
		setUserComment(e.target.value)
	}

	const handleReplySubmit = (e) => {
		e.preventDefault()
		if (comment.trim().length === 0) {
			setShowError(true)
			setTimeout(() => {
				setShowError(false)
			},2000)
			Toast.fire({
				icon: 'error',
				title: '內容不可空白',
			})
			
			return
		}
		const tweetId = ReplyTweetId
		replyAPI
			.postReplyTweet(tweetId, comment)
			.then((response) => {
				Toast.fire({
					icon: 'success',
					title: '回覆成功',
				})
			})
			.catch((error) => {
				console.error(error)
			})
		handleReplyModal()
	}

	useEffect(() => {
		const tweetId = ReplyTweetId
		const userId = Number(localStorage.getItem('userId'))
		const fetchData = async () => {
			try {
				setIsLoading(true)
				await tweetAPI.getTweet(tweetId).then((response) => {
					const { data } = response
					setReplyTweet(data)
				})
				await userAPI.getUser(userId).then((response) => {
					const { data } = response
					setCurrentUser(data)
				})
			} catch (error) {
				console.error(error)
			}
		}
		fetchData()
	}, [])

	return (
		<div
			className={`${style.replyTweetContainer}`}
			style={{ display: ShowModal ? 'block' : 'none' }}
		>
			<ModalBlackDrop onClick={handleReplyModal} />
			<div className={`${style.modalPostTweet}`}>
				<div className={`${style.postTweetContainer}`}>
					<header className={`${style.tweetsHeader}`}>
						<nav className={`${style.tweetsNavbar}`}>
							<div className={`${style.navTitle}`}>
								<h1
									className={`${style.titleArrow}`}
									onClick={handleReplyModal}
								>
									<Arrow />
								</h1>
								<h1 className={`${style.titleClose}`}>
									<Close
										style={{ color: '#ff6600' }}
										onClick={handleReplyModal}
									/>
								</h1>
							</div>
							<div className={`${style.navButton}`} onClick={handleReplySubmit}>
								<Button size='middle' text='回覆' />
							</div>
						</nav>
					</header>
					{replyTweet && (
						<ModalReplyContent
							key={replyTweet?.id}
							description={replyTweet?.description}
							time={replyTweet?.relativeTimeFromNow}
							avatar={replyTweet?.User?.avatar}
							name={replyTweet?.User?.name}
							account={replyTweet?.User?.account}
							currentUserAvatar={currentUser?.avatar}
							comment={comment}
							onInputChange={handleInputChange}
							onSubmit={handleReplySubmit}
							onShowError={showError}
						/>
					)}
					<div className={style.textLength}>
						<p>{comment.length}/140</p>
					</div>
					<div className={`${style.footerButtonItem}`}>
						<footer
							className={`${style.footerText}`}
							style={{ display: showError ? 'block' : 'none' }}
						>
							<p>內容不可空白</p>
						</footer>
						<div
							className={`${style.footerButton}`}
							onClick={handleReplySubmit}
						>
							<Button size='middle' text='回覆' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
