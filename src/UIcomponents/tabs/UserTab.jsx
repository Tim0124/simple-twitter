import { Link } from 'react-router-dom'
import style from './UserTab.module.scss'
import { useContext } from 'react'
import { TabChangeContext } from 'context/UserTabContext'

export default function UserTab({ id }) {
	const tab = useContext(TabChangeContext)

	return (
		<section className={`${style.userTweetsWrapper}`}>
			<div className={`${style.userTweetsGroup}`}>
				<div
					className={`${style.userTweetsItem} ${
						tab === 1 ? style.userActive : ''
					}`}
				>
					<Link to={`/user/${id}`} className={`${style.linkStyle}`}>
						<p className={style.userTabText} style={{ color: tab === 1 ? '#ff6600' : '#6C757D' }}>推文</p>
					</Link>
				</div>
				<div
					className={`${style.userReplyItem} ${
						tab === 2 ? style.userActive : ''
					}`}
				>
					<Link to={`/user/self/reply/${id}`} className={`${style.linkStyle}`}>
						<p className={style.userTabText} style={{ color: tab === 2 ? '#ff6600' : '#6C757D' }}>回覆</p>
					</Link>
				</div>
				<div
					className={`${style.userLikeItem} ${
						tab === 3 ? style.userActive : ''
					}`}
				>
					<Link to={`/user/self/like/${id}`} className={`${style.linkStyle}`}>
						<p className={style.userTabText} style={{ color: tab === 3 ? '#ff6600' : '#6C757D' }}>
							喜歡的內容
						</p>
					</Link>
				</div>
			</div>
		</section>
	)
}
