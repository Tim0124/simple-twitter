import PopularUser from './PopularUser'
import style from './PopularUserList.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import followingAPI from 'api/followingAPI'
import { useContext, useEffect, useState } from 'react'
import { GetOtherUserIdContext } from 'context/OtherUserContext'

export default function PopularUserList() {
	const [followers, setFollowers] = useState([])
	const handleOtherUser = useContext(GetOtherUserIdContext)

	useEffect(() => {
		;(async () => {
			try {
				const responce = await followingAPI.getTopFollower()
				const followerData = responce.data
				setFollowers(followerData)
			} catch (error) {
				console.log('Failed to follower:', error)
			}
		})()
	}, [])

	return (
		<div className={`${style.popularListContainer}`}>
			<h4 className={`${style.popularUserListHeader}`}>推薦跟隨</h4>
			<div className={`${style.popularUserList}`}>
				{followers.map((follower) => (
					<PopularUser key={follower.id} {...follower} onOtherUserId={handleOtherUser}/>
				))}
			</div>
		</div>
	)
}
