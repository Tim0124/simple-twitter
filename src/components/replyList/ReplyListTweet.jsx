import style from './ReplyListTweet.module.scss'
import { ReactComponent as Dislike } from '../../assets/unlike.svg'
import { ReactComponent as Like } from '../../assets/redlike.svg'
import { ReactComponent as Message } from '../../assets/message.svg'
import Button from 'UIcomponents/buttons/Button'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShowReplyModalContext } from 'context/ModalContext'

export default function ReplyListTweet({
	avatar,
	name,
	account,
	content,
	quantity,
	likeQuantity,
	time,
	date,
	onShowReplyModal,
	id,
}) {
	const [like, setLike] = useState()
	const [isLikeQuantity, setIsLikeQuantity] = useState(likeQuantity)
	const handleShowReplyModal = useContext(ShowReplyModalContext)
	

	const handleLikeClick = () => {
		setLike(!like)
		if (!like) {
			setIsLikeQuantity(isLikeQuantity + 1)
		} else {
			setIsLikeQuantity(isLikeQuantity - 1)
		}
	}
	// const dateObj = new Date(date)
	// const year = dateObj.getFullYear()
	// const month = dateObj.getMonth() + 1
	// const day = dateObj.getDay()
	// const formateDate = `${year}年${month}月${day}日`
	return (
		<div className={`${style.replyTweetsContainer}`}>
			<div className={`${style.replyTweetsList}`}>
				<div className={`${style.replyTweetsInfo}`}>
					<div className={`${style.replyTweetsSecInfo}`}>
						<Link>
							<div className={`${style.replyTweetsLogo}`}>
								<img
									src={avatar}
									className={`${style.replyTweetsImg}`}
									alt={account}
								/>
							</div>
						</Link>
						<div className={`${style.replyTweetsNameGroup}`}>
							<div className={`${style.replyTweetsName}`}>
								<p>{name}</p>
							</div>
							<div className={`${style.replyTweetsSmallAccount}`}>
								<p className={`${style.replyTweetsAccount}`}>@{account}</p>
							</div>
						</div>
					</div>
					<div className={`${style.replyTweetsContent}`}>
						<p>{content}</p>
					</div>
					<div className={`${style.replyTweetsCreateGroup}`}>
						<div className={`${style.replyTweetsDateItem}`}>
							<p className={`${style.replyTweetsDate}`}>{date}</p>
						</div>
					</div>
					<div className={`${style.replyTweetsQuantityGroup}`}>
						<div className={`${style.replyTweetsQuantity}`}>
							<p className={`${style.replyQuantity}`}>{quantity}</p>
							<p className={`${style.replyQuantityText}`}>回覆</p>
						</div>
						<div className={`${style.replyTweetsLikeQuantity}`}>
							<p className={`${style.replyLikeQuantity}`}>{isLikeQuantity}</p>
							<p className={`${style.replyQuantityText}`}>喜歡次數</p>
						</div>
					</div>
					<div className={`${style.replyTweetsIconGroup}`}>
						<div
							className={`${style.replyTweetsIcon}`}
							onClick={() =>handleShowReplyModal(id)}
						>
							<Message width='24px' height='24px' />
						</div>
						<div className={`${style.replyTweetsLikeIcon}`}>
							{like ? (
								<Like width='25px' height='23px' onClick={handleLikeClick} />
							) : (
								<Dislike width='25px' height='23px' onClick={handleLikeClick} />
							)}
						</div>
					</div>
				</div>
			</div>
			<div className={`${style.replyTweetsForm}`}>
				<div className={`${style.replyTweetsContentGroup}`}>
					<div className={`${style.replyTweetsInputGroup}`}>
						<div className={`${style.replyTweetsAvatarItem}`}>
							<img
								src={avatar}
								alt={account}
								className={`${style.replyTweetsAvatar}`}
							/>
						</div>
						<div className={`${style.replyTweetsInputItem}`}>
							<p>有什麼新鮮事？</p>
						</div>
					</div>
					<div className={`${style.replyTweetsButtonGroup}`}>
						<div className={`${style.replyTweetsButtonItem}`}>
							<Button text='回覆' size='middle' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
