import style from './OtherUserTweetsContent.module.scss'
import { ReactComponent as Like } from '../../assets/redlike.svg'
import { ReactComponent as Message } from '../../assets/message.svg'
import { ReactComponent as Dislike } from '../../assets/unlike.svg'
import { useState } from 'react'
import likeAPI from 'api/likeAPI'

export default function UserTweetsContent({
	id,
	name,
	account,
	avatar,
	description,
	isSelfUserLike,
	time,
	repliesCount,
	likeCount,
}) {
	const [like, setLike] = useState(isSelfUserLike)
	const [likeQuantity, setLikeQuantity] = useState(likeCount)

	const handleLikeClick = () => {
		setLike(!like)
		if (!like) {
			setLikeQuantity(likeQuantity + 1)
			likeAPI.like(id).then((response) => {

			})
		} else {
			setLikeQuantity(likeQuantity - 1)
			likeAPI.unlike(id).then((response) => {

			})
		}
	}
	return (
		<div className={`${style.mainTweetsContainer}`}>
			<div className={`${style.mainTweetsList}`}>
				<div className={`${style.mainTweetsLogo}`}>
					<img src={avatar} className={`${style.mainTweetsImg}`} alt='' />
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
								</div>
							</div>
						</div>
					</div>
					<div className={`${style.mainTweetsContent}`}>{description}</div>
					<div className={`${style.mainTweetsQuantityGroup}`}>
						<div className={`${style.mainTweetsQuantity}`}>
							<Message width='16px' height='16px' />
							<p>{repliesCount}</p>
						</div>
						<div className={`${style.mainTweetsLikeQuantity}`}>
							{like ? (
								<Like width='16px' height='16px' onClick={handleLikeClick} />
							) : (
								<Dislike width='16px' height='16px' onClick={handleLikeClick} />
							)}
							<p>{likeQuantity}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
