import SideItem from './SideItem'
import style from './Sidebar.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Button from 'UIcomponents/buttons/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import {
	ModalHiddenContext,
	ShowTweetModalContext,
	TweetModalContext,
} from 'context/ModalContext'
import ModalPostTweet from 'UIcomponents/modal/ModalPostTweet'
import { ChangeStepContext, StepContext } from 'context/SideBarContext'

export default function Sidebar() {
	const navigate = useNavigate()
	const useModalClick = useContext(ShowTweetModalContext)
	const useTweetModal = useContext(TweetModalContext)
	const useStep = useContext(StepContext)
	const useChangeStep = useContext(ChangeStepContext)
	const step = useContext(StepContext)

	const handleClick = () => {
		localStorage.removeItem('authToken')
		navigate('/login')
	}

	return (
		<div className={`${style.sideBarWrapper}`}>
			<div className={`${style.sideBarContainer}`}>
				<div className={`${style.sideBarGroup}`}>
					<div className={`${style.sideBarItems}`}>
						<div className={`${style.logo}`}>
							<Link to='home'>
								<Logo />
							</Link>
						</div>
						<div className={`${style.iconGroup}`}>
							<SideItem
								styleName={step === 1 ? 'actionHome' : 'iconHome'}
								itemName='首頁'
								page='home'
								iconName={step === 1 ? 'onName' : 'itemName'}
							/>
							<SideItem
								styleName='iconTweet'
								itemName='推文'
								customName='custom'
								onClick={useModalClick}
							/>
							<SideItem
								styleName={step === 2 ? 'actionUser' : 'iconPerson'}
								itemName='個人資料'
								page='user/self'
								iconName={step === 2 ? 'onName' : 'itemName'}
							/>
							<SideItem
								styleName={step === 3 ? 'actionSetting' : 'iconSetting'}
								itemName='設定'
								page='setting'
								iconName={step === 3 ? 'onName' : 'itemName'}
							/>
							<SideItem
								styleName='iconUnTweet'
								itemName='推文'
								customName='customTweet'
								onClick={useModalClick}
							/>
						</div>
						<div className={`${style.buttonItem}`} onClick={useModalClick}>
							<Button size='large' text='推文' />
						</div>
					</div>
					<div className={`${style.loginOut}`} onClick={handleClick}>
						<SideItem styleName='iconLoginOut' itemName='登出' page='/login' />
					</div>
				</div>
			</div>
		</div>
	)
}
