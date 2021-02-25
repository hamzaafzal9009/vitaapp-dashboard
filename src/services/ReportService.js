import http from './http-common'

export default {
  getReportData(reportType) {
    return http.get('/reports/' + reportType);
  },
  getTotalUserData(startTime, endTime) {
    return http.get('/reports/opiniionAggregate');
    //return http.post('/reports/totalUsers', {startTime: startTime, endTime: endTime});
  },
  getOmniReportData(startDate, endDate, locationId) {
    var payload = {startDate: startDate, endDate: endDate};
    if (locationId) payload.locationId = locationId;
    return http.post('/reports/omniReport', payload);
  },
  getFlowReportData(startDate, endDate, locationId) {
    var payload = {startDate: startDate, endDate: endDate};
    if (locationId) payload.locationId = locationId;
    return http.post('/reports/flowReport', payload);
  },
  getAdminOmniReportCustomers(startDate, endDate, locationId) {
    var payload = {startDate: startDate, endDate: endDate};
    if(locationId) payload.locationId = locationId;
    return (
      http.post('/reports/adminOmniReportCustomers', payload)
    )
  },
  getAdminOmniReportFeedback(startDate, endDate, locationId) {
    var payload = {startDate: startDate, endDate: endDate};
    if(locationId) payload.locationId = locationId;
    return (
      http.post('/reports/adminOmniReportFeedback', payload)
    )
  },
  getAdminOmniReportEngagement(startDate, endDate, locationId) {
    var payload = {startDate: startDate, endDate: endDate};
    if(locationId) payload.locationId = locationId;
    return (
      http.post('/reports/adminOmniReportEngagement', payload)
    )
  },
  getAdminOmniReportGMB(startDate, endDate, locationId) {
    var payload = {startDate: startDate, endDate: endDate};
    if(locationId) payload.locationId = locationId;
    return (
      http.post('/reports/adminOmniReportGMB', payload)
    )
  },
  getAdminOmniReportEmails(startDate, endDate, locationId) {
    var payload = {startDate: startDate, endDate: endDate};
    if(locationId) payload.locationId = locationId;
    return (
      http.post('/reports/adminOmniReportEmails', payload)
    )
  },
  getAdminOmniReportSMS(startDate, endDate, locationId) {
    var payload = {startDate: startDate, endDate: endDate};
    if(locationId) payload.locationId = locationId;
    return (
      http.post('/reports/adminOmniReportSMS', payload)
    )
  },
  getMultiReportData() {
    return http.get('/reports/multiLocation');
  },
  getMultiReportIntercepts() {
    return http.get('/reports/multiLocationIntercepts');
  },
  getTotalCustomersReport(locationId) {
    if(locationId) {
      return http.get('/reports/totalCustomersReport/' + locationId)
    } else {
      return http.get('/reports/totalCustomersReport')
    }
  },
  getTotalReviewsReport(locationId) {
    if(locationId) {
      return http.post('/reports/totalReviewsReport', {locationId: locationId})
    } else {
      return http.post('/reports/totalReviewsReport')
    }
  },
  getRatings(locationId) {
    return http.get('/reports/gatherRatings/' + locationId)
  },
  getReviewsByMonth(locationId) {
    return http.get('/reports/ReviewsByMonth/' + locationId)
  },
  getTotalReviewsToDate(locationId) {
    return http.get('/reports/ReviewsMonthToDate/' + locationId)
  },
  getTotalCustomersToDate(locationId) {
    return http.get('/reports/CustomersMonthToDate/' + locationId)
  },
  getMessageData(startDate, endDate, locationId) {
    var payload = {startDate: startDate, endDate: endDate};
    if (locationId) payload.locationId = locationId;
    return http.post('/reports/messageData', payload);  
  },
  getReviewsBySource(locationId) {
    var payload = {locationId: locationId};
    return http.post('/reports/reviewsbySource', payload);
  },
  getReviewsBySourceReport(startDate, endDate, locationId) {
    var payload = {startDate: startDate, endDate: endDate, locationId: locationId};
    return http.post('/reports/allReviewsBySource', payload);
  },
  getCurrentVsPreviousReport(startDate, endDate, locationId) {
    var payload = {startDate: startDate, endDate: endDate, locationId: locationId};
    return http.post('/reports/currentVsPrevious', payload);
  },
  reviewsByYear(year, locationId) {  
    return http.post('/reports/reviewsByYear', {year: year, locationId: locationId});
  },
  reviewsPriorToYear(year, locationId) {
    return http.post('/reports/reviewsPriorToYear', {year: year, locationId: locationId})
  },
  privateFeedbackByDate(startDate, endDate, locationId) {
    var payload = {startDate: startDate, endDate: endDate, locationId: locationId};
    return http.post('/reports/privateFeedbackByDate', payload)
  },
  getEmailOpenedEngagement(startDate, endDate, locationId, pageNum) {
    var payload = {startDate: startDate, endDate: endDate, locationId: locationId};
    if(pageNum) payload.pageNum = pageNum;
    return http.post('/reports/emailOpenedEngagement', payload)
  },
  getEmailRepliedEngagement(startDate, endDate, locationId, pageNum) {
    var payload = {startDate: startDate, endDate: endDate, locationId: locationId};
    if(pageNum) payload.pageNum = pageNum;
    return http.post('/reports/emailRepliedEngagement', payload)
  },
  getSmsOpenedEngagement(startDate, endDate, locationId, pageNum) {
    var payload = {startDate: startDate, endDate: endDate, locationId: locationId};
    if(pageNum) payload.pageNum = pageNum;
    return http.post('/reports/SmsOpenedEngagement', payload)
  },
  getSmsRepliedEngagement(startDate, endDate, locationId, pageNum) {
    var payload = {startDate: startDate, endDate: endDate, locationId: locationId};
    if(pageNum) payload.pageNum = pageNum;
    return http.post('/reports/SmsRepliedEngagement', payload)
  },
}