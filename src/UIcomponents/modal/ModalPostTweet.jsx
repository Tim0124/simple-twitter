import style from './ModalPostTweet.module.scss'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import ModalContent from '../modal/ModalContent'
import Button from 'UIcomponents/buttons/Button'
import { ReactComponent as Close } from '../../assets/Vector.svg'
import ModalBlackDrop from './ModalBlackDrop'
import { useContext, useEffect, useState } from 'react'
import { ShowTweetModalContext, TweetModalContext } from 'context/ModalContext'
import tweetAPI from 'api/tweetAPI'
import userAPI from 'api/userAPI'
import { Toast } from 'heplers/helpers'

export default function ModalPostTweet({ onClick, onHiddenClick }) {
	const [currentUser, setCurrentUser] = useState([])
	const [tweet, setTweet] = useState('')
	const [showError, setShowError] = useState(false)
	const ShowModal = useContext(TweetModalContext)
	const ModalClick = useContext(ShowTweetModalContext)
	const userId = localStorage.getItem('userId')
	const [tweetError, setTweetError ] = useState(false)

	const handleInputChange = (e) => {
		setTweet(e.target.value)
	}

	const handleTweetSubmit = (e) => {
		e.preventDefault()
		if (tweet.trim().length === 0) {
			setShowError(true)
			Toast.fire({
				icon: 'error',
				title: '內容不可空白',
			})
			setTimeout(() => {
				setShowError(false)
			},2000)
			return
		}
		if (tweet.trim().length > 140) {
			setTweetError(false)
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
		tweetAPI.postTweet(userId, tweet).then((res) => {
			Toast.fire({
				icon: 'success',
				title: '推文成功',
			})
			ModalClick()
		})
	}

	useEffect(() => {
		userAPI.getUser(userId).then((res) => {
			const { data } = res
			setCurrentUser(data)
		})
	}, [])

	return (
		<div
			className={`${style.layoutModalContainer}`}
			style={{ display: ShowModal ? 'block' : 'none' }}
		>
			<ModalBlackDrop onClick={ModalClick} />
			<div className={`${style.modalPostTweet}`}>
				<div className={`${style.postTweetContainer}`}>
					<header className={`${style.tweetsHeader}`}>
						<nav className={`${style.tweetsNavbar}`}>
							<div className={`${style.navTitle}`}>
								<h1 className={`${style.titleArrow}`} onClick={ModalClick}>
									<Arrow />
								</h1>
								<h1 className={`${style.titleClose}`} onClick={ModalClick}>
									<Close style={{ color: '#ff6600' }} />
								</h1>
							</div>
							<div className={`${style.navButton}`} onClick={handleTweetSubmit}>
								<Button size='middle' text='推文' />
							</div>
						</nav>
					</header>
					<ModalContent
						avatar={currentUser?.avatar}
						onInputChange={handleInputChange}
						onInput={tweet}
						onSubmit={handleTweetSubmit}
					/>
					<div className={`${style.footerButtonItem}`}>
						{tweet.trim().length === 0 ?
						<footer
							className={`${style.footerText}`}
							style={{ display: showError ? 'block' : 'none' }}
						>
							<p>內容不可空白</p>
						</footer>
						:
						<footer
							className={`${style.footerText}`}
							style={{ display: showError ? 'block' : 'none' }}
						>
							<p>字數不可超過140字</p>
						</footer>
					}
						
						<div
							className={`${style.footerButton}`}
							onClick={handleTweetSubmit}
						>
							<Button size='middle' text='推文' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
