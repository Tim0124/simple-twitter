import Button from 'UIcomponents/buttons/Button'
import style from './MainContent.module.scss'
import { useContext, useEffect, useState } from 'react'
import { AvatarContext } from 'context/LoadedContext'

export default function PostContent({
	onDisabled,
	onButtonChange,
	onPostText,
	avatar,
	onSubmit,
	showError,
}) {
	const { isAvatarLoaded, setIsAvatarLoaded } = useContext(AvatarContext)

	useEffect(() => {
		const image = new Image()
		image.src = avatar
		image.onload = () => {
			setIsAvatarLoaded(true)
		}
	}, [avatar])

	return (
		<main
			className={`${style.postTweetContent} ${
				isAvatarLoaded ? '' : 'animate-pulse'
			}`}
		>
			<form onSubmit={onSubmit} className={`${style.postTweetForm}`}>
				<div className={`${style.contentGroup}`}>
					<div className={`${style.avatarItem} avatar-load`}>
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
