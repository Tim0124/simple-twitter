import axios from "axios"

const authURL = 'https://gentle-temple-56514.herokuapp.com/api'

export const login = async ({ account, password }) => {
  try {
    const response = await axios.post(`${authURL}/users/signin`, { account, password })
    const { data } = response

    const { token } = data

    if (token) {
      return { success: true, ...data }
    }
    console.log(data)
    return data
  } catch (error) {
    console.error('[Login Failed]', error)
  }
}

export const adminLogin = async ({ account, password }) => {
  try {
    const response = await axios.post(`${authURL}/adminSignin `, { account, password })
    const { data } = response

    const { token } = data

    if (token) { 
      return { success: true, ...data }
    }
    console.log(data)

    return data
  } catch (error) {
    console.error('[Login Failed]', error)
  }
}

export const register = async ({ account, name, email, password, checkPassword }) => {
  try {
    const response = await axios.post(`${authURL}/users `, { account, name, email, password, checkPassword })
    const { data } = response

    const { token } = data

    if (token) {
      return { success: true, ...data }
    }
    console.log(data)

    return data
  } catch (error) {
    console.error('[Register Failed]', error)
  }
}




