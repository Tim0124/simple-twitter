import userAPI from 'api/userAPI'
import { useEffect, useState } from 'react'
import AdminTweetsItem from 'components/admin/AdminTweetsItem'
import style from './AdminTweets.module.scss'
import tweetAPI from 'api/tweetAPI'
import { ToastAlert, Toast } from 'heplers/helpers'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function AdminTweets() {
	const [tweets, setTweets] = useState([])
	const [isDelete, setIsDelete] = useState(false)
	const navigate = useNavigate()

	const handleDeleteClick = async (id) => {
		try {
			await ToastAlert.fire({
				title: '你確定要刪除推文？',
				text: '你將無法恢復！',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Sure',
			}).then((result) => {
				if (result.isConfirmed) {
					Swal.fire('刪除成功!', '推文已刪除', 'success')
					tweetAPI.deleteTweet(id).then((response) => {
						const { data } = response.data
						console.log(data.deletedTweet.id)
						const deleteId = data.deletedTweet.id
						if (response.status !== 200) {
							throw new Error(data.message)
						}
						setTweets((prevTweet) => {
							return prevTweet.filter((tweet) => {
								if (tweet.id === deleteId) {
									console.log(deleteId)
									return tweet.id !== deleteId
								}
							})
						})
						setIsDelete(true)
					})
				}
			})
		} catch (error) {
			console.error(error)
			Toast.fire({
				icon: 'error',
				title: '無法刪除推文，請稍後再試！',
			})
		}
	}

	//
	useEffect(() => {
		userAPI.getAdminTweets().then((response) => {
			const { data } = response.data
			setTweets(data.tweetsData)
			if (isDelete) {
				setIsDelete(false)
				navigate('/admin/tweets')
			}
			if (response.status !== 200) {
				throw new Error(data.message)
				Toast.fire({
					icon: 'error',
					title: '重新登入！',
				})
				navigate('/admin')
			}
		})
	}, [isDelete])

	return (
		<div className={`${style.adminTweetsWrapper}`}>
			<div className={`${style.adminTweetsContainer}`}>
				<div className={`${style.adminTweetsHeader}`}>推文清單</div>
				<div className={`${style.adminTweetsItem}`}>
					{tweets.map((tweet) => (
						<AdminTweetsItem
							key={tweet.id}
							id={tweet.id}
							avatar={tweet.User.avatar}
							name={tweet.User.name}
							description={tweet.description}
							account={tweet.User.account}
							time={tweet.relativeTimeFromNow}
							onClick={handleDeleteClick}
						/>
					))}
				</div>
			</div>
		</div>
	)
}