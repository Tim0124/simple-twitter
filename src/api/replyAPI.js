import { apiHelper } from 'heplers/helpers'

const getToken = () => localStorage.getItem('authToken')

export default {
	postReplyTweet(tweetId, comment) {
		return apiHelper.post(
			`/tweets/${tweetId}/replies`,
			{ comment },
			{
				headers: { Authorization: `Bearer ${getToken()}` },
			}
		)
	},
}
