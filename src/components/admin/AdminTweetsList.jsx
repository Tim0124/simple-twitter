import style from './AdminTweetsList.module.scss'
import AdminTweetsItem from './AdminTweetsItem'
import Sidebar from 'UIcomponents/layouts/Sidebar'


export default function AdminTweetsList() {
	return (
		<div className={`${style.adminTweetsWrapper}`}>
			<div className={`${style.adminTweetsContainer}`}>
				<div className={`${style.adminTweetsHeader}`}>推文清單</div>
				<div className={`${style.adminTweetsItem}`}>
					{/* {data.map((data) => (
						<AdminTweetsItem key={data.id} {...data} />
					))} */}
				</div>
			</div>
		</div>
	)
}
