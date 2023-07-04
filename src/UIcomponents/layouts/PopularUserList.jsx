import PopularUser from './PopularUser'
import style from './PopularUserList.module.scss'
import followingAPI from 'api/followingAPI'
import { useContext, useEffect, useState } from 'react'
import { GetOtherUserIdContext } from 'context/OtherUserContext'
import { GetRenderContext, SetRenderContext } from 'context/FollowContext'
import { useLocation } from 'react-router-dom'
import PopularSkeleton from 'components/skeleton/PopularSkeleton'

export default function PopularUserList() {
	const [followers, setFollowers] = useState([])
	const handleOtherUser = useContext(GetOtherUserIdContext)
	const render = useContext(GetRenderContext)
	const setRender = useContext(SetRenderContext)
	const { pathname } = useLocation()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		;(async () => {
			if (render === 'true') {
				try {
					const response = await followingAPI.getTopFollower()
					const followerData = response.data
					setFollowers(followerData)
					setIsLoading(false)
					setRender('false')
				} catch (error) {
					console.error('Failed to follower:', error)
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
				{isLoading ? (
					<div>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => <PopularSkeleton key={index}/>)}
					</div>
				) : (
					followers.map((follower) => (
					<PopularUser
						onOtherUserId={handleOtherUser}
						id={follower.id}
						key={follower.id}
						name={follower.name}
						account={follower.account}
						avatar={follower.avatar}
						isUserFollowed={follower.isUserFollowed}
					/>
				))
				)}
			</div>
		</div>
	)
}
