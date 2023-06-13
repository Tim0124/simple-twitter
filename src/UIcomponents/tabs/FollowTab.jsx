import { Link } from 'react-router-dom'
import style from './FollowTab.module.scss'
import { useContext } from 'react'
import { TabChangeContext } from 'context/UserTabContext'

export default function FollowTab() {
	const tab = useContext(TabChangeContext)

	return (
		<section className={`${style.userTweetsWrapper}`}>
			<div className={`${style.userTweetsGroup} `}>
				<Link to='/user/self/follower' className={`${style.linkStyle}`}>
					<div className={`${style.userTweetsItem} ${
						tab === 4 ? style.userActive : ''
					}`}>
						<p style={{ color: tab === 4 ? '#ff6600' : '#000' }}>追隨者</p>
					</div>
				</Link>
				<Link to='/user/self/following' className={`${style.linkStyle}`}>
					<div className={`${style.userReplyItem} ${
						tab === 5 ? style.userActive : ''
					}`}>
						<p style={{ color: tab === 5 ? '#ff6600' : '#000' }}>正在追隨</p>
					</div>
				</Link>
			</div>
		</section>
	)
}
