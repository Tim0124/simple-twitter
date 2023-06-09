import { Link } from 'react-router-dom'
import style from './ReplyListItem.module.scss'

export default function ReplyListItem({
	id,
	user,
	account,
	time,
	comment,
	avatar,
	onOtherUserId,
	tweetAccount,
}) {
	return (
		<div className={`${style.replyListItemContainer}`}>
			<div className={`${style.replyListItemList}`}>
				<Link to={`/user/other/${id}`}>
					<div
						className={`${style.replyListItemLogo}`}
						onClick={() => onOtherUserId(id)}
					>
						<img src={avatar} className={`${style.replyListItemImg}`} alt='' />
					</div>
				</Link>
				<div className={`${style.replyListItemInfo}`}>
					<div className={`${style.replyListItemSecInfo}`}>
						<div className={`${style.replyListItemNameGroup}`}>
							<div className={`${style.replyListItemName}`}>
								<p>{user}</p>
							</div>
							<div className={`${style.replyListItemSmallAccount}`}>
								<div className={`${style.replyListItemAccount}`}>
									<p>@{account}</p>
								</div>
								<div className={`${style.replyListItemdot}`}>
									<p>・</p>
								</div>
								<div className={`${style.replyListItemTimeGroup}`}>
									<p className={`${style.replyListItemTime}`}>{time}</p>
								</div>
							</div>
						</div>
					</div>
					<div className={`${style.replyListItemAccountGroup}`}>
						<p className={`${style.replyListItemText}`}>回覆</p>
						<p className={`${style.replyListItemAccount}`}>@{tweetAccount}</p>
					</div>
					<div className={`${style.replyListItemContentGroup}`}>
						<p className={`${style.replyListItemContentItem}`}>{comment}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
