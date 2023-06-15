import style from './UserFollowing.module.scss'
import FollowTab from 'UIcomponents/tabs/FollowTab'
import UserFollowerContent from './UserFollowContent'
import UserInfo from 'UIcomponents/layouts/UserInfo'
import UserInfoHeader from 'UIcomponents/layouts/UserInfoHeader'
import { useContext, useEffect, useState } from 'react'
import tweetAPI from 'api/tweetAPI'
import followingAPI from 'api/followingAPI'
import { useLocation, useNavigate } from 'react-router-dom'
import { ChangeTabContext } from 'context/UserTabContext'
import { GetRenderContext, SetRenderContext } from 'context/FollowContext'

export default function UserFollowing() {
	const [following, setFollowing] = useState([])
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const id = localStorage.getItem('userId')
	const setRender = useContext(SetRenderContext)
	const render = useContext(GetRenderContext)
	console.log(render)
	

	useEffect(() => {
		if(render === 'true' || render === 'init') {
			followingAPI.getFollowings(id).then((response) => {
			const { data } = response
			setFollowing(data)
			setRender("false")
			}).catch((error) => {
				console.error(error)
				setRender("false")
			})
		}
	}, [render])

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
