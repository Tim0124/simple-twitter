import style from './AdminTweetsCardsList.module.scss'
import AdminTweetsCard from './AdminTweetsCards'

export default function AdminTweetsCardList() {
	return (
		<div className={`${style.adminTweetsCardListWrapper}`}>
			<div className={`${style.adminTweetsCardListContainer}`}>
				<div className={`${style.adminTweetsCardListHeader}`}>使用者列表</div>
				<div className={`${style.adminTweetsCardListItem}`}>
					{data.map((data) => (
						<AdminTweetsCard key={data.id} {...data} />
					))}
				</div>
			</div>
		</div>
	)
}
