import { apiHelper } from 'heplers/helpers'

const getToken = () => localStorage.getItem('authToken')

export default {
	getReplyTweet(tweetId, comment) {
		return apiHelper.post(`/tweets/${tweetId}/replies`,{comment}, {
			headers: { Authorization: `Bearer ${getToken()}` },
		})
	},
}