import style from './MainHeader.module.scss'

export default function MainHeader({ avatar }) {
	return (
		<header className={`${style.tweetsHeaderContainer}`}>
			<nav className={`${style.tweetsNavbar}`}>
				<div className={`${style.navAvatarItem}`}>
					<img className={`${style.navAvatar}`} src={avatar} alt='' />
				</div>
				<div className={`${style.navTitle}`}>
					<h1 className={`${style.titleText}`}>首頁</h1>
				</div>
			</nav>
		</header>
	)
}
