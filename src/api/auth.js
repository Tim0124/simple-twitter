import axios from 'axios'
import { Toast } from 'heplers/helpers'

const authURL = 'https://twitter-ac-daniel-4bc657e8f005.herokuapp.com/api'

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
		const message = data.message
		if (success) {
			return { success: true, ...data.data }
		} else if (message === 'Error: account 已重複註冊！') {
		}
		return data
	} catch (error) {
		console.error('[Register Failed]', error)
		const errorMessage = error.response.data.message
		return { success: false, errorMessage }
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
		const { data } = await axios.put(
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
		const success = data.status === 'success'
		const message = data.message
		if (success) {
			return { success: true, ...data.data }
		} else if (message === 'Error: account 已重複註冊！') {
		}
		return data
	} catch (error) {
		console.error('[Setting Failed]', error)
		const errorMessage = error.response.data.message
		return { success: false, errorMessage }
	}
}
