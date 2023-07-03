import Button from 'UIcomponents/buttons/Button'
import style from './MainContent.module.scss'

export default function PostContent({
	onDisabled,
	onButtonChange,
	onPostText,
	avatar,
	onSubmit,
	showError,
}) {
	return (
		<main className={`${style.postTweetContent}`}>
			<form onSubmit={onSubmit} className={`${style.postTweetForm}`}>
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
								value={onPostText}
							></textarea>
						</div>
						<footer className={`${style.footerArea}`}>
							<div
								className={`${style.footerText}`}
								style={{ display: showError ? 'block' : 'none' }}
							>
								<p>字數不可超過140字</p>
							</div>
							<p className={style.textLength}>{onPostText.length}/140</p>
							<div className={`${style.footerButton}`}>
								<Button
									text='推文'
									size='middle'
									onDisabled={onDisabled}
									onClick={onSubmit}
								/>
							</div>
						</footer>
					</div>
				</div>
			</form>
		</main>
	)
}
