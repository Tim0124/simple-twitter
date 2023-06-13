import { Outlet, useLocation } from 'react-router-dom'
import PopularUserList from './PopularUserList'
import SideItem from './SideItem'
import Sidebar from './Sidebar'
import style from './UserLayout.module.scss'
import ModalPostTweet from '../modal/ModalPostTweet'
import ModalUserInfo from '../../components/modal/ModalUserInfo'
import { useContext, useEffect, useState } from 'react'
import ModalReplyTweet from 'UIcomponents/modal/ModalReplyTweet'
import {
	ModalHiddenContext,
	ReplyTweetModalContext,
	TweetModalContext,
} from 'context/ModalContext'
import UserInfoHeader from './UserInfoHeader'
import tweetAPI from 'api/tweetAPI'
import UserInfo from './UserInfo'
import UserTab from 'UIcomponents/tabs/UserTab'
import FollowTab from 'UIcomponents/tabs/FollowTab'

export default function Layout() {
	const useTweetModal = useContext(TweetModalContext)
	const useReplyModal = useContext(ReplyTweetModalContext)
	const [userInfo, setUserInfo] = useState([])
  const {pathname} = useLocation()


	useEffect(() => {
		const currentUserId = localStorage.getItem('userId')
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
			/>
      {pathname.includes('/user/self/following') || pathname.includes('/user/self/follower') ? <FollowTab /> : <UserTab />}
			
      
			<div className={`${style.UserLayoutMainContainer}`}>
				<Outlet />
			</div>
			{useTweetModal && <ModalPostTweet />}
		</div>
	)
}
