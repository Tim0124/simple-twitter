import Button from 'UIcomponents/buttons/Button'
import style from '../../UIcomponents/layouts/PopularUser.module.scss'

export default function PopularSkeleton() {
	return (
		<div className={`${style.popularUserContainer} animate-pulse`}>
			<div className={`${style.popularUserItems}`}>
				<div className={`${style.popularUserList}`}>
					<div className={`${style.popularUserLogo} avatar-load`}>
						<img src='' className={`${style.popularUserImg}`} alt='' />
					</div>
					<div
						className={`${style.popularUserNameGroup} h-full flex gap-2 flex-col`}
					>
						<div className={`${style.popularUserName} avatar-load h-6`}></div>
						<div
							className={`${style.popularUserAccount} avatar-load h-6`}
						></div>
					</div>
				</div>
				<div className={`${style.popularUserButton} `}>
					<div className={`${style.popularUserfollowing} avatar-load`}></div>
				</div>
			</div>
		</div>
	)
}
