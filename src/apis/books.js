import { apiHelper } from '../utils/helpers'

export default {
  getBooks () {
    return apiHelper.get('/books')
  },
  getBook (id) {
    return apiHelper.get(`/profile/${id}`)
  },
  putBook (id, data) {
    return apiHelper.put(`/profile/${data.id}`, data)
  }
}
