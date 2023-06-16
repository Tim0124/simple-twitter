import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import style from './OtherUserLayout.module.scss'
import ModalPostTweet from '../modal/ModalPostTweet'
import { useContext, useEffect, useState } from 'react'
import { ReplyTweetModalContext, TweetModalContext } from 'context/ModalContext'
import UserInfoHeader from './UserInfoHeader'
import tweetAPI from 'api/tweetAPI'
import OtherUserInfo from './OtherUserInfo'
import OtherUserTab from 'UIcomponents/tabs/OtherUserTab'
import OtherFollowTab from 'UIcomponents/tabs/OtherFollowTab'
import userAPI from 'api/userAPI'
import { GetRenderContext, SetRenderContext } from 'context/FollowContext'

export default function Layout() {
	const useTweetModal = useContext(TweetModalContext)
	const useReplyModal = useContext(ReplyTweetModalContext)
	const [userInfo, setUserInfo] = useState([])
	const { pathname } = useLocation()
	const userId = Number(useParams().user_id)
	const isFollowPage =
		pathname.includes(`/user/other/following/${userId}`) ||
		pathname.includes(`/user/other/follower/${userId}`)
	const localId = localStorage.getItem('userId')
	const navigate = useNavigate()
	// const render = useContext(GetRenderContext)
	// const setRender = useContext(SetRenderContext)

	useEffect(() => {
		if (userId === localId) {
			navigate('/user/self')
		} else {
			userAPI.getUser(userId).then((response) => {
				const { data } = response
				setUserInfo(data)
			})
		}
	}, [userId])

	// useEffect(() => {
	// 	setRender('true')
	// },[])

	return (
		<div className={`${style.userTweetsContainer}`}>
			<div className={`${style.userInfoHeaderContainer}`}>
				<UserInfoHeader
					name={userInfo?.name}
					tweet={userInfo?.tweetsCount}
					page='/home'
				/>
			</div>
			<OtherUserInfo
				key={userInfo?.id}
				name={userInfo?.name}
				account={userInfo?.account}
				avatar={userInfo?.avatar}
				backgroundImage={userInfo?.backgroundImage}
				introduction={userInfo?.introduction}
				follower={userInfo?.followersCount}
				following={userInfo?.followingsCount}
				onHideUserInfo={isFollowPage ? 'hideUserInfo' : ''}
				userId={userInfo?.id}
				isFollow={userInfo?.isSelfUserFollow}
			/>
			{pathname.includes(`/user/other/following/${userId}`) ||
			pathname.includes(`/user/other/follower/${userId}`) ? (
				<OtherFollowTab id={userId} />
			) : (
				<OtherUserTab id={userId} />
			)}

			<div className={`${style.UserLayoutMainContainer}`}>
				<Outlet />
			</div>
			{useTweetModal && <ModalPostTweet />}
		</div>
	)
}
