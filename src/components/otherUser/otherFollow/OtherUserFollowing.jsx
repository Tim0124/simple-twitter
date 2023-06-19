import style from './OtherUserFollowing.module.scss'
import OtherUserFollowerContent from './OtherUserFollowContent'
import { useContext, useEffect, useState } from 'react'
import followingAPI from 'api/followingAPI'
import { useLocation } from 'react-router-dom'
import { ChangeTabContext } from 'context/UserTabContext'
import { OtherUserContext } from 'context/OtherUserContext'
import { checkPermission } from 'api/auth'
import { useNavigate } from 'react-router-dom'
import { Toast } from 'heplers/helpers'

export default function UserFollowing() {
	const [following, setFollowing] = useState([])
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const OtherUserId = useContext(OtherUserContext)
	const id = OtherUserId
	const navigate = useNavigate()

	useEffect(() => {
		followingAPI
			.getFollowings(id)
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(response.message)
				}
				const { data } = response
				setFollowing(data)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	useEffect(() => {
		if (pathname === `/user/other/following/${id}`) {
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
			{/* <div className={`${style.userInfoHeaderContainer}`}>
				<UserInfoHeader name={data[0].name} tweet={data[0].tweet} />
			</div>
			<div className={`${style.userInfoContainer}`}>
				<UserInfo />
			</div> */}

			<section className={`${style.userFollowingContent}`}>
				{following.map((follow) => (
					<OtherUserFollowerContent
						key={follow.followingId}
						followerId={follow.followerId}
						followingId={follow.followingId}
						name={follow.User.name}
						avatar={follow.User.avatar}
						account={follow.User.account}
						content={follow.User.introduction}
						isFollow={follow.isSelfUserFollow}
					/>
				))}
			</section>
		</div>
	)
}
