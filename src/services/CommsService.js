import http from './http-common'

export default {
  getEmailLogs(future) {
    var locationId = localStorage.getItem('locationId');
    if (locationId) {
      return http.get('/logs/email/' + locationId + (future ? '/future' : ''))
    } else {
      return http.get('/logs/email/all' + (future ? '/future' : ''))
    }
  },
  getSMSLogs(future) {
    var locationId = localStorage.getItem('locationId');
    if (locationId) {
      return http.get('/logs/sms/' + locationId + (future ? '/future' : ''))
    } else {
      return http.get('/logs/sms/all' + (future ? '/future' : ''))
    }
  },
}