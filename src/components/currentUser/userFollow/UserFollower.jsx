import style from './UserFollower.module.scss'
import UserFollowerContent from './UserFollowContent'
import { useContext, useEffect, useState } from 'react'
import followingAPI from 'api/followingAPI'
import { useLocation, useNavigate } from 'react-router-dom'
import { ChangeTabContext } from 'context/UserTabContext'
import { GetRenderContext, SetRenderContext } from 'context/FollowContext'
import { checkPermission } from 'api/auth'
import { Toast } from 'heplers/helpers'
import UserFollowSkeleton from 'components/skeleton/UserFollowSkeleton'

export default function UserFollower() {
	const [followers, setFollowers] = useState([])
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const id = localStorage.getItem('userId')
	const setRender = useContext(SetRenderContext)
	const render = useContext(GetRenderContext)
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		// if (render === 'true' || render === 'init')
		followingAPI
			.getFollowers(id)
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(response.message)
				}
				const { data } = response
				setFollowers(data)
				setRender('false')
				setIsLoading(false)
			})
			.catch((error) => {
				setRender('false')
				console.error('[User follow: ]', error)
			})
	}, [render])

	// useEffect(() => {
	// 	setRender('init')
	// }, [])

	useEffect(() => {
		if (pathname === `/user/self/follower/${id}`) {
			handleChangeTab(4)
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
		<div className={`${style.userFollowerContainer}`}>
			<section className={`${style.userFollowerContent}`}>
				{isLoading ? (
					<div>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
							<UserFollowSkeleton key={index} />
						))}
					</div>
				) : (
					followers.map((follower) => (
						<UserFollowerContent
							id={follower.followerId}
							key={follower.id}
							followerId={follower.followerId}
							followingId={follower.followingId}
							name={follower.User.name}
							avatar={follower.User.avatar}
							account={follower.User.account}
							isSelfUserFollow={follower.isSelfUserFollow}
							content={follower.User.introduction}
						/>
					))
				)}
			</section>
		</div>
	)
}
