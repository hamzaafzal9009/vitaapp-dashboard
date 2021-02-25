import http from './http-common'

export default {
  getAutomations() {
    return http.get('/automation/all')
  },
  searchAutomations(string, id) {
    if(id) {
      return http.get('/automation/search/' + string + '/' + id)
    } else {
      return http.get('automation/search/' + string)
    }
  },
  getAutomation(automationId) {
    return http.get('/automation/getAction/' + automationId);
  },
  getRedirectAutomation(automationId, action) {
    return http.get('/automation/forStep/' + automationId + '/' + action);
  },
  getAutomationByType(locationId, type) {
    return http.post('/automation/byType', {locationId: locationId, type: type});
  },
  getAutomationsByLocation(locationId, type) {
    return http.post('/automation/byLocation/' + locationId + '/' + type);
  },
  getAutomationLogs(automationId) {
    return http.get('/automation/logs/' + automationId)
  },
  setAutomationStatus(automationId, status) {
    return http.post('/automation/update', {automationId, status})
  },
  saveAutomation(automation) {
    return http.post('/automation/create', automation);
  },
  updateAutomation(automation) {
    return http.post('/automation/update', automation);
  },
  changeAutomationStatus(automationId, status) {
    return http.post('/automation/changeStatus', {automationId: automationId, status: status})
  },
  unsubscribe(automationId) {
    return http.get('/automation/unsubscribe/' + automationId);
  },
  saveImageToFile(imageData) {
    return http.post('/images/save', {imageData: imageData});
  },
  retrieveImage(imageId) {
    return http.get('/get/' + imageId);
  }
}