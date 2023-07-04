import style from './OtherUserFollower.module.scss'
import UserFollowerContent from './OtherUserFollowContent'
import { useContext, useEffect, useState } from 'react'
import followingAPI from 'api/followingAPI'
import { useLocation } from 'react-router-dom'
import { ChangeTabContext } from 'context/UserTabContext'
import { OtherUserContext } from 'context/OtherUserContext'
import { checkPermission } from 'api/auth'
import { useNavigate } from 'react-router-dom'
import { Toast } from 'heplers/helpers'
import UserFollowSkeleton from 'components/skeleton/UserFollowSkeleton'

export default function UserFollower() {
	const [followers, setFollowers] = useState([])
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const OtherUserId = useContext(OtherUserContext)
	const id = OtherUserId
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		followingAPI
			.getFollowers(id)
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(response.message)
				}
				const { data } = response
				setFollowers(data)
				setIsLoading(false)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	useEffect(() => {
		if (pathname === `/user/other/follower/${id}`) {
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
			{/* <div className={`${style.userInfoHeaderContainer}`}>
				<UserInfoHeader
					name={data[0].name}
					tweet={data[0].tweet}
					page='/user/self'
				/>
			</div>
			<div className={`${style.userInfoContainer}`}>
				<UserInfo />
			</div> */}
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
							key={follower.id}
							followerId={follower.followerId}
							followingId={follower.followingId}
							name={follower.User.name}
							avatar={follower.User.avatar}
							account={follower.User.account}
							isFollow={follower.isSelfUserFollow}
							content={follower.User.introduction}
						/>
					))
				)}
			</section>
		</div>
	)
}
