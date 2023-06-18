import style from './UserFollowing.module.scss'
import UserFollowerContent from './UserFollowContent'
import { useContext, useEffect, useState } from 'react'
import followingAPI from 'api/followingAPI'
import { useLocation} from 'react-router-dom'
import { ChangeTabContext } from 'context/UserTabContext'
import { GetRenderContext, SetRenderContext } from 'context/FollowContext'
import userAPI from 'api/userAPI'

export default function UserFollowing() {
	const [following, setFollowing] = useState([])
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const setRender = useContext(SetRenderContext)
	const render = useContext(GetRenderContext)
	const [userId, setUserId] = useState('')
	const id = localStorage.getItem('userId')

	useEffect(() => {
		userAPI
			.getCurrentUser()
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(response.message)
				}
				const { data } = response
				setUserId(data.id)
				followingAPI
					.getFollowings(id)
					.then((response) => {
						if (response.status !== 200) {
							throw new Error(response.message)
						}
						const { data } = response
						setFollowing(data)
						// setRender('false')
					})
					.catch((error) => {
						console.error(error)
						// setRender('false')
					})
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	// useEffect(() => {
	// 	// if (render === 'true' || render === 'init') {
	// 		followingAPI
	// 			.getFollowings(userId)
	// 			.then((response) => {
	// 				const { data } = response
	// 				setFollowing(data)
	// 				// setRender('false')
	// 			})
	// 			.catch((error) => {
	// 				console.error(error)
	// 				// setRender('false')
	// 			})
	// 	// }
	// }, [])

	// useEffect(() => {
	// 	setRender('init')
	// }, [])

	useEffect(() => {
		if (pathname === `/user/self/following/${id}`) {
			handleChangeTab(5)
		}
	}, [pathname])
	return (
		<div className={`${style.userFollowingContainer}`}>
			<section className={`${style.userFollowingContent}`}>
				{following.map((follow) => (
					<UserFollowerContent
						id={follow?.followingId}
						key={follow?.followingId}
						followerId={follow?.followerId}
						followingId={follow?.followingId}
						name={follow?.User?.name}
						avatar={follow?.User?.avatar}
						account={follow?.User?.account}
						content={follow?.User?.introduction}
						isFollow={follow?.isSelfUserFollow}
					/>
				))}
			</section>
		</div>
	)
}
