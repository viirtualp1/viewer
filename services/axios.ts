import axios from 'axios'

export default axios.create({
  baseURL: 'https://www.opendota.com/api',
})
