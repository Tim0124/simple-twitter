import style from './ModalPostTweet.module.scss'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import ModalContent from '../modal/ModalContent'
import Button from 'UIcomponents/buttons/Button'
import { ReactComponent as Close } from '../../assets/Vector.svg'
import ModalBlackDrop from './ModalBlackDrop'
import { useContext } from 'react'
import { ShowTweetModalContext, TweetModalContext } from 'context/ModalContext'

export default function ModalPostTweet({ onClick, onHiddenClick }) {
	const useShowModal = useContext(TweetModalContext)

	const useModalClick = useContext(ShowTweetModalContext)
	return (
		<div
			className={`${style.layoutModalContainer}`}
			style={{ display: useShowModal ? 'block' : 'none' }}
		>
			<ModalBlackDrop onClick={useModalClick} />
			<div className={`${style.modalPostTweet}`}>
				<div className={`${style.postTweetContainer}`}>
					<header className={`${style.tweetsHeader}`}>
						<nav className={`${style.tweetsNavbar}`}>
							<div className={`${style.navTitle}`}>
								<h1 className={`${style.titleArrow}`} onClick={useModalClick}>
									<Arrow />
								</h1>
								<h1 className={`${style.titleClose}`} onClick={useModalClick}>
									<Close style={{ color: '#ff6600' }} />
								</h1>
							</div>
							<div className={`${style.navButton}`}>
								<Button size='middle' text='推文' />
							</div>
						</nav>
					</header>
					<ModalContent />
					<div className={`${style.footerButtonItem}`}>
						<footer className={`${style.footerText}`}>
							<p>字數不可超過140字</p>
						</footer>
						<div className={`${style.footerButton}`}>
							<Button size='middle' text='推文' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
