import style from './UserTweetsContent.module.scss'
import { ReactComponent as Like } from '../../assets/redlike.svg'
import { ReactComponent as Message } from '../../assets/message.svg'
import { ReactComponent as Dislike } from '../../assets/unlike.svg'
import { useState } from 'react'

export default function UserTweetsContent({
	name,
	account,
	avatar,
	content,
	quantity,
	likeQuantity,
	time,
}) {
	const [like, setLike] = useState()
	const [isLikeQuantity, setIsLikeQuantity] = useState(likeQuantity)

	const handleLikeClick = () => {
		setLike(!like)
		if (!like) {
			setIsLikeQuantity(isLikeQuantity + 1)
		} else {
			setIsLikeQuantity(isLikeQuantity - 1)
		}
	}

	return (
		<div className={`${style.mainTweetsContainer}`}>
			<div className={`${style.mainTweetsList}`}>
				<div className={`${style.mainTweetsLogo}`}>
					<img
						src={avatar}
						className={`${style.mainTweetsImg}`}
						alt=''
						width='50px'
						heigh='50px'
					/>
				</div>
				<div className={`${style.mainTweetsInfo}`}>
					<div className={`${style.mainTweetsSecInfo}`}>
						<div className={`${style.mainTweetsNameGroup}`}>
							<div className={`${style.mainTweetsName}`}>{name}</div>
							<div className={`${style.mainTweetsSmallAccount}`}>
								<div className={`${style.mainTweetsAccount}`}>{account}</div>
								<div className={`${style.mainTweetsdot}`}>・</div>
								<div className={`${style.mainTweetsTime}`}>
									<p>{time}</p>
									<p>小時</p>
								</div>
							</div>
						</div>
					</div>
					<div className={`${style.mainTweetsContent}`}>{content}</div>
					<div className={`${style.mainTweetsQuantityGroup}`}>
						<div className={`${style.mainTweetsQuantity}`}>
							<Message width='16px' height='16px' />
							<p>{quantity}</p>
						</div>
						<div className={`${style.mainTweetsLikeQuantity}`}>
							{like === true ? (
								<Like width='16px' height='16px' onClick={handleLikeClick} />
							) : (
								<Dislike width='16px' height='16px' onClick={handleLikeClick} />
							)}
							<p>{isLikeQuantity}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
