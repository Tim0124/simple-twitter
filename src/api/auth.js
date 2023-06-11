import axios from "axios"

const authURL = 'https://gentle-temple-56514.herokuapp.com/api'

export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/users/signin`, { account, password })
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
    const { data } = await axios.post(`${authURL}/adminSignin `, { account, password })
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

export const register = async ({ account, name, email, password, checkPassword }) => {
  try {
    const { data } = await axios.post(`${authURL}/users `, { account, name, email, password, checkPassword })
    const success = data.status === 'success'

    if (success) {
      console.log(data)
      debugger

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
      }
    })

    return response.data
  } catch (error) {
    console.error('[Check Permission Failed]:', error);
  }
}



