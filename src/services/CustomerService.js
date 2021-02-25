import http from './http-common'

export default {
  getCustomers(pageNum) {
    var url = '/customer/all';
    if (pageNum) url += '/' + pageNum
    return http.get(url)
  },
  searchCustomers(string, id, pageNum) {
    if(id) {
      var url = '/customer/searchLocation/' + string + '/' + id;
      if (pageNum) url += '/' + pageNum;
      return http.get(url);
    } else {
      var url = 'customer/search/' + string;
      if (pageNum) url += '/' + pageNum;
      return http.get(url)
    }
  },
  searchCustomersAdvanced(searchObject) {
    return http.post('/customer/search', searchObject)
  },
  searchCustomersByFilters(locationId, filters) {
    return http.post('/customer/byFilters', {locationId: locationId, filters: filters});
  },
  searchCustomerEngagement(searchObject) {
    return http.post('/customer/engagement', searchObject)
  },
  getCustomersByLocations(ids) {
    return http.post('/customer/byLocations', {locationIds: ids})
  },
  getCustomerLogs(customerId) {
    return http.get('/customer/logs/' + customerId)
  },
  getCustomer(customerId) {
    return http.get('/customer/' + customerId)
  },
  setCustomerStatus(customerId, status) {
    return http.post('/customer/update', {customerId, status})
  },
  saveCustomer(customer) {
    if (customer.customerId) {
      return http.post('/customer/update', customer);
    } else {
      return http.post('/customer/create', customer);
    }
  },
  saveManyCustomers(locationId, template, status, customerList) {
    return http.post('/customer/createMany', { locationId, template, status, customerList });
  },
  reRequest(locationId, customerList, template) {
    return http.post('/customer/requestAgain', { locationId, customerList, template });
  },
  deleteCustomer(customerId) {
    return http.get('/customer/delete/' + customerId)
  },
  unsubscribe(customerId) {
    return http.get('/customer/unsubscribe/' + customerId)
  },
  respondToCustomer(customerId, method, message, subject, date) {
    return http.post('/customer/contact', {customerId: customerId, method: method, message: message, subject: subject, date: date})
  },
  getCustomerLogsForChat(locationId, customerId) {
    return http.get('/customer/getLogs/' + locationId + '/' + customerId)
  },
  getAllCustomers(locationId) {
    return http.post('/customer/getAll', {locationId: locationId})
  },
  addTagToCustomer(tag, customerId) {
    return http.post('/customer/addTag/' + customerId, {tag: tag})
  },
  removeTagFromCustomer(tag, customerId) {
    return http.post('/customer/removeTag/' + customerId, {tag: tag})
  },
  addCustomerNote(customerId, note) {
    return http.post('/customer/addNote', {customerId: customerId, note: note})
  },
  removeCustomerNote(customerId, note) {
    return http.post('/customer/removeNote', {customerId: customerId, note: note})
  },
  addCustomerEngagementLog(customerId, log) {
    return http.post('logs/addLog', {customerId: customerId, log: log})
  },
  findPossibleCustomerMatches(feedback, customer) {
    return http.post('customer/findMatches', {feedback: feedback, customer: customer});
  },
  scrubLocationCustomerList(locationId) {
    return http.get('/customer/dedupeLocation/' + locationId);
  },
}