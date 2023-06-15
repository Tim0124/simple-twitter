import { Outlet, useLocation, useParams } from 'react-router-dom'
import PopularUserList from './PopularUserList'
import SideItem from './SideItem'
import Sidebar from './Sidebar'
import style from './Layout.module.scss'
import ModalPostTweet from '../modal/ModalPostTweet'
import ModalUserInfo from '../modal/ModalUserInfo'
import { useContext, useState } from 'react'
import ModalReplyTweet from 'UIcomponents/modal/ModalReplyTweet'
import {
	ModalHiddenContext,
	ReplyTweetModalContext,
	TweetModalContext,
} from 'context/ModalContext'

export default function Layout() {
	const ShowTweetModal = useContext(TweetModalContext)
	const ShowReplyModal = useContext(ReplyTweetModalContext)

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
			{ShowTweetModal && <ModalPostTweet />}
			{ShowReplyModal && <ModalReplyTweet />}
		</div>
	)
}
