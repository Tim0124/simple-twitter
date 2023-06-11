import { apiHelper } from 'heplers/helpers'

const getToken = () => localStorage.getItem('authToken')

export default {
	deleteTweet(userId) {
		return apiHelper.delete(`/admin/tweets/${userId}`, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
	getTweet(tweetId) {
		return apiHelper.get(`/tweets/${tweetId}`,{
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
	getReplyTweet(tweetId) {
		return apiHelper.get(`/tweets/${tweetId}/replies`,{
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
	getCurrentTweetUser(tweetId) {
		return apiHelper.get(`/tweets/${tweetId}`,{
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	}
}


