import SideItem from './SideItem'
import style from './AdminSidebar.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Button from 'UIcomponents/buttons/Button'
import { Link, useNavigate } from 'react-router-dom'
import { Toast } from 'heplers/helpers'
import { useContext } from 'react'
import { StepContext } from 'context/SideBarContext'

export default function AdminSidebar() {
	const navigate = useNavigate()
	const step = useContext(StepContext)

	const handleClick = () => {
		localStorage.removeItem('authToken')
		Toast.fire({
			title: '已登出',
			icon: 'info',
		})
		navigate('/admin')
	}

	return (
		<div className={`${style.sideBarWrapper}`}>
			<div className={`${style.sideBarContainer}`}>
				<div className={`${style.sideBarGroup}`}>
					<div className={`${style.sideBarItems}`}>
						<div className={`${style.logo}`}>
							<Link to='admin/tweets'>
								<Logo />
							</Link>
						</div>
						<div className={`${style.iconGroup}`}>
							<SideItem
								styleName={step === 1 ? 'actionHome' : 'iconHome'}
								itemName='推文清單'
								page='admin/tweets'
								iconName={step === 1 ? 'onName' : 'itemName'}
							/>
							<SideItem
								styleName={step === 2 ? 'actionUser' : 'iconPerson'}
								itemName='使用者列表'
								page='admin/users'
								iconName={step === 2 ? 'onName' : 'itemName'}
							/>
						</div>
					</div>
					<div className={`${style.loginOut}`} onClick={handleClick}>
						<SideItem styleName='iconLoginOut' itemName='登出' page='/admin' />
					</div>
				</div>
			</div>
		</div>
	)
}
