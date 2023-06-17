import { useState, useEffect, useContext } from 'react'
import style from './MainTweets.module.scss'
import MainTweetsContent from './MainTweetsContent'
import { useLocation, useNavigate } from 'react-router-dom'
import MainContent from './MainContent'
import { getTweets } from '../../api/allAPI'
import MainHeader from './MainHeader'
import { checkPermission } from 'api/auth'
import { ShowReplyModalContext } from 'context/ModalContext'
import tweetAPI from 'api/tweetAPI'
import { ChangeStepContext } from 'context/SideBarContext'
import { GetOtherUserIdContext } from 'context/OtherUserContext'
import { Toast } from 'heplers/helpers'
import userAPI from 'api/userAPI'

export default function MainTweets({ onTweetClick }) {
	const navigate = useNavigate()
	const [currentUser, setCurrentUser] = useState([])
	const [tweets, setTweets] = useState([])
	const [isPostText, setIsPostText] = useState('')
	const [isDisabled, setIsDisable] = useState(true)
	const [showError, setShowError] = useState(false)
	const { pathname } = useLocation()
	const handleChangeStep = useContext(ChangeStepContext)
	const handleOtherUserId = useContext(GetOtherUserIdContext)
	const handleShowReplyModal = useContext(ShowReplyModalContext)
	const userId = localStorage.getItem('userId')
	const handleButtonChange = (e) => {
		setIsPostText(e.target.value)
	}

	const handleTweetSubmit = (e) => {
		e.preventDefault()
		if (isPostText.trim().length > 140) {
			Toast.fire({
				icon: 'error',
				title: '字數不可超過140字',
			})
			setShowError(true)
			setTimeout(() => {
				setShowError(false)
			}, 2000)
			return
		}
		tweetAPI.postTweet(userId, isPostText).then((response) => {
			if (response.status !== 200) {
					throw new Error(response.message)
				}
			Toast.fire({
				icon: 'success',
				title: '推文成功',
			})
			setIsPostText('')
		}).catch((error) => {
			console.error(error)
		})
	}

	useEffect(() => {
		userAPI.getCurrentUser().then((response) => {
			if (response.status !== 200) {
					throw new Error(response.message)
				}
			const { data } = response
			setCurrentUser(data)
		}).catch((error) => {
			console.error(error)
		})
	}, [])

	useEffect(() => {
		;(async () => {
			try {
				const response = await getTweets.get('/')
				const tweetData = response.data
				setTweets(tweetData)
			} catch (error) {
				console.error('Failed to tweets:', error)
			}
		})()
	}, [])

	useEffect(() => {
		const checkTokenIsValid = async () => {
			try{
				const authToken = localStorage.getItem('authToken')
			if (!authToken) {
				navigate('/login')
				}
			const result = await checkPermission(authToken)
			if (!result) {
				navigate('/login')
				}
			}
			catch(error) {
				console.error(error)
			}
		}

		checkTokenIsValid()
	}, [])

	useEffect(() => {
		if (pathname === '/home') {
			handleChangeStep(1)
		}
	}, [pathname])

	useEffect(() => {
		if (isPostText.trim().length === 0) {
			setIsDisable(true)
		} else {
			setIsDisable(false)
		}
	}, [isPostText.trim().length === 0])

	return (
		<div className={`${style.tweetsContainer}`}>
			<header className={`${style.tweetsHeader}`}>
				<MainHeader avatar={currentUser.avatar} />
			</header>
			<div className={`${style.tweetPostArea}`}>
				<MainContent
					onClick={onTweetClick}
					onDisabled={isDisabled}
					onButtonChange={handleButtonChange}
					onPostText={isPostText}
					avatar={currentUser.avatar}
					onSubmit={handleTweetSubmit}
					showError={showError}
				/>
			</div>
			<main className={`${style.mainTweets}`}>
				{tweets.map((tweet) => (
					<MainTweetsContent
						key={tweet.id}
						id={tweet.id}
						userId={tweet.User.id}
						name={tweet.User.name}
						avatar={tweet.User.avatar}
						account={tweet.User.account}
						content={tweet.description}
						time={tweet.relativeTimeFromNow}
						quantity={tweet.repliesCount}
						isLikeQuantity={tweet.likesCount}
						isSelfUserLike={tweet.isSelfUserLike}
						onOtherUserId={handleOtherUserId}
						onShowReplyModal={handleShowReplyModal}
					/>
				))}
			</main>
		</div>
	)
}
