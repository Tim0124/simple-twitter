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
}
