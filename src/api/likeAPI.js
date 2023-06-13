import { apiHelper } from 'heplers/helpers'

const getToken = () => localStorage.getItem('authToken')

export default {
	like(id) {
		return apiHelper.post(
			`/tweets/${id}/like`,
			{ id },
			{
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			}
		)
	},
	unlike(id) {
		return apiHelper.post(
			`/tweets/${id}/unlike`,
			{ id },
			{
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			}
		)
	},
}
