import UserNavbar from './UserNavbar'
import style from './OtherUserReplyList.module.scss'
import UserReplyContent from './OtherUserReplyContent'
import UserTab from 'UIcomponents/tabs/UserTab'
import UserInfo from 'UIcomponents/layouts/UserInfo'
import UserInfoHeader from 'UIcomponents/layouts/UserInfoHeader'
import { useLocation, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ChangeTabContext } from 'context/UserTabContext'
import tweetAPI from 'api/tweetAPI'
import { OtherUserContext } from 'context/OtherUserContext'

export default function UserReplyList() {
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const [replies, setReplies] = useState([])
	const userId = useParams().user_id

	useEffect(() => {
		tweetAPI.getUserReplies(userId).then((response) => {
			const { data } = response
			setReplies(data)
		})
	}, [])

	useEffect(() => {
		if (pathname === `/user/other/reply/${userId}`) {
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
						key={reply?.id}
						comment={reply?.comment}
						replyAccount={reply?.tweetUser.account}
						time={reply?.relativeTimeFromNow}
						name={reply?.User?.name}
						avatar={reply?.User?.avatar}
						account={reply?.User?.account}
					/>
				))}
			</section>
		</div>
	)
}
