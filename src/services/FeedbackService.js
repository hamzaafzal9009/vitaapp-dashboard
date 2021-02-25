import http from './http-common'

export default {
  getFeedback(pageNum) {
    var locationId = localStorage.getItem('locationId');
    if (locationId) {
      var url = '/feedback/forLocation/' + locationId;
      if (pageNum) url += '/' + pageNum;
      return http.get(url)
    } else {
      var url = '/feedback/all';
      if (pageNum) url += '/' + pageNum;
      return http.get(url)
    }
  },
  searchFeedback(string, locationId, pageNum) {
    var searchObj = {searchText: string};
    if (locationId) searchObj.locationId = locationId;
    if (pageNum) searchObj.pageNum = pageNum;
    return http.post('/feedback/search', searchObj)
  },
  searchFeedbackAdvanced(searchObj) {
    return http.post('/feedback/search', searchObj)
  },
  setFeedbackStatus(customerId, date, status) {
    return http.post('/feedback/setStatus', {customerId: customerId, date: date, status: status})
  },
  leavePrivateFeedback(locationId, customerId, rating, source, template) {
    return http.post('/feedback/leave', {locationId: locationId, customerId: customerId, rating: rating, src: source, template: template})
  },
  leavePrivateReview(locationId, customerId, date, reviewText, template) {
    return http.post('/feedback/privateReview', {locationId: locationId, customerId: customerId, date: date, reviewText: reviewText, template: template})
  },
  logLinkClick(customerId) {
    return http.post('/feedback/linkClick', {customerId: customerId})
  },
  recordRouting(customerId, routeTarget) {
    return http.post('/feedback/routed', {customerId: customerId, routeTarget: routeTarget})
  },
  getAllFeedback(locationId) {
    return http.post('/feedback/getAll', {locationId: locationId})
  },
  getCustomerFeedback(sourceId) {
    return http.post('/feedback/bySourceId', {sourceId: sourceId})
  },
  googleReply(locationId, reviewId, reply) {
    return http.post('/feedback/googleReply', {locationId: locationId, reviewId: reviewId, reply: reply})
  }
}