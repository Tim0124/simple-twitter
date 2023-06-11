import style from './ModalUserInfo.module.scss'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import Button from 'UIcomponents/buttons/Button'
import { ReactComponent as Close } from '../../assets/Vector.svg'
import Input from 'UIcomponents/input/Input'
import { ReactComponent as WhiteX } from '../../assets/whiteX.svg'
import { ReactComponent as WhiteCamera } from '../../assets/whitecamera.svg'
import { useState } from 'react'

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
		<div className={`${style.userInfoMdContainer}`}>
			<header className={`${style.userInfoMdHeader}`}>
				<nav className={`${style.userInfoMdNavbar}`}>
					<div className={`${style.userInfoMdTitle}`}>
						<h1 className={`${style.userInfoMdArrow}`}>
							<Arrow />
						</h1>
						<h1 className={`${style.userInfoClose}`}>
							<Close style={{ color: '#ff6600' }} />
						</h1>
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
					<p className={`${style.userInfoMdWhite}`}>
						<WhiteCamera />
					</p>
					<p className={`${style.userInfoMdWhite}`}>
						<WhiteX />
					</p>
				</div>
				<div className={`${style.userInfoMdBackground}`}>
					<img
						src={data[0].background}
						className={`${style.userInfoMdCardImg}`}
						alt=''
					/>
				</div>
				<div className={`${style.userInfoSecIcon}`}>
					<p className={`${style.userInfoMdWhite}`}>
						<WhiteCamera />
					</p>
				</div>
				<div className={`${style.userInfoMdAvatar}`}>
					<img
						src={data[0].avatar}
						className={`${style.userInfoMdImgAvatar}`}
						alt=''
					/>
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
					<div className={`${style.userInfoLabelGroup}`}>
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
		</div>
	)
}
