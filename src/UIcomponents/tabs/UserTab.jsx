import { Link } from 'react-router-dom'
import style from './UserTab.module.scss'

export default function UserTab() {
	return (
		<section className={`${style.userTweetsWrapper}`}>
			<div className={`${style.userTweetsGroup}`}>
				<div className={`${style.userTweetsItem} `}>
					<Link to='/user/self' className={`${style.linkStyle}`}>
						<p>推文</p>
					</Link>
				</div>
				<div className={`${style.userReplyItem} ${style.userActive}`}>
					<Link to='/user/self/reply' className={`${style.linkStyle}`}>
						<p>回覆</p>
					</Link>
				</div>
				<div className={`${style.userLikeItem} `}>
					<Link to='/user/self/like' className={`${style.linkStyle}`}>
						<p>喜歡的內容</p>
					</Link>
				</div>
			</div>
		</section>
	)
}
