import axios from 'axios'
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
		return apiHelper.get(`/users/${userId}`, {
			headers: { Authorization: `Bearer ${getToken()}` },
		})
	},
	getCurrentUser() {
		return apiHelper.get(`/isSelfUser`, {
			headers: { Authorization: `Bearer ${getToken()}` },
		})
	},
	putUserEdit(id, formData) {
		console.log(formData)
		const headers = {
			Authorization: `Bearer ${getToken()}`,
			'Content-Type': 'multipart/form-data',
		}
		return axios({
			method: 'put',
			baseURL: 'https://gentle-temple-56514.herokuapp.com/api',
			url: `/users/${id}`,
			data: formData,
			headers: headers,
		})
	},
	// putUserEdit(id, formData) {
	// 	return apiHelper.put(`/users/${id}`,
	// 	{formData}, {
	// 		headers: { Authorization: `Bearer ${getToken()}` },
	// 	})
	// },
	// putUserEdit(id, formData) {
	// const params = new URLSearchParams();
	// params.append('formData', formData);

	// return apiHelper.put(`/users/${id}`, params.toString(), {
	//   headers: {
	//     'Authorization': `Bearer ${getToken()}`,
	//     'Content-Type': 'application/x-www-form-urlencoded',
	// 		},
	// 	});
	// },
	// 	putUserEdit(id, formData) {
	//   const jsonData = {
	//     formData: formData,
	//   };

	//   return apiHelper.put(`/users/${id}`, jsonData, {
	//     headers: {
	//       'Authorization': `Bearer ${getToken()}`,
	//       'Content-Type': 'multipart/form-data',
	//     },
	//   });
	// }
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
