import style from './AdminTweetsList.module.scss'

export default function AdminTweetsList() {
	return (
		<div className={`${style.adminTweetsWrapper}`}>
			<div className={`${style.adminTweetsContainer}`}>
				<div className={`${style.adminTweetsHeader}`}>推文清單</div>
				<div className={`${style.adminTweetsItem}`}></div>
			</div>
		</div>
	)
}
