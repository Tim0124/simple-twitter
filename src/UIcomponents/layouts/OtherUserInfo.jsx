import style from './OtherUserInfo.module.scss'
import Button from 'UIcomponents/buttons/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import followingAPI from 'api/followingAPI'
import { ReactComponent as Message } from '../../assets/orangemsg.svg'
import { ReactComponent as WhiteNoti } from '../../assets/white_btn_notfi.svg'
import { ReactComponent as OragneNoti } from '../../assets/btn_notfi.svg'
import { GetRenderContext, SetRenderContext } from 'context/FollowContext'
import { checkPermission } from 'api/auth'
import { Toast } from 'heplers/helpers'

export default function UserInfo({
	id,
	name,
	account,
	avatar,
	backgroundImage,
	introduction,
	follower,
	following,
	onHideUserInfo,
	userId,
	isUserFollowed,
}) {
	const [follow, setFollow] = useState(isUserFollowed)
	const setRender = useContext(SetRenderContext)
	const render = useContext(GetRenderContext)
	const [isNoti, setIsNoti] = useState(false)
	const navigate = useNavigate()

	const handleFollowClick = () => {
		setFollow(true)
		followingAPI
			.postFollow(id)
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(response.message)
				}
				setRender('true')
			})
			.catch((error) => {
				console.error('Error:', error)
				setRender('false')
			})
	}

	const handleUnFollowClick = () => {
		setFollow(false)
		followingAPI
			.deleteFollow(id)
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(response.message)
				}
				setRender('true')
			})
			.catch((error) => {
				console.error('Error:', error)
				setRender('false')
			})
	}

	const handleNotiClick = () => {
		setIsNoti(!isNoti)
	}

	useEffect(() => {
		const checkTokenIsValid = async () => {
			try {
				const authToken = localStorage.getItem('authToken')
				if (!authToken) {
					navigate('/login')
				}
				const result = await checkPermission(authToken)
				if (!result) {
					Toast.fire({
						title: '帳號不存在',
						timer: 2000,
						icon: 'error',
						showConfirmButton: false,
					})
					navigate('/login')
				}
			} catch (error) {
				console.error(error)
			}
		}

		checkTokenIsValid()
	}, [])

	useEffect(() => {
		setRender('true')
	}, [])

	return (
		<div className={`${style.userInfoContainer} ${style[onHideUserInfo]}`}>
			<div className={`${style.userInfoWrapper}`}>
				<div className={`${style.userInfoImgGroup}`}>
					<div className={`${style.userInfoBackground}`}>
						<img
							src={backgroundImage}
							className={`${style.userInfoCardImg}`}
							alt=''
						/>
					</div>
					<div className={`${style.userInfoCardAvatar}`}>
						<img
							src={avatar}
							className={`${style.userInfoImgAvatar}`}
							alt={account}
						/>
					</div>
				</div>
				<div className={`${style.userInfoAllContent}`}>
					<div className={`${style.userInfoBottonArea}`}>
						<div className={`${style.userInfoMsg}`}>
							<Message />
						</div>
						<div className={`${style.userInfoNoti}`} onClick={handleNotiClick}>
							{isNoti ? <OragneNoti /> : <WhiteNoti />}
						</div>
						<div className={style.buttonGroup}>
							<div className={`${style.userInfoButton}`}>
								{follow ? (
									<div className={`${style.popularUserfollowing}`}>
										<Button
											size='middle'
											text='正在跟隨'
											onClick={handleUnFollowClick}
										/>
									</div>
								) : (
									<div className={`${style.popularUserFollower}`}>
										<Button
											size='white-exsmall'
											text='跟隨'
											onClick={handleFollowClick}
										/>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className={`${style.userInfoBottomArea}`}>
						<div className={`${style.userInfoContentArea}`}>
							<div className={`${style.userInfoNameGroup}`}>
								<div className={`${style.userInfoName}`}>
									<p>{name}</p>
								</div>
								<div className={`${style.userInfoAccount}`}>
									<p>@{account}</p>
								</div>
							</div>
						</div>
						<div className={`${style.userInfoContent}`}>
							<p>{introduction}</p>
						</div>
						<div className={`${style.adminTweetsCardFollowGroup}`}>
							<Link to={`/user/other/following/${userId}`}>
								<div className={`${style.adminTweetsCardFollowing}`}>
									<p className={`${style.following}`}>{following}&nbsp;個</p>
									<p>跟隨中</p>
								</div>
							</Link>
							<Link to={`/user/other/follower/${userId}`}>
								<div className={`${style.adminTweetsCardFollower}`}>
									<p className={`${style.follower}`}>{follower}&nbsp;位</p>
									<p>跟隨者</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
