import style from './ReplyListHeader.module.scss'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import { Link } from 'react-router-dom'

export default function ReplyListHeader({ title, arrow }) {
	return (
		<header className={`${style.tweetsHeader}`}>
			<nav className={`${style.tweetsNavbar}`}>
				<div className={`${style.navIconItem}`}>
					<Link to='/home'>
						<div className={`${style.navIcon}`}>
							<Arrow />
						</div>
					</Link>
				</div>
				<div className={`${style.navTitleItem}`}>
					<p className={`${style.navTitle}`}>推文</p>
				</div>
			</nav>
		</header>
	)
}
