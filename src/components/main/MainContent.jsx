import Button from 'UIcomponents/buttons/Button'
import style from './MainContent.module.scss'

export default function PostContent({ onTweetClick, onDisabled, onButtonChange, isPostText }) {
	return (
		<main className={`${style.postTweetContent}`}>
			<div className={`${style.postTweetForm}`}>
				<div className={`${style.contentGroup}`}>
					<div className={`${style.avatarItem}`}>
						<img
							src='https://picsum.photos/300/300?text=8'
							alt=''
							className={`${style.avatar}`}
						/>
					</div>
					<div className={`${style.postTweetInputGroup}`}>
						<div className={`${style.postTweetInput}`}>
							<textarea className={`${style.postTweetTextArea}`}
              type='text'
              placeholder='有什麼新鮮事？'
              onChange={onButtonChange}
              value={isPostText}
              ></textarea>
						</div>
						<footer className={`${style.footerArea}`}>
							<div className={`${style.footerButton}`} >
								<Button text='推文' size='middle' onDisabled={onDisabled}/>
							</div>
						</footer>
					</div>
				</div>
			</div>
		</main>
	)
}
