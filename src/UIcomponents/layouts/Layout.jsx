import { Outlet } from 'react-router-dom';
import PopularUserList from './PopularUserList';
import SideItem from './SideItem';
import Sidebar from './Sidebar';
import style from './Layout.module.scss'

export default function Layout () {
  return (
    <div className={`${style.LayoutContainer}`}>
      <div className={`${style.LayoutSidebarContainer}`}>
        <Sidebar/>
      </div>
      <div className={`${style.LayoutMainContainer}`}>
        <Outlet/>
      </div>
      <div className={`${style.LayoutPopularContainer}`}>
        <PopularUserList/>
      </div>
    </div>
  )
}