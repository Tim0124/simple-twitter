import style from '../main/MainTweetsContent.module.scss'

export default function TweetsSkeleton () {
  return (
    // 	<div role="status" className=" h-20 w-full animate-pulse p-3 flex gap-2  border-b-2">
		// 		<div className=" w-14 bg-gray-200 rounded-full "></div>
		// 		<div className=' flex-1'>
    //       <div className="h-3 avatar-load  mb-2.5"></div>
    //       <div className="h-4 avatar-load mb-2.5"></div>
    //       <div className="h-3 avatar-load  mb-2.5"></div>
    //       <span className="sr-only">Loading...</span>
    //     </div>
		// </div>
    <div className={`${style.mainTweetsContainer} animate-pulse`}>
			<div className={`${style.mainTweetsList} `}>
					<div
						className={`${style.mainTweetsLogo} avatar-load`}
					>
						<img src='' className={`${style.mainTweetsImg}`} alt='' />
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