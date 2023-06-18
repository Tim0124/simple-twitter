import style from './UserFollower.module.scss'
import FollowTab from 'UIcomponents/tabs/FollowTab'
import UserFollowerContent from './UserFollowContent'
import UserInfo from 'UIcomponents/layouts/UserInfo'
import UserInfoHeader from 'UIcomponents/layouts/UserInfoHeader'
import { useContext, useEffect, useState } from 'react'
import followingAPI from 'api/followingAPI'
import { useLocation, useNavigate } from 'react-router-dom'
import { ChangeTabContext } from 'context/UserTabContext'
import { GetRenderContext, SetRenderContext } from 'context/FollowContext'
import { checkPermission } from 'api/auth'

export default function UserFollower() {
	const [followers, setFollowers] = useState([])
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const id = localStorage.getItem('userId')
	const setRender = useContext(SetRenderContext)
	const render = useContext(GetRenderContext)
	const navigate = useNavigate()

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
				{followers.map((follower) => (
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
				))}
			</section>
		</div>
	)
}
