import http from './http-common'

export default {
  getUploads() {
    return http.get('/uploads/all')
  },
  // searchUploads(string, id) {
  //   if(id) {
  //     return http.get('/upload/search/' + string + '/' + id)
  //   } else {
  //     return http.get('upload/search/' + string)
  //   }
  // },

  saveUploadRecord(locationId, record) {
    return http.post('/uploads/opiniion/uploadRecord', {locationId: locationId, record: record})
  },
  getUploadsByLocations(ids) {
    return http.post('/uploads/byLocations', {locationIds: ids})
  },
}