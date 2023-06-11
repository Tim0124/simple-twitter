import style from './UserTweetsContent.module.scss'
import { ReactComponent as Like } from '../../assets/unlike.svg'
import { ReactComponent as Message } from '../../assets/message.svg'

export default function UserTweetsContent({
	name,
	account,
	avatar,
	content,
	quantity,
	likeQuantity,
	time,
}) {
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
							<Like width='16px' height='16px' />
							<p>{likeQuantity}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
