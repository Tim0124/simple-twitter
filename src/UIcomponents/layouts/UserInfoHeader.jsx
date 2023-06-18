import style from './UserInfoHeader.module.scss'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import { Link, useNavigate } from 'react-router-dom'

export default function UserInfoHeader({ name, tweet }) {
	const navigate = useNavigate()
	return (
		<header className={`${style.userInfoHeader}`}>
			<nav className={`${style.userInfoNavbar}`}>
				<div
					className={`${style.userInfoNavTitle}`}
					onClick={() => navigate(-1)}
				>
					<h1 className={`${style.userInfoText}`}>
						<Arrow />
					</h1>
				</div>
				<div className={`${style.userInfoHeaderGroup}`}>
					<div className={`${style.userInfoNavName}`}>{name}</div>
					<div className={`${style.userInfoTweet}`}>{tweet}&nbsp;推文</div>
				</div>
			</nav>
		</header>
	)
}
