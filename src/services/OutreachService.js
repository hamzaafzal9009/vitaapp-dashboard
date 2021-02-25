import http from './http-common'

export default {
  getOutreachMessages(locationId, page, sort, searchText) {
    return http.post('/outreach/getAll', {locationId: locationId, page: page, sort: sort, searchText: searchText});
  },
  saveOutreachMessage(message, parsedDate) {
    if(message.outreachId) {
      return http.post('/outreach/update', {outreach: message, parsedDate: parsedDate});
    } else {
      return http.post('/outreach/save', {outreach: message, parsedDate: parsedDate});
    }
  },
  sendOutreachMessage(message, locationId, triggers) {
    return http.post('/outreach/sendOutreach', {message, locationId, triggers});
  },
  testOutreachMessage(message, locationId, email, phone, name) {
    return http.post('/outreach/sendTest', {message: message, locationId: locationId, email: email, phone: phone, name: name});
  },
  changeOutreachStatus(outreachId, status) {
    return http.post('/outreach/changeStatus', {outreachId: outreachId, status: status});
  }
}