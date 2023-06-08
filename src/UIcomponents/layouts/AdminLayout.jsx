import style from './AdminLayout.module.scss'
import { Outlet } from 'react-router-dom';
import PopularUserList from './PopularUserList';
import AdminSidebar from './AdminSidebar';

export default function AdminLayout () {
  return (
     <div className={`${style.LayoutContainer}`}>
      <div className={`${style.LayoutSidebarContainer}`}>
        <AdminSidebar/>
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