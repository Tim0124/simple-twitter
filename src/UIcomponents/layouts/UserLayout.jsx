import { Outlet, useLocation } from 'react-router-dom'
import PopularUserList from './PopularUserList'
import SideItem from './SideItem'
import Sidebar from './Sidebar'
import style from './UserLayout.module.scss'
import ModalPostTweet from '../modal/ModalPostTweet'
import ModalUserInfo from '../modal/ModalUserInfo'
import { useContext, useEffect, useState } from 'react'
import ModalReplyTweet from 'UIcomponents/modal/ModalReplyTweet'
import {
  EditModalContext,
	ModalHiddenContext,
	ReplyTweetModalContext,
	TweetModalContext,
} from 'context/ModalContext'
import UserInfoHeader from './UserInfoHeader'
import tweetAPI from 'api/tweetAPI'
import UserInfo from './UserInfo'
import UserTab from 'UIcomponents/tabs/UserTab'
import FollowTab from 'UIcomponents/tabs/FollowTab'
import { OtherUserContext } from 'context/OtherUserContext'

export default function Layout() {
	const useTweetModal = useContext(TweetModalContext)
	const useReplyModal = useContext(ReplyTweetModalContext)
	const [userInfo, setUserInfo] = useState([])
	const { pathname } = useLocation()
	const currentUserId = Number(localStorage.getItem('userId'))
	const isFollowPage =
		pathname.includes(`/user/self/following/${currentUserId}`) ||
		pathname.includes(`/user/self/follower/${currentUserId}`)
  const ShowEditModal = useContext(EditModalContext)


	useEffect(() => {
		tweetAPI.getCurrentUserTweet(currentUserId).then((response) => {
			const { data } = response
			setUserInfo(data)
		})
	}, [])

	return (
		<div className={`${style.userTweetsContainer}`}>
			<div className={`${style.userInfoHeaderContainer}`}>
				<UserInfoHeader
					name={userInfo.name}
					tweet={userInfo.tweetsCount}
					page='/home'
				/>
			</div>
			<UserInfo
				key={userInfo.id}
				name={userInfo.name}
				account={userInfo.account}
				avatar={userInfo.avatar}
				backgroundImage={userInfo.backgroundImage}
				introduction={userInfo.introduction}
				follower={userInfo.followersCount}
				following={userInfo.followingsCount}
				onHideUserInfo={isFollowPage ? 'hideUserInfo' : ''}
				userId={currentUserId}
			/>
			{pathname.includes(`/user/self/following/${currentUserId}`) ||
			pathname.includes(`/user/self/follower/${currentUserId}`) ? (
				<FollowTab id={currentUserId} />
			) : (
				<UserTab id={currentUserId} />
			)}

			<div className={`${style.UserLayoutMainContainer}`}>
				<Outlet />
			</div>
			{useTweetModal && <ModalPostTweet />}
      {ShowEditModal && <ModalUserInfo />}
		</div>
	)
}
