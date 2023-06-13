import { Link } from 'react-router-dom'
import style from './OtherUserTab.module.scss'
import { useContext } from 'react'
import { TabChangeContext } from 'context/UserTabContext'

export default function UserTab({id}) {
	const tab = useContext(TabChangeContext)

	return (
		<section className={`${style.userTweetsWrapper}`}>
			<div className={`${style.userTweetsGroup}`}>
				<div
					className={`${style.userTweetsItem} ${
						tab === 1 ? style.userActive : ''
					}`}
				>
					<Link to={`/user/other/${id}`} className={`${style.linkStyle}`}>
						<p style={{ color: tab === 1 ? '#ff6600' : '#000' }}>推文</p>
					</Link>
				</div>
				<div
					className={`${style.userReplyItem} ${
						tab === 2 ? style.userActive : ''
					}`}
				>
					<Link to={`/user/other/reply/${id}`} className={`${style.linkStyle}`}>
						<p style={{ color: tab === 2 ? '#ff6600' : '#000' }}>回覆</p>
					</Link>
				</div>
				<div
					className={`${style.userLikeItem} ${
						tab === 3 ? style.userActive : ''
					}`}
				>
					<Link to={`/user/other/like/${id}`} className={`${style.linkStyle}`}>
						<p style={{ color: tab === 3 ? '#ff6600' : '#000' }}>喜歡的內容</p>
					</Link>
				</div>
			</div>
		</section>
	)
}
