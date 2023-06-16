import style from './ModalUserInfo.module.scss'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import Button from 'UIcomponents/buttons/Button'
import { ReactComponent as Close } from '../../assets/Vector.svg'
import Input from 'UIcomponents/input/Input'
import { ReactComponent as WhiteX } from '../../assets/whiteX.svg'
import { ReactComponent as WhiteCamera } from '../../assets/whitecamera.svg'
import { useContext, useEffect, useState } from 'react'
import ModalBlackDrop from './ModalBlackDrop'
import ReactDOM from 'react-dom'
import userAPI from 'api/userAPI'
import { Link } from 'react-router-dom'
import { EditModalContext, ShowEditModalContext } from 'context/ModalContext'
import { Toast } from 'heplers/helpers'

export default function ModalUserInfo() {
	const portalElement = document.getElementById('modal-root')
	const ShowEditModal = useContext(EditModalContext)
	const handleEditModal = useContext(ShowEditModalContext)
	const [userData, setUserDate] = useState([])
	const [userId, setUserId] = useState('')
	const [avatar, setAvatar] = useState('')
	const [backgroundImage, setBackground] = useState('')
	const [name, setName] = useState('')
	const [introduction, setIntroduction] = useState('')
	const [inputError, setInputError] = useState(false)
	const [areaError, setAreaError] = useState(false)

	useEffect(() => {
		userAPI.getCurrentUser().then((res) => {
			const { data } = res
			if (res.status !== 200) {
				throw new Error(data.message)
			}
			setUserDate(data)
			setUserId(data.id)
			setName(data.name)
			setAvatar(data.avatar)
			setIntroduction(data.introduction ? data.introduction : '')
			setBackground(data.backgroundImage)
		})
	}, [])

	const handleNameChange = (e) => {
		setName(e.target.value)
	}
	const handleIntroductionChange = (e) => {
		setIntroduction(e.target.value)
	}

	const handleBackgroundChange = (e) => {
		const { files } = e.target
		if (files.length === 0) {
			return
		} else {
			const imageURL = window.URL.createObjectURL(files[0])
			console.log('image', imageURL)
			setBackground(imageURL)
		}
	}

	const handleAvatarChange = (e) => {
		const { files } = e.target
		if (files.length === 0) {
			return
		} else {
			const imageURL = window.URL.createObjectURL(files[0])
			setAvatar(imageURL)
		}
	}

	const handleChanelClick = () => {
		setBackground('')
		setBackground(userData.backgroundImage)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (name.trim().length === 0) {
			setInputError(true)
			Toast.fire({
				icon: 'error',
				title: '內容不可空白',
			})
			return
		}
		if (introduction.trim().length === 0) {
			setAreaError(true)
			Toast.fire({
				icon: 'error',
				title: '內容不可空白',
			})
			return
		}
		if (introduction.trim().length > 160) {
			setAreaError(true)
			Toast.fire({
				icon: 'error',
				title: '自我介紹不可超過160字',
			})
			return
		}
		const form = document.querySelector('form')
		console.log(form)
		const formData = new FormData(form)
		console.log('大頭貼', avatar)
		// formData.append('backgroundImage', document.getElementById('backgroundPhoto').files[0])
		// formData.append('avatarPhoto', document.getElementById('avatarPhoto').files[0])
		formData.append('avatar', avatar)
		formData.append('backgroundImage', backgroundImage)
		formData.append('introduction', introduction)
		formData.append('name', name)

		userAPI
			.putUserEdit(userId, formData)
			.then((res) => {
				const { data } = res
				console.log(res)
				Toast.fire({
					icon: 'success',
					title: '儲存成功',
				})
				handleEditModal()
			})
			.catch((error) => {
				console.error(error)
				Toast.fire({
					icon: 'error',
					title: '儲存失敗，請聯絡管理員',
				})
			})
	}

	return (
		<>
			{ReactDOM.createPortal(
				<div
					className={style.modal}
					style={{ display: ShowEditModal ? 'block' : 'none' }}
				>
					<ModalBlackDrop onClick={handleEditModal} />
					<form
						onSubmit={(e) => handleSubmit(e)}
						className={`${style.userInfoMdContainer}`}
					>
						<header className={`${style.userInfoMdHeader}`}>
							<nav className={`${style.userInfoMdNavbar}`}>
								<div className={`${style.userInfoMdTitle}`}>
									<Link to='/user/self' className={`${style.userInfoMdArrow}`}>
										<h1 onClick={handleEditModal}>
											<Arrow />
										</h1>
									</Link>
									<Link to='/user/self'>
										<h1
											className={`${style.userInfoClose}`}
											onClick={handleEditModal}
										>
											<Close style={{ color: '#ff6600' }} />
										</h1>
									</Link>
									<h1>編輯個人資料</h1>
								</div>
								<div className={`${style.userInfoMdButtonGroup}`}>
									<div className={`${style.userInfoMdButton}`}>
										<Button
											size='middle'
											text='儲存'
											onClick={(e) => handleSubmit(e)}
										/>
									</div>
								</div>
							</nav>
						</header>
						<div className={`${style.userInfoMdImgGroup}`}>
							<div className={`${style.userInfoIcon}`}>
								<label
									htmlFor='backgroundPhoto'
									className={`${style.userInfoMdWhite}`}
								>
									<WhiteCamera />
								</label>
								<div
									className={`${style.userInfoMdWhite}`}
									onClick={handleChanelClick}
								>
									<WhiteX />
								</div>
							</div>
							<div className={`${style.userInfoMdBackground}`}>
								<img
									src={backgroundImage}
									className={`${style.userInfoMdCardImg}`}
									alt=''
								/>
							</div>

							<div className={`${style.userInfoMdAvatar}`}>
								<img
									src={avatar}
									className={`${style.userInfoMdImgAvatar}`}
									alt=''
								/>
								<div className={`${style.userInfoSecIcon}`}>
									<label
										htmlFor='avatarPhoto'
										className={`${style.userInfoMdWhite}`}
									>
										<WhiteCamera />
									</label>
								</div>
							</div>
						</div>
						<div className={`${style.userInfoInputArea}`}>
							<div className={`${style.userInfoInputName}`}>
								<Input label='名稱' value={name} onChange={handleNameChange} />
								<div className={style.userInfoNameGroup}>
									<p className={`${style.userInfoInputNameError}`}>
										內容不可空白
									</p>
									<p className={`${style.userInfoInputText}`}>
										{name.length}/50
									</p>
								</div>
							</div>
							<div className={`${style.userInfoInputContent}`}>
								<div className={`${style.userInfoInput}`}>
									<Input
										label='自我介紹'
										value={introduction}
										onChange={handleIntroductionChange}
									/>
								</div>
								<div>
									<label className={`${style.userInfoLabel}`}>
										<p className={`${style.userInfoLabelTitle}`}>自我介紹</p>
										<textarea
											className={`${style.userInfoTextArea}`}
											value={introduction}
											onChange={handleIntroductionChange}
											style={{
												borderBottom: areaError
													? '2px solid #FC5A5A'
													: '2px solid #657786',
											}}
										></textarea>
									</label>
								</div>
								<div className={style.userInfoTextGroup}>
									<p className={`${style.userInfoInputTextError}`}>
										內容不可空白
									</p>
									<p className={`${style.userInfoInputText}`}>
										{introduction.length}/160
									</p>
								</div>
							</div>
						</div>
						<input
							type='file'
							id='backgroundPhoto'
							className={style.inputPhoto}
							onChange={(e) => handleBackgroundChange(e)}
						></input>
						<input
							type='file'
							id='avatarPhoto'
							className={style.inputPhoto}
							onChange={(e) => handleAvatarChange(e)}
						></input>
					</form>
				</div>,
				portalElement
			)}
		</>
	)
}
