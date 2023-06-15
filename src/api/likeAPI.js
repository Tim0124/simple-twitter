import { apiHelper } from 'heplers/helpers'

const getToken = () => localStorage.getItem('authToken')

export default {
	like(tweetId) {
		console.log('token', getToken())
		return apiHelper.post(
			`/tweets/${tweetId}/like`,
			// {UserId:34},
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
			// { userId },
			{
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			}
		)
	},
}
