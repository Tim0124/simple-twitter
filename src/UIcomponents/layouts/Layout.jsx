import { Outlet } from 'react-router-dom';
import PopularUserList from './PopularUserList';
import SideItem from './SideItem';
import Sidebar from './Sidebar';
import style from './Layout.module.scss'
import ModalPostTweet from '../modal/ModalPostTweet'

export default function Layout () {
  return (
    <div className={`${style.layoutContainer}`}>
      <div className={`${style.layoutSidebarContainer}`}>
        <Sidebar/>
      </div>
      <div className={`${style.layoutMainContainer}`}>
        <Outlet/>
      </div>
      <div className={`${style.layoutPopularContainer}`}>
        <PopularUserList/>
      </div>
      <div className={`${style.layoutModalContainer}`}>
        <div className={`${style.modalBackground}`}></div>
        <div className={`${style.modalPostTweet}`}>
          <ModalPostTweet/>
        </div>
      </div>
    </div>
  )
}