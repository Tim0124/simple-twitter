import SideItem from './SideItem'
import style from './AdminSidebar.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Button from 'UIcomponents/buttons/Button'
import { Link } from 'react-router-dom'

export default function AdminSidebar() {
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
                styleName='iconHome'
                itemName='推文清單'
                page='admin/tweets'
              />
              <SideItem
                styleName='iconPerson'
                itemName='使用者列表'
                page='admin/users'
              />
            </div>
          </div>
          <div className={`${style.loginOut}`}>
              <SideItem
                styleName='iconLoginOut'
                itemName='登出'
                page='/admin'
              />
          </div>
        </div>
      </div>
    </div>
  )
}