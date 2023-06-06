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

    return data
  } catch (error) {
    console.error('[Login Failed]', error)
  }
}

// fetch('https://gentle-temple-56514.herokuapp.com/api/users/signin')
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(`Error: ${error}`);
//   })

