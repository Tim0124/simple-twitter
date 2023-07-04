import Button from 'UIcomponents/buttons/Button'
import style from '../../components/replyList/ReplyListTweet.module.scss'
import { ReactComponent as Dislike } from '../../assets/unlike.svg'
import { ReactComponent as Message } from '../../assets/message.svg'

export default function ReplySkeleton () {
  return (
    <div className={`${style.replyTweetsContainer} animate-pulse`}>
			<div className={`${style.replyTweetsList}`}>
				<div className={`${style.replyTweetsInfo}`}>
					<div className={`${style.replyTweetsSecInfo}`}>
							<div className={`${style.replyTweetsLogo} avatar-load`}>
								<img
									src=''
									className={`${style.replyTweetsImg}`}
									alt=''
								/>
							</div>
						<div className={`${style.replyTweetsNameGroup} w-1/3`}>
							<div className={`${style.replyTweetsName} avatar-load h-5`}>
								<p></p>
							</div>
							<div className={`${style.replyTweetsSmallAccount} avatar-load h-5 `}>
								<p className={`${style.replyTweetsAccount}`}></p>
							</div>
						</div>
					</div>
					<div className={`${style.replyTweetsContent} h-6 avatar-load`}>
						<p></p>
					</div>
					<div className={`${style.replyTweetsCreateGroup} `}>
						<div className={`${style.replyTweetsDateItem} h-6 avatar-load w-full`}>
							<p className={`${style.replyTweetsDate}`}></p>
						</div>
					</div>
					<div className={`${style.replyTweetsQuantityGroup}`}>
						<div className={`${style.replyTweetsQuantity}`}>
							<p className={`${style.replyQuantity}`}></p>
							<p className={`${style.replyQuantityText}`}>回覆</p>
						</div>
						<div className={`${style.replyTweetsLikeQuantity}`}>
							<p className={`${style.replyLikeQuantity} `}></p>
							<p className={`${style.replyQuantityText}`}>喜歡次數</p>
						</div>
					</div>
					<div className={`${style.replyTweetsIconGroup}`}>
						<div
							className={`${style.replyTweetsIcon} `}
						>
              <Message width='24px' height='24px' />
						</div>
						<div className={`${style.replyTweetsLikeIcon}`}>
              <Dislike width='24px' height='24px'/>
						</div>
					</div>
				</div>
			</div>
			<div className={`${style.replyTweetsForm}`}>
				<div className={`${style.replyTweetsContentGroup}`}>
					<div className={`${style.replyTweetsInputGroup}`}>
						<div className={`${style.replyTweetsAvatarItem} avatar-load`}>
							<img
								src=''
								alt=''
								className={`${style.replyTweetsAvatar}`}
							/>
						</div>
						<div className={`${style.replyTweetsInputItem}`}>
							<textarea
								className={style.replyTweetTextArea}
								type='text'
								placeholder='推你的回覆'
							></textarea>
						</div>
					</div>
					<div className={`${style.replyTweetsButtonGroup}`}>
						<div className={`${style.replyTweetsButtonItem}`}>
							<Button
								text='回覆'
								size='middle'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}