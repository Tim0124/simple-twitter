import axios from 'axios'

const authURL = 'https://gentle-temple-56514.herokuapp.com/api'

export const login = async ({ account, password }) => {
	try {
		const { data } = await axios.post(`${authURL}/users/signin`, {
			account,
			password,
		})
		const { token } = data.data

		if (token) {
			return { success: true, ...data.data }
		}
		return data.data
	} catch (error) {
		console.error('[Login Failed]', error)
		return { success: false, error: error.message }
	}
}

export const adminLogin = async ({ account, password }) => {
	try {
		const { data } = await axios.post(`${authURL}/adminSignin `, {
			account,
			password,
		})
		const { token } = data.data

		if (token) {
			return { success: true, ...data.data }
		}
		return data.data
	} catch (error) {
		console.error('[Login Failed]', error)
		return { success: false, error: error.message }
	}
}

export const register = async ({
	account,
	name,
	email,
	password,
	checkPassword,
}) => {
	try {
		const { data } = await axios.post(`${authURL}/users `, {
			account,
			name,
			email,
			password,
			checkPassword,
		})
		const success = data.status === 'success'
		if (success) {
			return { success: true, ...data.data }
		}
		return data
	} catch (error) {
		console.error('[Register Failed]', error)
		return { success: false, error: error.message }
	}
}

export const checkPermission = async (token) => {
	try {
		const response = await axios.get(`${authURL}/tokenCheck`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		})

		return response.data
	} catch (error) {
		console.error('[Check Permission Failed]:', error)
	}
}

export const setting = async ({
	id,
	token,
	account,
	name,
	email,
	password,
	checkPassword,
}) => {
	try {
		const response = await axios.put(
			`${authURL}/users/${id} `,
			{
				account,
				name,
				email,
				password,
				checkPassword,
			},
			{
				headers: {
					Authorization: 'Bearer ' + token,
				},
			}
		)
		return response.data
	} catch (error) {
		console.error('[Setting Failed]', error)
		if (error.response.data.message === 'Error: account 已重複註冊') {
			alert('此帳號已存在')
		}
		if (error.response.data.message === 'Error: email 已重複註冊') {
			alert('此Email已存在')
		}
		if (error.response.data.message === 'Error: 密碼與確認密碼不相符') {
			alert('密碼與確認密碼不相符')
		}
		if (error.response.data.message === 'Error: 使用者不存在') {
			alert('使用者不存在')
		}
		if (error.response.data.message === 'Error: 使用者非本帳號無權限編輯') {
			alert('使用者非本帳號無權限編輯')
		}
	}
}
