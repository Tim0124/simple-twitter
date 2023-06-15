import tweetAPI from 'api/tweetAPI'
import { createContext, useState } from 'react'

export const TweetModalContext = createContext()
export const ShowTweetModalContext = createContext()
export const ReplyTweetModalContext = createContext()
export const ShowReplyModalContext = createContext()
export const GetReplyTweetIdContext = createContext()
export const EditModalContext = createContext()
export const ShowEditModalContext = createContext()

export function ModalContextProvider({ children }) {
	const [showTweetModal, setShowTweetModal] = useState(false)
	const [showReplyModal, setShowReplyModal] = useState(false)
	const [showEditModal, setShowEditModal] = useState(false)
	const [replyTweetId, setReplyTweetId] = useState('')

	const handleTweetClick = () => {
		setShowTweetModal(!showTweetModal)
	}

	const handleReplyClick = (id) => {
		setShowReplyModal(!showReplyModal)
		setReplyTweetId(id)
	}

	const handleEditClick = () => {
		setShowEditModal(!showEditModal)
	}

	return (
		<EditModalContext.Provider value={showEditModal}>
			<ShowEditModalContext.Provider value={handleEditClick}>
				<TweetModalContext.Provider value={showTweetModal}>
					<ShowTweetModalContext.Provider value={handleTweetClick}>
						<ReplyTweetModalContext.Provider value={showReplyModal}>
							<ShowReplyModalContext.Provider value={handleReplyClick}>
								<GetReplyTweetIdContext.Provider value={replyTweetId}>
									{children}
								</GetReplyTweetIdContext.Provider>
							</ShowReplyModalContext.Provider>
						</ReplyTweetModalContext.Provider>
					</ShowTweetModalContext.Provider>
				</TweetModalContext.Provider>
			</ShowEditModalContext.Provider>
		</EditModalContext.Provider>
	)
}
