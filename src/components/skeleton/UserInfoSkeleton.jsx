import Button from 'UIcomponents/buttons/Button'
import style from '../../UIcomponents/layouts/UserInfo.module.scss'

export default function UserInfoSkeleton() {
	return (
		<div className={`${style.userInfoContainer} animate-pulse`}>
			<div className={`${style.userInfoWrapper}`}>
				<div className={`${style.userInfoImgGroup}`}>
					<div
						className={`${style.userInfoBackground} bg-gray-200 dark:bg-gray-200  border-l-gray-50 flex justify-center items-center`}
					>
						<svg
							class='w-12 h-12 text-gray-300'
							xmlns='http://www.w3.org/2000/svg'
							aria-hidden='true'
							fill='currentColor'
							viewBox='0 0 640 512'
						>
							<path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
						</svg>
					</div>
					<div
						className={`${style.userInfoCardAvatar} avatar-load border-white border-4`}
					></div>
				</div>
				<div className={`${style.userInfoAllContent}`}>
					<div className={`${style.userInfoBottonArea}`}>
						<div className={`${style.userInfoButton} avatar-load`}></div>
					</div>
					<div className={`${style.userInfoBottomArea}`}>
						<div className={`${style.userInfoContentArea}`}>
							<div
								className={`${style.userInfoNameGroup} mt-4 h-6 w-20 avatar-load`}
							>
								<div className={`${style.userInfoName}`}></div>
								<div className={`${style.userInfoAccount}`}></div>
							</div>
						</div>
						<div className={`${style.userInfoContent} h-6 avatar-load`}></div>
						<div
							className={`${style.adminTweetsCardFollowGroup} h-6 w-40 avatar-load`}
						></div>
					</div>
				</div>
			</div>
		</div>
	)
}
