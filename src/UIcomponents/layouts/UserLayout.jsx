import { Outlet, useLocation } from 'react-router-dom'
import style from './UserLayout.module.scss'
import ModalPostTweet from '../modal/ModalPostTweet'
import ModalUserInfo from '../modal/ModalUserInfo'
import { useContext, useEffect, useState } from 'react'
import { ShowEditModalContext, TweetModalContext } from 'context/ModalContext'
import UserInfoHeader from './UserInfoHeader'
import UserInfo from './UserInfo'
import UserTab from 'UIcomponents/tabs/UserTab'
import FollowTab from 'UIcomponents/tabs/FollowTab'
import userAPI from 'api/userAPI'
import UserInfoSkeleton from 'components/skeleton/UserInfoSkeleton'
import HeaderSkeleton from 'components/skeleton/HeaderSkeleton'

export default function Layout() {
	const useTweetModal = useContext(TweetModalContext)
	const [userInfo, setUserInfo] = useState([])
	const { pathname } = useLocation()
	const ShowEditModal = useContext(ShowEditModalContext)
	const [userId, setUserId] = useState('')
	const isFollowPage =
		pathname.includes(`/user/self/following/${userId}`) ||
		pathname.includes(`/user/self/follower/${userId}`)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		userAPI
			.getCurrentUser()
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(response.message)
				}
				const { data } = response
				setUserId(data.id)
				setUserInfo(data)
				setIsLoading(false)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	return (
		<div className={`${style.userTweetsContainer}`}>
			{isLoading ? (
				<HeaderSkeleton/>
			) : (
				<div className={`${style.userInfoHeaderContainer}`}>
				<UserInfoHeader name={userInfo?.name} tweet={userInfo?.tweetsCount} />
			</div>
			)}
			{isLoading ? (
				<UserInfoSkeleton/>
			) : (
				<UserInfo
				key={userInfo?.id}
				name={userInfo?.name}
				account={userInfo?.account}
				avatar={userInfo?.avatar}
				backgroundImage={userInfo?.backgroundImage}
				introduction={userInfo?.introduction}
				follower={userInfo?.followersCount}
				following={userInfo?.followingsCount}
				onHideUserInfo={isFollowPage ? 'hideUserInfo' : ''}
				userId={userId}
			/>
			)}
			{pathname.includes(`/user/self/following/${userId}`) ||
			pathname.includes(`/user/self/follower/${userId}`) ? (
				<FollowTab id={userId} />
			) : (
				<UserTab id={userId} />
			)}

			<div className={`${style.UserLayoutMainContainer}`}>
				<Outlet />
			</div>
			{useTweetModal && <ModalPostTweet />}
			{ShowEditModal && <ModalUserInfo />}
		</div>
	)
}
