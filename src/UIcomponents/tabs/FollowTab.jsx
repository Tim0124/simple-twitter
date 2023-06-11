import { Link } from 'react-router-dom'
import style from './FollowTab.module.scss'

export default function FollowTab() {
	return (
		<section className={`${style.userTweetsWrapper}`}>
			<div className={`${style.userTweetsGroup}`}>
				<Link to='/user/self/follower' className={`${style.linkStyle}`}>
					<div className={`${style.userTweetsItem} ${style.userAction}`}>
						<p>追隨者</p>
					</div>
				</Link>
				<Link to='/user/self/following' className={`${style.linkStyle}`}>
					<div className={`${style.userReplyItem} `}>
						<p>正在追隨</p>
					</div>
				</Link>
			</div>
		</section>
	)
}
