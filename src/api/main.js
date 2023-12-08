import request from '@/utils/fetch'

export function login(data) {
  return request.post('/loginEvlation', data)
}

export function getRsaParams(data) {
  return request.post('/getRsaParams',data)
}
