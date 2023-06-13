import UserNavbar from './UserNavbar'
import style from './UserReplyList.module.scss'
import UserReplyContent from './UserReplyContent'
import UserTab from 'UIcomponents/tabs/UserTab'
import UserInfo from 'UIcomponents/layouts/UserInfo'
import UserInfoHeader from 'UIcomponents/layouts/UserInfoHeader'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ChangeTabContext } from 'context/UserTabContext'
import tweetAPI from 'api/tweetAPI'



export default function UserReplyList() {
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const [replies, setReplies] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		const currentUserId = localStorage.getItem('userId')
		tweetAPI.getCurrentUserReplies(currentUserId).then((response) => {
			const { data } = response
			setReplies(data)
		})
	}, [pathname])

	useEffect(() => {
		if (pathname === '/user/self/reply') {
			handleChangeTab(2)
		}
	}, [pathname])

	return (
		<div className={`${style.userReplyContainer}`}>
			{/* <div className={`${style.userInfoHeaderContainer}`}>
				<UserInfoHeader
					name={data[0].name}
					tweet={data[0].tweet}
					page='/home'
				/>
			</div>
			<UserInfo /> */}
			{/* <UserTab /> */}
			<section className={`${style.userReplyContent}`}>
				{replies.map((reply) => (
					<UserReplyContent
						key={reply.id}
						comment={reply.comment}
						replyAccount={reply.tweetUser.account}
						time={reply.relativeTimeFromNow}
						name={reply.User.name}
						avatar={reply.User.avatar}
						account={reply.User.account}
					/>
				))}
			</section>
		</div>
	)
}
