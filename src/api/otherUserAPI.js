import { apiHelper } from 'heplers/helpers'

const getToken = () => localStorage.getItem('authToken')

export default {
	getOtherUser(user_id) {
		return apiHelper.get(`/users/${user_id}`, {
			headers: { Authorization: `Bearer ${getToken()}` },
		})
	},
	getOtherUserTweets(user_id) {
		return apiHelper.get(`/users/${user_id}/tweets`, {
			headers: { Authorization: `Bearer ${getToken()}` },
		})
	},
}
