import { apiHelper } from 'heplers/helpers'

const getToken = () => localStorage.getItem('authToken')

export default {
	like({ UserId }) {
		return apiHelper.post(`/tweets/${UserId}/like`, null, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
	unlike({ UserId }) {
		return apiHelper.post(`/tweets/${UserId}/unlike`, null, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
}
