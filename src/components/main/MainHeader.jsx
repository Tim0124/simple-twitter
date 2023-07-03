import { useContext, useEffect } from 'react'
import style from './MainHeader.module.scss'
import { AvatarContext } from 'context/LoadedContext'

export default function MainHeader({ avatar }) {
	const {isAvatarLoaded, setIsAvatarLoaded} = useContext(AvatarContext)

	useEffect(() => {
			setIsAvatarLoaded(true)
	},[avatar])
	
	return (
		<header className={`${style.tweetsHeaderContainer} ${isAvatarLoaded ? '' : 'animate-pulse'}`}>
			<nav className={`${style.tweetsNavbar}`}>
				<div className={`${style.navAvatarItem} avatar-load`}>
					<img className={`${style.navAvatar}`} src={avatar} alt='' />
				</div>
				<div className={`${style.navTitle}`}>
					<h1 className={`${style.titleText} `}>首頁</h1>
				</div>
			</nav>
		</header>
	)
}
