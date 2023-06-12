import UserNavbar from './UserNavbar'
import style from './UserTweets.module.scss'
import UserTweetsContent from './UserTweetsContent'
import UserTab from 'UIcomponents/tabs/UserTab'
import UserInfo from 'UIcomponents/layouts/UserInfo'
import UserInfoHeader from 'UIcomponents/layouts/UserInfoHeader'
import { useLocation, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ChangeStepContext } from 'context/SideBarContext'
import tweetAPI from 'api/tweetAPI'
import { ChangeTabContext } from 'context/UserTabContext'

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

export default function UserTweets() {
	const { pathname } = useLocation()
	const tweetId = useParams().tweet_id
	console.log(pathname)
	const handleChangeStep = useContext(ChangeStepContext)
	const [userInfo, setUserInfo] = useState([])
	const [allTweets, setAllTweets] = useState([])
	const handleChangeTab = useContext(ChangeTabContext)



	useEffect(() => {
		const currentUserId = localStorage.getItem('userId')
		tweetAPI.getCurrentUserTweet(currentUserId).then((response) => {
			const {data} = response
			setUserInfo(data)
		})

		tweetAPI.getCurrentUserAllTweet(currentUserId).then((response) => {
			const {data} = response
			setAllTweets(data)
		})

	},[])

	useEffect(() => {
		if (pathname === '/user/self') {
			handleChangeStep(2)
			handleChangeTab(1)
		}
	}, [])
	return (
		<div className={`${style.userTweetsContainer}`}>
			{/* <div className={`${style.userInfoHeaderContainer}`}>
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
			/> */}
			{/* <UserTab /> */}
			<section className={`${style.UserTweetsContent}`}>
				{allTweets.map((tweet) => (
					<UserTweetsContent 
						key={tweet.id}
						description={tweet.description}
						relativeTime={tweet.relativeTimeFromNow}
						repliesCount={tweet.repliesCount}
						likeCount={tweet.likesCount}
						name={tweet.User.name}
						account={tweet.User.account}
						avatar={tweet.User.avatar}
					/>
				))}
			</section>
		</div>
	)
}
