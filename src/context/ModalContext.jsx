import { createContext, useState } from 'react'

export const TweetModalContext = createContext()
export const ShowTweetModalContext = createContext()
export const ReplyTweetModalContext = createContext()
export const ShowReplyModalContext = createContext()

export function ModalContextProvider({ children }) {
	const [showTweetModal, setShowTweetModal] = useState(false)
	const [showReplyModal, setShowReplyModal] = useState(false)

	const handleTweetClick = () => {
		setShowTweetModal(!showTweetModal)
	}

	const handleReplyClick = () => {
		setShowReplyModal(!showReplyModal)
	}

	return (
		<TweetModalContext.Provider value={showTweetModal}>
			<ShowTweetModalContext.Provider value={handleTweetClick}>
				<ReplyTweetModalContext.Provider value={showReplyModal}>
					<ShowReplyModalContext.Provider value={handleReplyClick}>
						{children}
					</ShowReplyModalContext.Provider>
				</ReplyTweetModalContext.Provider>
			</ShowTweetModalContext.Provider>
		</TweetModalContext.Provider>
	)
}
