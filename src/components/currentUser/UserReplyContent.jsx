import style from './UserReplyContent.module.scss'
import { ReactComponent as Like } from '../../assets/redlike.svg'
import { ReactComponent as Message } from '../../assets/message.svg'
import { ReactComponent as Dislike } from '../../assets/unlike.svg'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function UserReplyContent({
	name,
	account,
	avatar,
	comment,
	time,
	replyAccount,
	tweetUserId,
}) {
	return (
		<div className={`${style.userReplyContainer}`}>
			<div className={`${style.userReplyList}`}>
				<div className={`${style.userReplyAvatar}`}>
					<img src={avatar} className={`${style.userReplyImg}`} alt={account} />
				</div>
				<div className={`${style.userReplyInfo}`}>
					<div className={`${style.userReplySecInfo}`}>
						<div className={`${style.userReplyNameGroup}`}>
							<div className={`${style.userReplyName}`}>{name}</div>
							<div className={`${style.userReplySmallAccount}`}>
								<div className={`${style.userReplyAccount}`}>
									<p>@{account}</p>
								</div>
								<div className={`${style.userReplyDot}`}>
									<p>・</p>
								</div>
								<div className={`${style.userReplyTime}`}>
									<p>{time}</p>
								</div>
							</div>
						</div>
					</div>
					<div className={`${style.replyListItemAccountGroup}`}>
						<p className={`${style.replyListItemText}`}>回覆</p>
						<Link to={`/user/other/${tweetUserId}`}>
							<p className={`${style.replyListItemAccount}`}>@{replyAccount}</p>
						</Link>
					</div>
					<div className={`${style.replyListItemContentGroup}`}>
						<p className={`${style.replyListItemContentItem}`}>{comment}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
