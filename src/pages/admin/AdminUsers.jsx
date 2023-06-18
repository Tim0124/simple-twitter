import userAPI from 'api/userAPI'
import { useContext, useEffect, useState } from 'react'
import AdminTweetsCard from 'components/admin/AdminTweetsCards'
import style from './AdminUsers.module.scss'
import { useLocation } from 'react-router-dom'
import { ChangeStepContext } from 'context/SideBarContext'

export default function AdminUsers() {
	const [users, setUsers] = useState([])
	const { pathname } = useLocation()
	const handleChangeStep = useContext(ChangeStepContext)

	useEffect(() => {
		userAPI
			.getAdminUsers()
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(response.message)
				}
				const { data } = response
				setUsers(data)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	useEffect(() => {
		if (pathname === '/admin/users') {
			handleChangeStep(2)
		}
	}, [pathname])

	return (
		<div className={`${style.adminTweetsCardListWrapper}`}>
			<div className={`${style.adminTweetsCardListContainer}`}>
				<div className={`${style.adminTweetsCardListHeader}`}>使用者列表</div>
				<div className={`${style.adminTweetsCardListItem}`}>
					{users.map((user) => (
						<AdminTweetsCard
							key={user.id}
							name={user.name}
							avatar={user.avatar}
							account={user.account}
							tweet={user.tweetsCount}
							like={user.likesCount}
							following={user.followingsCount}
							follower={user.followersCount}
							backgroundImage={user.backgroundImage}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
