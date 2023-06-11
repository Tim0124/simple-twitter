import style from './MainTweetsContent.module.scss'
import { ReactComponent as Like } from '../../assets/unlike.svg'
import { ReactComponent as Message } from '../../assets/message.svg'
import { Link } from 'react-router-dom'

export default function MainTweetsContent({
	tweetId,
	userId,
	name,
	avatar,
	account,
	content,
	time,
	quantity,
	likeQuantity,
	onReplyClick,
	onTweetsClick
}) {
	return (
		<div className={`${style.mainTweetsContainer}`}>
			<div className={`${style.mainTweetsList}`}>
				<div className={`${style.mainTweetsLogo}`}>
					<img
						src={avatar}
						className={`${style.mainTweetsImg}`}
						alt=''
					/>
				</div>
				<div className={`${style.mainTweetsInfo}`}>
					<div className={`${style.mainTweetsSecInfo}`}>
						<div className={`${style.mainTweetsNameGroup}`}>
							<div className={`${style.mainTweetsName}`}>{name}</div>
							<div className={`${style.mainTweetsSmallAccount}`}>
								<div className={`${style.mainTweetsAccount}`}>{account}</div>
								<div className={`${style.mainTweetsdot}`}>・</div>
								<div className={`${style.mainTweetsTime}`}>{time}</div>
							</div>
						</div>
					</div>
					<Link to={`/reply/${tweetId}`} >
						<div className={`${style.mainTweetsContent}`}>{content}</div>
					</Link>
					<div className={`${style.mainTweetsQuantityGroup}`}>
						<div className={`${style.mainTweetsQuantity}`} >
							<Message width='16px' height='16px'/>
							<p>{quantity}</p>
						</div>
						<div className={`${style.mainTweetsLikeQuantity}`}>
							<Like width='16px' height='16px' />
							<p>{likeQuantity}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
