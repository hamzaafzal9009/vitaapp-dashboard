import http from './http-common';

export default {
  getAccounts(pageNum) {
      var url = '/account/all';
      if(pageNum) url += '/' + pageNum;
      return http.get(url)
  },
  searchAccountsAdvanced(searchObject) {
    return http.post('/account/search', searchObject)
  },
  getAccount(accountId) {
    return http.post('/account/get/' + accountId)
  },
  saveAccount(account) {
    if(account.accountId) {
      return http.post('/account/update', account)
    } else {
      return http.post('/account/create', account)
    }
  },
  activateAccount(accountId) {
    return http.get('/account/activate/' + accountId)
  },
  deactivateAccount(accountId) {
    return http.get('/account/deactivate/' + accountId)
  },
  deleteAccount(accountId) {
    return http.get('/account/delete/' + accountId)
  },
  associateLocationWithAccount(locationId, accountId) {
    return http.post('/location/setAccount', {locationId: locationId, accountId: accountId})
  }
}