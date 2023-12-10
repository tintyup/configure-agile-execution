import { request } from '@/utils'

export default {
  getUser: () => request.get('/user'),
  refreshToken: () => request.post('/auth/refreshToken', null, { noNeedTip: true }),

  getRsaParams: () => request.post('/getRsaParams'),
  login: (data) => request.post('/loginEvlation', data),
  main: (data) => request.post('/main', data),
}
