import { apiHelper } from 'heplers/helpers'

const getToken = () => localStorage.getItem('authToken')

export default {
	like(tweetId) {
		return apiHelper.post(
			`/tweets/${tweetId}/like`,
			{ tweetId },
			{
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			}
		)
	},
	unlike(tweetId) {
		return apiHelper.post(
			`/tweets/${tweetId}/unlike`,
			{ tweetId },
			{
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			}
		)
	},
}
