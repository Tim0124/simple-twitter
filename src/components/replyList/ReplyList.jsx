import ReplyListHeader from './ReplyListHeader'
import ReplyListTweet from './ReplyListTweet'
import style from './ReplyList.module.scss'
import { data } from 'UIcomponents/layouts/PopularUserList'
import ReplyListItem from './ReplyListItem'
import { useContext, useEffect, useState } from 'react'
import {
	ReplyTweetModalContext,
	ShowReplyModalContext,
} from 'context/ModalContext'
import ModalReplyTweet from 'UIcomponents/modal/ModalReplyTweet'
import { useParams } from 'react-router-dom'
import tweetAPI from 'api/tweetAPI'

const replyData = {
	id: '1',
	name: 'Pizza Hut1',
	avatar: 'https://picsum.photos/300/300?text=188',
	account: `@Pizza Hut1`,
	content:
		'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
	time: '10:05',
	quantity: 20,
	likeQuantity: 12,
	date: '2021年11月10日',
}

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

export default function ReplyList() {
	const [currentTweet, setCurrentTweet] = useState([])
	const [tweetReply, setTweetReply] = useState([])
	const useReplyModal = useContext(ReplyTweetModalContext)
	const tweetId = useParams().tweet_id
	console.log(currentTweet)
	console.log(tweetId)
	useEffect(() => {
		tweetAPI.getTweet(tweetId).then((response) => {
			const { data } = response
			setCurrentTweet(data)
		})
		tweetAPI.getReplyTweet(tweetId).then((response) => {
			const { data } = response
			console.log(data)
			setTweetReply(data)
		})
	}, [])

	return (
		<div className={`${style.replyContainer}`}>
			<ReplyListHeader />
			<ReplyListTweet
				avatar={currentTweet.User?.avatar}
				name={currentTweet.User?.name}
				account={currentTweet.User?.account}
				content={currentTweet?.description}
				quantity={currentTweet?.repliesCount}
				likeQuantity={currentTweet?.likesCount}
				time={currentTweet?.relativeTimeFromNow}
				date={currentTweet?.switchTime}
			/>
			<div className={`${style.replyListContent}`}>
				{tweetReply.map((data) => (
					<ReplyListItem
						key={data.id}
						id={data.id}
						account={data.User.account}
						comment={data.comment}
						time={data.relativeTimeFromNow}
						avatar={data.User.avatar}
						user={data.User.name}
					/>
				))}
			</div>
			{useReplyModal && <ModalReplyTweet />}
		</div>
	)
}
