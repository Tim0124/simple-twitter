import { apiHelper } from '../heplers/helpers'

const getToken = () => localStorage.getItem('authToken')

export default {
	getFollowings(id) {
		return apiHelper.get(`/users/${id}/followings`, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
	getCurrentUser(id) {
		return apiHelper.get(`/users/${id}`, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
	getTopFollower() {
		return apiHelper.get(`/users`, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
	getFollower(id) {
		return apiHelper.post(
			`/followships`,
			{
				id,
			},
			{
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			}
		)
	},
	getUnFollowing(id) {
		return apiHelper.delete(`/followships/${id}`, {
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		})
	},
}
