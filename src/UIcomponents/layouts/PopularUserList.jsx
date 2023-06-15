import PopularUser from './PopularUser'
import style from './PopularUserList.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import followingAPI from 'api/followingAPI'
import { useContext, useEffect, useState } from 'react'
import { GetOtherUserIdContext } from 'context/OtherUserContext'
import { GetRenderContext, SetRenderContext } from 'context/FollowContext'
import { useLocation } from 'react-router-dom'

export default function PopularUserList() {
	const [followers, setFollowers] = useState([])
	const handleOtherUser = useContext(GetOtherUserIdContext)
	const render = useContext(GetRenderContext)
	const setRender = useContext(SetRenderContext)
	const { pathname } = useLocation()
	console.log(followers)
	useEffect(() => {
		;(async () => {
			if (render === 'true') {
				try {
					const response = await followingAPI.getTopFollower()
					const followerData = response.data
					setFollowers(followerData)
					setRender('false')
				} catch (error) {
					console.log('Failed to follower:', error)
					setRender('false')
				}
			}
		})()
	}, [render])

	useEffect(() => {
		setRender('true')
	}, [])

	return (
		<div
			className={`${style.popularListContainer}`}
			style={{ display: pathname === '/setting' ? 'none' : 'flex' }}
		>
			<h4 className={`${style.popularUserListHeader}`}>推薦跟隨</h4>
			<div className={`${style.popularUserList}`}>
				{followers.map((follower) => (
					<PopularUser
						onOtherUserId={handleOtherUser}
						id={follower.id}
						key={follower.id}
						name={follower.account}
						account={follower.account}
						avatar={follower.avatar}
						isUserFollowed={follower.isUserFollowed}
						// followingId={follower.followingId}
					/>
				))}
			</div>
		</div>
	)
}
