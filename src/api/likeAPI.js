import { apiHelper } from 'heplers/helpers'

const getToken = () => localStorage.getItem('authToken')

export default {
	like(TweetId) {
		return apiHelper.post(`/tweets/${TweetId}/like`, null, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
	unlike(TweetId) {
		return apiHelper.post(`/tweets/${TweetId}/unlike`, null, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
}
