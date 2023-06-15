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

const data = [
	{
		id: 1,
		avatar: 'https://picsum.photos/300/300?text=2',
		background: 'https://picsum.photos/300/300?text=1',
		name: 'John Doe',
		content:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
	},
]

export default function UserInfo() {
	const [name, setName] = useState('John Doe')
	const [intro, setIntro] = useState(
		'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
	)
	const [text, setText] = useState(
		'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
	)
	const portalElement = document.getElementById('modal-root')
	const ShowEditModal = useContext(EditModalContext)
	const handleEditModal = useContext(ShowEditModalContext)

	useEffect(() => {
		// userAPI.getUser().then((res) => {

		// })
	},[])

	const handleNameChange = (e) => {
		setName(e.target.value)
	}
	const handleIntroChange = (e) => {
		setIntro(e.target.value)
	}
	const handleTextChange = (e) => {
		setText(e.target.value)
	}

	return ( 
		<>
			{ReactDOM.createPortal(
				<div className={style.modal} style={{display: ShowEditModal ? 'block' : 'none'}}>
					<ModalBlackDrop onClick={handleEditModal}/>
		<form className={`${style.userInfoMdContainer}`}>
				<header className={`${style.userInfoMdHeader}`}>
				<nav className={`${style.userInfoMdNavbar}`}>
					<div className={`${style.userInfoMdTitle}`}>
						<Link to='/user/self'>
							<h1 className={`${style.userInfoMdArrow}`} onClick={handleEditModal}>
							<Arrow />
							</h1>
						</Link>
						<Link to='/user/self'>
							<h1 className={`${style.userInfoClose}`} onClick={handleEditModal}>
							<Close style={{ color: '#ff6600' }} />
						</h1>
						</Link>
						<h1>編輯個人資料</h1>
					</div>
					<div className={`${style.userInfoMdButtonGroup}`}>
						<div className={`${style.userInfoMdButton}`}>
							<Button size='middle' text='儲存' />
						</div>
					</div>
				</nav>
			</header>
			<div className={`${style.userInfoMdImgGroup}`}>
				<div className={`${style.userInfoIcon}`}>
					<label for='backgroundPhoto' className={`${style.userInfoMdWhite}`}>
						<WhiteCamera />
					</label>
					<div className={`${style.userInfoMdWhite}`}>
						<WhiteX />
					</div>
				</div>
				<div className={`${style.userInfoMdBackground}`}>
					<img
						src={data[0].background}
						className={`${style.userInfoMdCardImg}`}
						alt=''
					/>
				</div>
				
				<div className={`${style.userInfoMdAvatar}`}>
					<img
						src={data[0].avatar}
						className={`${style.userInfoMdImgAvatar}`}
						alt=''
					/>
					<div className={`${style.userInfoSecIcon}`}>
					<label for='avatarPhoto' className={`${style.userInfoMdWhite}`}>
						<WhiteCamera />
					</label>
				</div>
				</div>
			</div>
			<div className={`${style.userInfoInputArea}`}>
				<div className={`${style.userInfoInputName}`}>
					<Input label='名稱' value={name} onChange={handleNameChange} />
					<p className={`${style.userInfoInputText}`}>8/50</p>
				</div>
				<div className={`${style.userInfoInputContent}`}>
					<div className={`${style.userInfoInput}`}>
						<Input
							label='自我介紹'
							value={intro}
							onChange={handleIntroChange}
						/>
					</div>
					<div>
						<label className={`${style.userInfoLabel}`}>
							<p className={`${style.userInfoLabelTitle}`}>自我介紹</p>
							<textarea
								className={`${style.userInfoTextArea}`}
								value={text}
								onChange={handleTextChange}
							></textarea>
						</label>
					</div>
					<p className={`${style.userInfoInputText}`}>0/160</p>
				</div>
			</div>
			<input type='file' id='backgroundPhoto' className={style.inputPhoto}></input>
			<input type='file' id='avatarPhoto' className={style.inputPhoto}></input>
		</form>
				</div>
			,portalElement)}
		</>
	)
}
