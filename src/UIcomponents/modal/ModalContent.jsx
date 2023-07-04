import { useContext, useEffect } from 'react'
import style from './ModalContent.module.scss'
import { AvatarContext } from 'context/LoadedContext'

export default function ModalContent({
	avatar,
	onInputChange,
	onInput,
	onSubmit,
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
						<textarea
							className={`${style.postTweetInput}`}
							type='text'
							placeholder='有什麼新鮮事？'
							value={onInput}
							onChange={onInputChange}
						/>
					</div>
				</div>
			</form>
		</main>
	)
}
