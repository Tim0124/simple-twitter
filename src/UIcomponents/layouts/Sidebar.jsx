import SideItem from './SideItem'
import style from './Sidebar.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Button from 'UIcomponents/buttons/Button'
import { Link, useNavigate } from 'react-router-dom'

export default function Sidebar() {
	const navigate = useNavigate()
	const handleClick = () => {
		localStorage.removeItem('authToken')
		console.log(localStorage.getItem('authToken'))
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
							<SideItem styleName='actionHome' itemName='首頁' page='home' />
							<SideItem
								styleName='iconTweet'
								itemName='推文'
								customName='custom'
							/>
							<SideItem
								styleName='iconPerson'
								itemName='個人資料'
								page='user/self'
							/>
							<SideItem
								styleName='iconSetting'
								itemName='設定'
								page='setting'
							/>
							<SideItem
								styleName='iconUnTweet'
								itemName='推文'
								customName='customTweet'
							/>
						</div>
						<div className={`${style.buttonItem}`}>
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
