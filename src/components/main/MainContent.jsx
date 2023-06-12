import Button from 'UIcomponents/buttons/Button'
import style from './MainContent.module.scss'

export default function PostContent({
	onTweetClick,
	onDisabled,
	onButtonChange,
	isPostText,
	avatar,
}) {
	return (
		<main className={`${style.postTweetContent}`}>
			<div className={`${style.postTweetForm}`}>
				<div className={`${style.contentGroup}`}>
					<div className={`${style.avatarItem}`}>
						<img src={avatar} alt='' className={`${style.avatar}`} />
					</div>
					<div className={`${style.postTweetInputGroup}`}>
						<div className={`${style.postTweetInput}`}>
							<textarea
								className={`${style.postTweetTextArea}`}
								type='text'
								placeholder='有什麼新鮮事？'
								onChange={onButtonChange}
								value={isPostText}
							></textarea>
						</div>
						<footer className={`${style.footerArea}`}>
							<div className={`${style.footerButton}`}>
								<Button text='推文' size='middle' onDisabled={onDisabled} />
							</div>
						</footer>
					</div>
				</div>
			</div>
		</main>
	)
}
