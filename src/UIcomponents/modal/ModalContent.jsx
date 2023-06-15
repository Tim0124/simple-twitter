import style from './ModalContent.module.scss'

export default function ModalContent({
	avatar,
	onInputChange,
	onInput,
	onSubmit,
}) {
	return (
		<main className={`${style.postTweetContent}`}>
			<form onSubmit={onSubmit} className={`${style.postTweetForm}`}>
				<div className={`${style.contentGroup}`}>
					<div className={`${style.avatarItem}`}>
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
