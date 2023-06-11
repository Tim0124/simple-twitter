import { Outlet } from 'react-router-dom'
import PopularUserList from './PopularUserList'
import SideItem from './SideItem'
import Sidebar from './Sidebar'
import style from './Layout.module.scss'
import ModalPostTweet from '../modal/ModalPostTweet'
import ModalUserInfo from '../../components/modal/ModalUserInfo'
import { useContext, useState } from 'react'
import ModalReplyTweet from 'UIcomponents/modal/ModalReplyTweet'
import {
	ModalHiddenContext,
	ReplyTweetModalContext,
	TweetModalContext,
} from 'context/ModalContext'

export default function Layout() {
	const useTweetModal = useContext(TweetModalContext)
	const useReplyModal = useContext(ReplyTweetModalContext)

	return (
		<div className={`${style.layoutContainer}`}>
			<div className={`${style.layoutSidebarContainer}`}>
				<Sidebar />
			</div>
			<div className={`${style.layoutMainContainer}`}>
				<Outlet />
			</div>
			<div className={`${style.layoutPopularContainer}`}>
				<PopularUserList />
			</div>
			{useTweetModal && <ModalPostTweet />}
		</div>
	)
}
