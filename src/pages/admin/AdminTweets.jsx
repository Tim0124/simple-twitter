import userAPI from 'api/userAPI'
import { useContext, useEffect, useState } from 'react'
import AdminTweetsItem from 'components/admin/AdminTweetsItem'
import style from './AdminTweets.module.scss'
import tweetAPI from 'api/tweetAPI'
import { ToastAlert, Toast } from 'heplers/helpers'
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom'
import { ChangeStepContext } from 'context/SideBarContext'

export default function AdminTweets() {
	const [tweets, setTweets] = useState([])
	const [isDelete, setIsDelete] = useState('init')
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const handleChangeStep = useContext(ChangeStepContext)

	const handleDeleteClick = async (tweetId) => {
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
					tweetAPI.deleteTweet(tweetId).then((response) => {
						const { data } = response.data
						if (response.status !== 200) {
							throw new Error(data.message)
						}
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
		if (isDelete || isDelete === 'init') {
			userAPI
				.getAdminTweets()
				.then((response) => {
					const { data } = response.data
					if (response.status !== 200) {
						throw new Error(data.message)
					}
					setTweets(data.tweetsData)
					setIsDelete(false)
					navigate('/admin/tweets')
				})
				.catch(() => {
					Toast.fire({
						icon: 'error',
						title: '重新登入！',
					})
				})
		}
	}, [isDelete])

	useEffect(() => {
		if (pathname === '/admin/tweets') {
			handleChangeStep(1)
		}
	}, [pathname])

	return (
		<div className={`${style.adminTweetsWrapper}`}>
			<div className={`${style.adminTweetsContainer}`}>
				<div className={`${style.adminTweetsHeader}`}>推文清單</div>
				<div className={`${style.adminTweetsItem}`}>
					{tweets.map((tweet) => (
						<AdminTweetsItem
							key={tweet.id}
							tweetId={tweet.id}
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
