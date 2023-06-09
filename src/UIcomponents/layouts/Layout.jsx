import { Outlet } from 'react-router-dom';
import PopularUserList from './PopularUserList';
import SideItem from './SideItem';
import Sidebar from './Sidebar';
import style from './Layout.module.scss'
import ModalPostTweet from '../modal/ModalPostTweet'
import ModalUserInfo from '../../components/modal/ModalUserInfo'
import { useState } from 'react';

export default function Layout () {
  const [showModal, setShowModal] = useState(false)

  const handleClickModal = () => {
    setShowModal(true)
  }

  return (
    <div className={`${style.layoutContainer}`}>
      <div className={`${style.layoutSidebarContainer}`}>
        <Sidebar/>
      </div>
      <div className={`${style.layoutMainContainer}`}>
        <Outlet onTweetClick={handleClickModal}/>
      </div>
      <div className={`${style.layoutPopularContainer}`}>
        <PopularUserList/>
      </div>
      <div className={`${style.layoutModalContainer} ${showModal ? 'block' : 'none'}`}>
        <div className={`${style.modalBackground}`}></div>
        <div className={`${style.modalPostTweet}`}>
          {/* <ModalUserInfo/> */}
          <ModalPostTweet/>
        </div>
      </div>
    </div>
  )
}