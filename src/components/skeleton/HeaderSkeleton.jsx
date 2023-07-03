import style from '../../UIcomponents/layouts/UserInfoHeader.module.scss'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'

export default function HeaderSkeleton () {
  return (
    <header className={`${style.userInfoHeader} `}>
			<nav className={`${style.userInfoNavbar}`}>
				<div
					className={`${style.userInfoNavTitle}`}
				>
					<h1 className={`${style.userInfoText}`}>
						<Arrow />
					</h1>
				</div>
				<div className={`${style.userInfoHeaderGroup} animate-pulse h-full w-full gap-2`}>
					<div className={`${style.userInfoNavName} mb-1 h-6 w-20 avatar-load`}></div>
					<div className={`${style.userInfoTweet} h-4 w-14 avatar-load`}></div>
				</div>
			</nav>
		</header>
  )
}