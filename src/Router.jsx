import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/register/RegisterForm'
import LoginForm from 'components/login/LoginForm'
import AdminForm from './components/admin/AdminForm'
import Setting from './components/setting/SettingForm'
import PopularUserList from './UIcomponents/layouts/PopularUserList'
import PopularUser from 'UIcomponents/layouts/PopularUser'
import MainTweets from 'components/main/MainTweets'
import Layout from 'UIcomponents/layouts/Layout'
import AdminTweetsCardList from 'components/admin/AdminTweetsCardsList'
import AdminTweetsList from 'components/admin/AdminTweetsList'
import AdminLayout from 'UIcomponents/layouts/AdminLayout'
import UserInfo from 'UIcomponents/layouts/UserInfo'
import ReplyListLayout from 'UIcomponents/layouts/ReplyListLayout'
import ReplyList from 'components/replyList/ReplyList'
import UserTweets from 'components/currentUser/UserTweets'
import UserReplyContent from 'components/currentUser/UserReplyContent'
import UserReplyList from 'components/currentUser/UserReplyList'
import UserLike from 'components/currentUser/UserLike'
import UserFollower from 'components/currentUser/userFollow/UserFollower'
import UserFollowing from 'components/currentUser/userFollow/UserFollowing'
import SettingFrom from 'components/setting/SettingForm'
import AdminLogin from 'pages/admin/AdminLogin'
import AdminTweets from 'pages/admin/AdminTweets'
import AdminUsers from 'pages/admin/AdminUsers'
import UserLayout from 'UIcomponents/layouts/UserLayout'
import OtherUserTweet from 'components/otherUser/OtherUserTweets'
import OtherUserLike from 'components/otherUser/OtherUserLike'
import OtherUserReply from 'components/otherUser/OtherUserReplyList'
import OtherUserLayout from 'UIcomponents/layouts/OtherUserLayout'
import OtherUserFollower from 'components/otherUser/otherFollow/OtherUserFollower'
import OtherUserFollowing from 'components/otherUser/otherFollow/OtherUserFollowing'

const basename = process.env.PUBLIC_URL

export default function Router() {
	return (
		<>
			<BrowserRouter basename={basename}>
				<Routes>
					<Route path='/login' element={<LoginForm />} />
					<Route path='/register' element={<Register />} />
					<Route path='/admin' element={<AdminLogin />} />
					<Route element={<AdminLayout />}>
						<Route path='/admin/tweets' element={<AdminTweets />} />
						<Route path='/admin/users' element={<AdminUsers />} />
					</Route>
					<Route element={<Layout />}>
						<Route path='/home' element={<MainTweets />} />
						<Route path='/reply/:tweet_id' element={<ReplyList />} />
						<Route element={<UserLayout />}>
							<Route path='/user/:user_id' element={<UserTweets />} />
							<Route
								path='/user/self/reply/:user_id'
								element={<UserReplyList />}
							/>
							<Route path='/user/self/like/:user_id' element={<UserLike />} />
							<Route
								path='/user/self/follower/:user_id'
								element={<UserFollower />}
							/>
							<Route
								path='/user/self/following/:user_id'
								element={<UserFollowing />}
							/>
						</Route>
						<Route element={<OtherUserLayout />}>
							<Route path='/user/other/:user_id' element={<OtherUserTweet />} />
							<Route
								path='/user/other/reply/:user_id'
								element={<OtherUserReply />}
							/>
							<Route
								path='/user/other/like/:user_id'
								element={<OtherUserLike />}
							/>
							<Route
								path='/user/other/follower/:user_id'
								element={<OtherUserFollower />}
							/>
							<Route
								path='/user/other/following/:user_id'
								element={<OtherUserFollowing />}
							/>
						</Route>
						<Route path='/setting' element={<SettingFrom />} />
					</Route>
					<Route path='/' element={<LoginForm />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
