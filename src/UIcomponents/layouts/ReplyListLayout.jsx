import { Outlet } from 'react-router-dom'
import PopularUserList from './PopularUserList'
import Sidebar from './Sidebar'
import style from './ReplyListLayout.module.scss'
import ModalReplyTweet from '../modal/ModalReplyTweet'

export default function ReplyListLayout() {
	return (
		<div className={`${style.LayoutContainer}`}>
			<div className={`${style.LayoutSidebarContainer}`}>
				<Sidebar />
			</div>
			<div className={`${style.LayoutMainContainer}`}>
				<Outlet />
			</div>
			<div className={`${style.LayoutPopularContainer}`}>
				<PopularUserList />
			</div>
			<div>
				<div className={`${style.modalBackground}`}></div>
				<div className={`${style.modalPostTweet}`}>
					<ModalReplyTweet />
				</div>
			</div>
		</div>
	)
}
