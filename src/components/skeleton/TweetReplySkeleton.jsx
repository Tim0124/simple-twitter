import style from '../../UIcomponents/modal/ModalReplyContent.module.scss'

export default function TweetReplySkeleton() {
	return (
		<main className={`${style.replyTweetContent} animate-pulse`}>
			<form className={`${style.replyTweetForm}`}>
				<div className={`${style.contentGroup}`}>
					<div className={`${style.avatarItem} `}>
						<div src='' alt='' className={`${style.avatar} avatar-load`} />
						<span className={`${style.line}`}></span>
					</div>
					<div className={`${style.replyTweetInfo} w-full`}>
						<div
							className={`${style.replyTweetNameGroup} avatar-load h-6 w-1/3`}
						>
							<div className={`${style.replyTweetName}`}>
								<p className={`${style.tweetName}`}></p>
							</div>
							<div className={`${style.replyTweetSmallAccount}`}>
								<div className={`${style.replyTweetAccount}`}>
									<p></p>
								</div>
								<div className={`${style.replyTweetDot}`}>
									<p></p>
								</div>
								<div className={`${style.replyTweetTime}`}>
									<p></p>
								</div>
							</div>
						</div>
						<div
							className={`${style.replyTweetReplyGroup} avatar-load h-6 w-1/3`}
						>
							<div className={`${style.replyTweetReplyTextItem}`}>
								<p className={`${style.replyTweetText}`}></p>
							</div>
							<div className={`${style.replyTweetReplyAccountItem} `}>
								<p className={`${style.replyTweetAccountText}`}></p>
							</div>
						</div>
						<div className={`${style.replyTweetTextItem} avatar-load h-6`}>
							<p className={`${style.replyTweetContentText}`}></p>
						</div>
					</div>
				</div>
				<div className={`${style.replyTweetInputGroup}`}>
					<div className={`${style.replyTweetAvatarItem} avatar-load`}>
						<img src='' alt='' className={`${style.replyTweetAvatar} `} />
					</div>
					<textarea
						className={`${style.replyTweetInput}`}
						type='text'
						placeholder='推你的回覆'
					/>
				</div>
			</form>
		</main>
	)
}
