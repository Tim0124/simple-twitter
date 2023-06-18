import style from './OtherUserLike.module.scss'
import OtherUserLikeContent from './OtherUserLikeContent'
import { useLocation, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ChangeTabContext } from 'context/UserTabContext'
import tweetAPI from 'api/tweetAPI'

export default function UserLike() {
	const { pathname } = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const [likesTweet, setLikesTweet] = useState([])

	const userId = useParams().user_id

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
						id={like.TweetId}
						key={like.id}
						name={like.User?.name}
						account={like.User?.account}
						avatar={like.User?.avatar}
						content={like.Tweet?.description}
						time={like.Tweet?.relativeTimeFromNow}
						likesCount={like.Tweet?.likesCount}
						repliesCount={like.Tweet?.repliesCount}
						isSelfUserLike={like.isSelfUserLike}
						tweetUserId={like.User?.id}
					/>
				))}
			</section>
		</div>
	)
}
