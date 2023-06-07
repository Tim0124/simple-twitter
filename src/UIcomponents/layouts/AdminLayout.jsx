import style from './AdminLayout.module.scss'
import { Outlet } from 'react-router-dom';
import PopularUserList from './PopularUserList';
import Sidebar from './Sidebar';

export default function AdminLayout () {
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