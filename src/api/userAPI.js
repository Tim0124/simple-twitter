import { apiHelper } from 'heplers/helpers'

const getToken = () => localStorage.getItem('authToken')

export default {
	getAdminTweets() {
		return apiHelper.get('/admin/tweets', {
			headers: { Authorization: `Bearer ${getToken()}` },
		})
	},
	getAdminUsers() {
		return apiHelper.get('/admin/users', {
			headers: { Authorization: `Bearer ${getToken()}` },
		})
	},
	getUser(userId) {
		console.log(userId)
		return apiHelper.get(`/users/${userId}`, {
			headers: { Authorization: `Bearer ${getToken()}` },
		})
	},
	getCurrentUser() {
		return apiHelper.get(`/isSelfUser`, {
			headers: { Authorization: `Bearer ${getToken()}` },
		})
	},
}

//拿到頁數跟categoryID
//帶入page跟categoryID
//使用searchParams
// export default {
//   getAdminTweets ({page, categoryId}) {

//     const searchParams = new URLSearchParams({page, categoryId})

//     return apiHelper.get(`/admin/tweets?${searchParams.toString()}`, {
//       headers:{Authorization:`Bearer ${getToken()}`}
//     })
//   }
// }
