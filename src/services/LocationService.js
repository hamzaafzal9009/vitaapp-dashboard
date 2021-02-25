import http from './http-common'
import axios from 'axios';

export default {
  getLocations(pageNum) {
    var url = '/location/all/';
    if (pageNum) url += '/' + pageNum;
    return http.get(url)
  },
  getLocation(locationId) {
    return http.get('/location/' + locationId)
  },
  getNonDeletedLocations() {
    return http.get('/location/allNonDeleted')
  },
  searchLocationsAdvanced(searchObject) {
    return http.post('/location/search', searchObject)
  },
  getAnonymousLocation(locationId) {
    return http.get('/location/anon/' + locationId)
  },
  getLocationCustomers(locationId, pageNum) {
    var url = '/location/customers/' + locationId;
    if (pageNum) url += '/' + pageNum;
    return http.get(url)
  },
  getAllLocationCustomers(locationId, style) {
    return http.post('/location/allOutreachCustomers', {locationId: locationId, style: style});
  },
  getAllLocationCustomerTags(locationId, style) {
    return http.post('/location/allCustomerTags', {locationId: locationId, style: style});
  },
  getAvailableCustomerTags(searchObject) {
    return http.post('/location/customerTags', {searchObject});
  },
  getLocationUploads(locationId, pageNum) {
    var url = '/location/uploads/' + locationId;
    if (pageNum) url += '/' + pageNum;
    return http.get(url)
  },
  getLocationCampaigns(locationId) {
    if(locationId) {
      return http.get('/location/campaigns/'+ locationId);
    } else {
      return http.get('/location/campaigns');
    }
  },
  deleteLocation(locationId) {
    return http.get('/location/delete/' + locationId)
  },
  setLocationWebhook(locationId, webhook) {
    return http.post('/location/setWebhook', {locationId, locationId, webhook: webhook})
  },
  setLocationCustomerLimits(locationId, monthlyLimit, totalLimit) {
    return http.post('/location/setCustomerLimits', {locationId, locationId, monthlyLimit: monthlyLimit, totalLimit: totalLimit})
  },
  setLocationStatus(locationId, status) {
    return http.post('/location/setStatus', {locationId, locationId, status: status})
  },
  linkLocationGMB(locationId, gmbPath, gmbAccessToken) {
    return http.post('/location/linkGMB', {locationId, locationId, gmbPath: gmbPath, gmbAccessToken: gmbAccessToken})
  },
  setEmailBCCList(locationId, bccList) {
    return http.post('/location/setEmailBCCList', {locationId, locationId, bccList: bccList})
  },
  setLocationRotatorEnabled(locationId, rotatorsDisabled) {
    return http.post('/location/setRotatorsDisabled', {locationId: locationId, rotatorsDisabled: rotatorsDisabled})
  },
  // getUsersForLocation(locationId) {
  //   return http.get('/location/forlocation/' + locationId)
  // },
  saveLocation(location) {
    if(location.locationId) {
      return http.post('/location/update', location);
    } else {      
      return http.post('/location/create', location);
    }
  },
  updateReviewsList(locationId, reviewsList) {
    return http.post('/location/changeReviewsList', {locationId: locationId, reviewsList: reviewsList})
  },
  setLocationMailbox(locationId, incomingEmail) {
    return http.post('/location/setMailbox', {locationId: locationId, incomingEmail: incomingEmail})
  },
  getEmailUsersForLocation(locationId) {
    return http.get('/location/emailUsers/' + locationId);
  },
  rerequestByRating(locationId, rating) {
    return http.post('/customer/requestAgainByRating', {locationId: locationId, rating: rating});
  },
  rerequestAll(locationId) {
    return http.post('/customer/requestAgainByLocation', {locationId: locationId});
  },
  getAssociatedLocations(accountId) {
    return http.post('/location/assignedToAccount', {accountId: accountId});
  },
  removeLocationAssociation(locationId) {
    return http.post('/location/removeAccountAssociation', {locationId: locationId});
  },
  addTagToLocation(tag, locationId) {
    return http.post('/location/addTag/' + locationId, {tag: tag})
  },
  removeTagFromLocation(tag, locationId) {
    return http.post('/location/removeTag/' + locationId, {tag: tag})
  },
  setAutomations(locationId, automations) {
    return http.post('/location/setAutomationStatus', {locationId: locationId, automations: automations})
  },
  getLocationAutomations(locationId) {
    return http.post('/location/automations/forLocation/' + locationId)
  },
  setTCPAAgreement(locationId, userData) {
    return http.post('/location/addTCPAAgreement', {locationId: locationId, userData: userData})
  },
  fetchGMBLocations(token) {
    return new Promise(function(resolve, reject) {
      axios.get('https://mybusiness.googleapis.com/v4/accounts?access_token=' + token)
        .then(function(rawAccountRes) {
          if (!rawAccountRes || !rawAccountRes.data || rawAccountRes.status != 200) {
            vm.linkError = 'Error retrieving Google account.';
          } else {
            var accountList = rawAccountRes.data.accounts;
            if (!accountList) {
              vm.linkError = 'Error finding Google account.';
            } else {
              var locationList = [];
              var accountsChecked = 0;
              var expectedAccounts = accountList.length;
              for (var i=0; i<expectedAccounts; i++) {
                axios.get('https://mybusiness.googleapis.com/v4/' + accountList[i].name + '/locations?access_token=' + token)
                  .then(function(locationRes) {
                    if (locationRes && locationRes.data && locationRes.data.locations) {
                      locationList = locationList.concat(locationRes.data.locations);
                    }
                    accountsChecked++;
                    if (accountsChecked == expectedAccounts) {
                      resolve(locationList);
                    }
                  }).catch(function(error) {
                    reject(error);
                  });
              }
            }
          }
        }).catch(function(error) {
          reject(error);
        });
    });
  }
}
