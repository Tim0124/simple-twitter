import UserNavbar from './UserNavbar'
import style from './OtherUserLike.module.scss'
import OtherUserLikeContent from './OtherUserLikeContent'
import FollowTab from 'UIcomponents/tabs/FollowTab'
import UserTab from 'UIcomponents/tabs/UserTab'
import UserInfo from 'UIcomponents/layouts/UserInfo'
import UserInfoHeader from 'UIcomponents/layouts/UserInfoHeader'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ChangeTabContext } from 'context/UserTabContext'
import tweetAPI from 'api/tweetAPI'
import { OtherUserContext } from 'context/OtherUserContext'

export default function UserLike() {
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const [likesTweet, setLikesTweet] = useState([])
	const navigate = useNavigate()
	const userId = useParams().user_id
	console.log(likesTweet)

	useEffect(() => {
		tweetAPI.getUserLikes(userId).then((response) => {
			const { data } = response
			setLikesTweet(data)
		})
	}, [])

	useEffect(() => {
		if (pathname === `/user/other/like/${userId}`) {
			handleChangeTab(3)
		}
	}, [pathname])

	return (
		<div className={`${style.userTweetsContainer}`}>
			<section className={`${style.UserTweetsContent}`}>
				{likesTweet.map((like) => (
					<OtherUserLikeContent
						id={like?.TweetId}
						key={like?.id}
						name={like?.User?.name}
						account={like?.User?.account}
						avatar={like?.User?.avatar}
						content={like?.Tweet?.description}
						time={like?.Tweet?.relativeTimeFromNow}
						likesCount={like?.Tweet?.likesCount}
						repliesCount={like?.Tweet?.repliesCount}
						isSelfUserLike={like?.isSelfUserLike}
						tweetUserId={like?.User?.id}
					/>
				))}
			</section>
		</div>
	)
}
