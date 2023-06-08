import SideItem from './SideItem'
import style from './AdminSidebar.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Button from 'UIcomponents/buttons/Button'

export default function AdminSidebar() {
  return (
    <div className={`${style.sideBarWrapper}`}>
      <div className={`${style.sideBarContainer}`}>
        <div className={`${style.sideBarGroup}`}>
          <div className={`${style.sideBarItems}`}>
            <div className={`${style.logo}`}>
              <Logo />
            </div>
            <div className={`${style.iconGroup}`}>
              <SideItem
                styleName='iconHome'
                itemName='推文清單'
              />
              <SideItem
                styleName='iconPerson'
                itemName='使用者列表'
              />
            </div>
            <div className={`${style.buttonItem}`}>
              <Button size='large' text='推文' />
            </div>
          </div>
          <div className={`${style.loginOut}`}>
            <SideItem
              styleName='iconLoginOut'
              itemName='登出'
            />
          </div>
        </div>
      </div>
    </div>
  )
}