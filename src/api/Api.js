import axios from 'axios'

const axiosClient = axios.create({
  baseURL: `https://trang-huyen.herokuapp.com/api/v1`,
  responseType: 'json',
})

axiosClient.interceptors.request.use(
  (config) => {
    config.headers = config.headers || {}
    return config
  },
  (error) => Promise.reject(error)
)

axiosClient.interceptors.response.use(
  (response) => {
    if (response.data) {
      return response.data.result ? response.data.result : response.data
    }
    return response
  },
  (error) => {
    const err = (error.response && error.response.data) || error
    return Promise.reject(err)
  }
)

export default axiosClient
