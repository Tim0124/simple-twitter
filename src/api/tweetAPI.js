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
	getCurrentTweetUser(tweetId) {
		return apiHelper.get(`/tweets/${tweetId}`, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
	getCurrentUserTweet(tweetId) {
		return apiHelper.get(`/users/${tweetId}`, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
	getCurrentUserAllTweet(tweetId) {
		return apiHelper.get(`/users/${tweetId}/tweets`, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
	getCurrentUserReplies(userId) {
		return apiHelper.get(`/users/${userId}/replied_tweets`, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
	getCurrentUserLikes(userId) {
		return apiHelper.get(`/users/${userId}/likes`, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
}
