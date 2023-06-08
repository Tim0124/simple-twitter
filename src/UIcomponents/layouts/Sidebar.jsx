import SideItem from './SideItem'
import style from'./Sidebar.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Button from 'UIcomponents/buttons/Button'
import { Link } from 'react-router-dom'

export default function Sidebar () {
  return (
    <div className={`${style.sideBarWrapper}`}>
      <div className={`${style.sideBarContainer}`}>
        <div className={`${style.sideBarGroup}`}>
          <div className={`${style.sideBarItems}`}>
            <div className={`${style.logo}`}>
              <Logo/>
            </div>
              <div className={`${style.iconGroup}`}>
                <SideItem 
                styleName='actionHome'
                itemName='首頁'
                />
                <SideItem 
                styleName='iconTweet'
                itemName='推文'
                customName='custom'
                />
                <SideItem 
                styleName='iconPerson'
                itemName='個人資料'
                />
                <SideItem 
                styleName='iconSetting'
                itemName='設定'
                />
                <SideItem 
                styleName='iconUnTweet'
                itemName='推文'
                customName='customTweet'
                />
              </div>
            <div className={`${style.buttonItem}`}>
              <Button size='large' text='推文'/>
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