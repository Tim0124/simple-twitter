import style from './UserFollowing.module.scss'
import UserFollowerContent from './UserFollowContent'
import { useContext, useEffect, useState } from 'react'
import followingAPI from 'api/followingAPI'
import { useLocation, useNavigate } from 'react-router-dom'
import { ChangeTabContext } from 'context/UserTabContext'
import userAPI from 'api/userAPI'
import { checkPermission } from 'api/auth'
import { Toast } from 'heplers/helpers'
import UserFollowSkeleton from 'components/skeleton/UserFollowSkeleton'

export default function UserFollowing() {
	const [following, setFollowing] = useState([])
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const id = localStorage.getItem('userId')
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		userAPI
			.getCurrentUser()
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(response.message)
				}
				const { data } = response
				followingAPI
					.getFollowings(id)
					.then((response) => {
						if (response.status !== 200) {
							throw new Error(response.message)
						}
						const { data } = response
						setFollowing(data)
						setIsLoading(false)
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

	useEffect(() => {
		const checkTokenIsValid = async () => {
			try {
				const authToken = localStorage.getItem('authToken')
				if (!authToken) {
					navigate('/login')
				}
				const result = await checkPermission(authToken)
				if (!result) {
					Toast.fire({
						title: '帳號不存在',
						timer: 2000,
						icon: 'error',
						showConfirmButton: false,
					})
					navigate('/login')
				}
			} catch (error) {
				console.error(error)
			}
		}

		checkTokenIsValid()
	}, [])

	return (
		<div className={`${style.userFollowingContainer}`}>
			<section className={`${style.userFollowingContent}`}>
				{isLoading ? (
					<div>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
							<UserFollowSkeleton key={index} />
						))}
					</div>
				) : (
					following.map((follow) => (
						<UserFollowerContent
							id={follow?.followingId}
							key={follow?.followingId}
							followerId={follow?.followerId}
							followingId={follow?.followingId}
							name={follow?.User?.name}
							avatar={follow?.User?.avatar}
							account={follow?.User?.account}
							content={follow?.User?.introduction}
							isSelfUserFollow={follow?.isSelfUserFollow}
						/>
					))
				)}
			</section>
		</div>
	)
}
