import fetch from 'isomorphic-fetch'

export const getUserInfoDefinition = (fetch = async () => ({
  first_name: '',
  last_name: '',
  profile_pic: ''
})) => async (id = '') => {
  try {
    const response = await fetch(`https://graph.facebook.com/${id}?fields=first_name,last_name,profile_pic&access_token=${process.env.PAGE_ACCESS_TOKEN}`)
    const user = await response.json()

    return user
  } catch (error) {
    console.log(`ERROR: ${error}`)
    return {
      first_name: '',
      last_name: '',
      profile_pic: ''
    }
  }
}

const getUserInfo = getUserInfoDefinition(fetch)

export default getUserInfo
