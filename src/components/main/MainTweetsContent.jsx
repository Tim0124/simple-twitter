import style from './MainTweetsContent.module.scss'
import { ReactComponent as Dislike } from '../../assets/unlike.svg'
import { ReactComponent as Like } from '../../assets/redlike.svg'
import { ReactComponent as Message } from '../../assets/message.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import likeAPI from 'api/likeAPI'

export default function MainTweetsContent({
	id,
	userId,
	name,
	avatar,
	account,
	content,
	time,
	quantity,
	isLikeQuantity,
	onReplyClick,
	onTweetsClick,
	isSelfUserLike,
	onOtherUserId,
}) {
	const [like, setLike] = useState(isSelfUserLike)
	const [likeQuantity, setLikeQuantity] = useState(isLikeQuantity)

	const handleLikeClick = (id) => {
		setLike(!like)
		if (!like) {
			setLikeQuantity(likeQuantity - 1)
			isLikeQuantity = likeQuantity
			likeAPI.like(id, isLikeQuantity).then((response) => {
				console.log(response)
			})
		} else {
			setLikeQuantity(likeQuantity + 1)
			isLikeQuantity = likeQuantity
			likeAPI.unlike(id, likeQuantity).then((response) => {
				console.log(response)
			})
		}
	}

	return (
		<div className={`${style.mainTweetsContainer}`}>
			<div className={`${style.mainTweetsList}`}>
				<Link to={`/user/other/${userId}`}>
					<div
						className={`${style.mainTweetsLogo}`}
						onClick={() => onOtherUserId(userId)}
					>
						<img src={avatar} className={`${style.mainTweetsImg}`} alt='' />
					</div>
				</Link>
				<div className={`${style.mainTweetsInfo}`}>
					<div className={`${style.mainTweetsSecInfo}`}>
						<div className={`${style.mainTweetsNameGroup}`}>
							<div className={`${style.mainTweetsName}`}>{name}</div>
							<div className={`${style.mainTweetsSmallAccount}`}>
								<div className={`${style.mainTweetsAccount}`}>@{account}</div>
								<div className={`${style.mainTweetsdot}`}>・</div>
								<div className={`${style.mainTweetsTime}`}>{time}</div>
							</div>
						</div>
					</div>
					<Link to={`/reply/${id}`}>
						<div className={`${style.mainTweetsContent}`}>{content}</div>
					</Link>
					<div className={`${style.mainTweetsQuantityGroup}`}>
						<div className={`${style.mainTweetsQuantity}`}>
							<Message width='16px' height='16px' />
							<p>{quantity}</p>
						</div>
						<div className={`${style.mainTweetsLikeQuantity}`}>
							{like ? (
								<Dislike
									width='16px'
									height='16px'
									id={id}
									onClick={() => handleLikeClick(id)}
								/>
							) : (
								<Like
									width='16px'
									height='16px'
									id={id}
									onClick={() => handleLikeClick(id)}
								/>
							)}
							<p>{likeQuantity}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
