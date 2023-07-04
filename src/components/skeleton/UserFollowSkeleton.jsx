import Button from 'UIcomponents/buttons/Button'
import style from '../../components/currentUser/userFollow/UserFollowContent.module.scss'

export default function UserFollowSkeleton() {
	return (
		<div className={`${style.userFollowContainer} animate-pulse`}>
			<div className={`${style.userFollowList}`}>
				<div className={`${style.userFollowLogo} avatar-load`}>
					<img src='' className={`${style.userFollowImg}`} alt='' />
				</div>
				<div className={`${style.userFollowInfo}`}>
					<div className={`${style.userFollowSecInfo}`}>
						<div
							className={`${style.userFollowNameGroup} avatar-load h-7 w-full`}
						>
							<div className={`${style.userFollowName}`}></div>
							<div className={`${style.userFollowSmallAccount}`}>
								<div className={`${style.userFollowAccount}`}></div>
							</div>
						</div>
					</div>
					<div className={`${style.userFollowContent} avatar-load h-7`}></div>
				</div>
			</div>
		</div>
	)
}
