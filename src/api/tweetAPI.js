import { apiHelper } from 'heplers/helpers'

const getToken = () => localStorage.getItem('authToken')

export default {
	deleteTweet(tweetId) {
		return apiHelper.delete(`/admin/tweets/${tweetId}`, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
	getTweet(tweetId) {
		return apiHelper.get(`/tweets/${tweetId}`, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
	getReplyTweet(tweetId) {
		return apiHelper.get(`/tweets/${tweetId}/replies`, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
	getUserAllTweet(tweetId) {
		console.log('id',tweetId)
		return apiHelper.get(`/users/${tweetId}/tweets`, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
	getUserReplies(userId) {
		return apiHelper.get(`/users/${userId}/replied_tweets`, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
	getUserLikes(userId) {
		return apiHelper.get(`/users/${userId}/likes`, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
	postTweet(userId, tweet) {
		return apiHelper.post(
			`/tweets`,
			{
				description: tweet,
				// userId:24,
			},
			{
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			}
		)
	},
}
