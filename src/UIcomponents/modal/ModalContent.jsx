import style from './ModalContent.module.scss'

export default function PostContent() {
	return (
		<main className={`${style.postTweetContent}`}>
			<form action='' className={`${style.postTweetForm}`}>
				<div className={`${style.contentGroup}`}>
					<div className={`${style.avatarItem}`}>
						<img
							src='https://picsum.photos/300/300?text=8'
							alt=''
							className={`${style.avatar}`}
						/>
					</div>
					<div className={`${style.postTweetInputGroup}`}>
						<textarea
							className={`${style.postTweetInput}`}
							type='text'
							placeholder='有什麼新鮮事？'
						/>	
					</div>
				</div>
			</form>
		</main>
	)
}
