import axios from 'axios'
const baseUrl = 'http://localhost:3001/books'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const addBook = async (newBook) => {
  const response = await axios.post(baseUrl, newBook)
  return response.data
}

export default { getAll, addBook }