import style from './ReplyListItem.module.scss'

export default function ReplyListItem({
	name,
	account,
	time,
	content,
	avatar,
}) {
	return (
		<div className={`${style.replyListItemContainer}`}>
			<div className={`${style.replyListItemList}`}>
				<div className={`${style.replyListItemLogo}`}>
					<img src={avatar} className={`${style.replyListItemImg}`} alt='' />
				</div>
				<div className={`${style.replyListItemInfo}`}>
					<div className={`${style.replyListItemSecInfo}`}>
						<div className={`${style.replyListItemNameGroup}`}>
							<div className={`${style.replyListItemName}`}>
								<p>{name}</p>
							</div>
							<div className={`${style.replyListItemSmallAccount}`}>
								<div className={`${style.replyListItemAccount}`}>
									<p>{account}</p>
								</div>
								<div className={`${style.replyListItemdot}`}>
									<p>・</p>
								</div>
								<div className={`${style.replyListItemTimeGroup}`}>
									<p className={`${style.replyListItemTime}`}>{time}</p>
									<p className={`${style.replyListItemTimeText}`}>小時</p>
								</div>
							</div>
						</div>
					</div>
					<div className={`${style.replyListItemAccountGroup}`}>
						<p className={`${style.replyListItemText}`}>回覆</p>
						<p className={`${style.replyListItemAccount}`}>{account}</p>
					</div>
					<div className={`${style.replyListItemContentGroup}`}>
						<p className={`${style.replyListItemContentItem}`}>{content}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
