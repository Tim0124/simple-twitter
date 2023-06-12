import UserNavbar from './UserNavbar'
import style from './UserLike.module.scss'
import UserLikeContent from './UserLikeContent'
import FollowTab from 'UIcomponents/tabs/FollowTab'
import UserTab from 'UIcomponents/tabs/UserTab'
import UserInfo from 'UIcomponents/layouts/UserInfo'
import UserInfoHeader from 'UIcomponents/layouts/UserInfoHeader'
import { useLocation } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ChangeTabContext } from 'context/UserTabContext'
import tweetAPI from 'api/tweetAPI'

const data = [
	{
		id: 1,
		avatar: 'https://picsum.photos/300/300?text=2',
		background: 'https://picsum.photos/300/300?text=1',
		name: 'John Doe',
		account: '@heyjone',
		tweet: 25,
		following: 34,
		follower: 59,
		content:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
	},
]

const dummyData = [
	{
		id: '1',
		name: 'Pizza Hut1',
		avatar: 'https://picsum.photos/300/300?text=1',
		account: `@Pizza Hut1`,
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: 3,
		quantity: 20,
		likeQuantity: 12,
	},
	{
		id: '2',
		name: 'Pizza Hut1',
		avatar: 'https://picsum.photos/300/300?text=2',
		account: `@Pizza Hut1`,
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: 1,
		quantity: 20,
		likeQuantity: 12,
	},
	{
		id: '3',
		name: 'Pizza Hut1',
		avatar: 'https://picsum.photos/300/300?text=3',
		account: `@Pizza Hut1`,
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: 2,
		quantity: 20,
		likeQuantity: 12,
	},
	{
		id: '4',
		name: 'Pizza Hut1',
		avatar: 'https://picsum.photos/300/300?text=4',
		account: `@Pizza Hut1`,
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: 2,
		quantity: 20,
		likeQuantity: 12,
	},
	{
		id: '5',
		name: 'Pizza Hut1',
		avatar: 'https://picsum.photos/300/300?text=5',
		account: `@Pizza Hut1`,
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: 2,
		quantity: 20,
		likeQuantity: 12,
	},
	{
		id: '6',
		name: 'Pizza Hut1',
		avatar: 'https://picsum.photos/300/300?text=6',
		account: `@Pizza Hut1`,
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: 2,
		quantity: 20,
		likeQuantity: 12,
	},
	{
		id: '7',
		name: 'Pizza Hut1',
		avatar: 'https://picsum.photos/300/300?text=7',
		account: `@Pizza Hut1`,
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: 2,
		quantity: 20,
		likeQuantity: 12,
	},
	{
		id: '8',
		name: 'Pizza Hut1',
		avatar: 'https://picsum.photos/300/300?text=8',
		account: `@Pizza Hut1`,
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: 2,
		quantity: 20,
		likeQuantity: 12,
	},
	{
		id: '9',
		name: 'Pizza Hut1',
		avatar: 'https://picsum.photos/300/300?text=9',
		account: `@Pizza Hut1`,
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: 2,
		quantity: 20,
		likeQuantity: 12,
	},
	{
		id: '10',
		name: 'Pizza Hut1',
		avatar: 'https://picsum.photos/300/300?text=11',
		account: `@Pizza Hut1`,
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: 2,
		quantity: 20,
		likeQuantity: 12,
	},
]

export default function UserLike() {
	const {pathname} = useLocation()
	const handleChangeTab = useContext(ChangeTabContext)
	const [likesTweet, setLikesTweet] = useState([])
	console.log(likesTweet)

	useEffect(() => {
		const currentUserId = localStorage.getItem('userId')
		tweetAPI.getCurrentUserLikes(currentUserId).then((response) => {
			const {data} = response
			setLikesTweet(data)
		})
	},[])

	useEffect(() => {
		if(pathname === '/user/self/like') {
			handleChangeTab(3)
		}
	},[])

	return (
		<div className={`${style.userTweetsContainer}`}>
			{/* <div className={`${style.userInfoHeaderContainer}`}>
				<UserInfoHeader
					name={data[0].name}
					tweet={data[0].tweet}
					page='/home'
				/>
			</div>
			<UserInfo /> */}
			{/* <UserTab /> */}
			<section className={`${style.UserTweetsContent}`}>
				{likesTweet.map((like) => (
					<UserLikeContent 
						key={like.id}
						name={like.User.name}
						account={like.User.account}
						avatar={like.User.avatar}
						content={like.Tweet.description}
						time={like.Tweet.relativeTimeFromNow}
						likesCount={like.likesCount}
						repliesCount={like.repliesCount}
					/>
				))}
			</section>
		</div>
	)
}
