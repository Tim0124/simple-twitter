import { Link } from 'react-router-dom'
import style from './UserTab.module.scss'
import { useContext } from 'react'
import { TabChangeContext } from 'context/UserTabContext'

export default function UserTab() {
	const tab = useContext(TabChangeContext)
	console.log(tab)

	return (
		<section className={`${style.userTweetsWrapper}`}>
			<div className={`${style.userTweetsGroup}`}>
				<div className={`${style.userTweetsItem} ${tab === 1 ? style.userActive : ''}`}>
					<Link to='/user/self' className={`${style.linkStyle}`}>
						<p style={{ color: tab === 1 ? '#ff6600' : '#000'}}>推文</p>
					</Link>
				</div>
				<div className={`${style.userReplyItem} ${tab === 2 ? style.userActive : ''}`}>
					<Link to='/user/self/reply' className={`${style.linkStyle}`}>
						<p style={{ color: tab === 2 ? '#ff6600' : '#000'}}>回覆</p>
					</Link>
				</div>
				<div className={`${style.userLikeItem} ${tab === 3 ? style.userActive : ''}`}>
					<Link to='/user/self/like' className={`${style.linkStyle}`}>
						<p style={{ color: tab === 3 ? '#ff6600' : '#000'}}>喜歡的內容</p>
					</Link>
				</div>
			</div>
		</section>
	)
}
