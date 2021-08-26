import Api from './Api'

const getAll = () => {
  return Api.get('/department', { params: { first: 100, page: 1 } })
}

const deleteByID = (id) => {
  return Api.delete(`/department/${id}`)
}

const todoApi = { getAll, deleteByID }

export default todoApi
