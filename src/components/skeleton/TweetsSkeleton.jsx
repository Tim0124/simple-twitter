import style from '../main/MainTweetsContent.module.scss'

export default function TweetsSkeleton () {
  return (
    <div className={`${style.mainTweetsContainer} animate-pulse`}>
			<div className={`${style.mainTweetsList} `}>
					<div
						className={`${style.mainTweetsLogo} avatar-load `}
					>
					</div>
				<div className={`${style.mainTweetsInfo}`}>
					<div className={`${style.mainTweetsSecInfo} avatar-load h-5`}>
						<div className={`${style.mainTweetsNameGroup}`}>
							<div className={`${style.mainTweetsName}`}> </div>
							<div className={`${style.mainTweetsSmallAccount}`}>
								<div className={`${style.mainTweetsAccount}`}> </div>
								<div className={`${style.mainTweetsdot}`}> </div>
								<div className={`${style.mainTweetsTime}`}></div>
							</div>
						</div>
					</div>
						<div className={`${style.mainTweetsContent} avatar-load h-6`}></div>
					<div className={`${style.mainTweetsQuantityGroup} avatar-load h-6`}>
						<div
							className={`${style.mainTweetsQuantity}`}
						>
						</div>
						<div className={`${style.mainTweetsLikeQuantity}`}>
							<p></p>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}