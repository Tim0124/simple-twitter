import style from './UserNavbar.module.scss'

export default function UserNavbar() {
	return (
		<section className={`${style.userTweetsWrapper}`}>
			<div className={`${style.userTweetsGroup}`}>
				<div className={`${style.userTweetsItem} ${style.userActive}`}>
					<p>推文</p>
				</div>
				<div className={`${style.userReplyItem} `}>
					<p>回覆</p>
				</div>
				<div className={`${style.userLikeItem} `}>
					<p>喜歡的內容</p>
				</div>
			</div>
		</section>
	)
}
