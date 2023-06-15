import style from './ModalReplyContent.module.scss'


export default function ModalReplyContent({
	description,
	time,
	avatar,
	name,
	account,
	currentUserAvatar,
	comment,
	onInputChange,
	onSubmit,
	onShowError
}) {
	return (
		<main className={`${style.replyTweetContent}`}>
			<form onSubmit={onSubmit}className={`${style.replyTweetForm}`}>
				<div className={`${style.contentGroup}`}>
					<div className={`${style.avatarItem}`}>
						<img src={avatar} alt={account} className={`${style.avatar}`} />
						<span className={`${style.line}`}></span>
					</div>
					<div className={`${style.replyTweetInfo}`}>
						<div className={`${style.replyTweetNameGroup}`}>
							<div className={`${style.replyTweetName}`}>
								<p className={`${style.tweetName}`}>{name}</p>
							</div>
							<div className={`${style.replyTweetSmallAccount}`}>
								<div className={`${style.replyTweetAccount}`}>
									<p>@{account}</p>
								</div>
								<div className={`${style.replyTweetDot}`}>
									<p>・</p>
								</div>
								<div className={`${style.replyTweetTime}`}>
									<p>{time}</p>
								</div>
							</div>
						</div>
						<div className={`${style.replyTweetReplyGroup}`}>
							<div className={`${style.replyTweetReplyTextItem}`}>
								<p className={`${style.replyTweetText}`}>回覆</p>
							</div>
							<div className={`${style.replyTweetReplyAccountItem}`}>
								<p className={`${style.replyTweetAccountText}`}>
									@{account}
								</p>
							</div>
						</div>
						<div className={`${style.replyTweetTextItem}`}>
							<p className={`${style.replyTweetContentText}`}>
								{description}
							</p>
						</div>
					</div>
				</div>
				<div className={`${style.replyTweetInputGroup}`}>
					<div className={`${style.replyTweetAvatarItem}`}>
						<img
							src={currentUserAvatar}
							alt=''
							className={`${style.replyTweetAvatar}`}
						/>
					</div>
					<textarea
						className={`${style.replyTweetInput}`}
						type='text'
						placeholder='推你的回覆'
						value={comment}
						onChange={onInputChange}
					/>
					{/* <footer className={`${style.footerText}`} style={{display: onShowError ? "block" : 'none'}}>
						<p>內容不可空白</p>
					</footer> */}
				</div>
			</form>
		</main>
	)
}
