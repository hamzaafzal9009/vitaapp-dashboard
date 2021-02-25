import http from './http-common'

export default {
  getDashboardData() {
    return http.get('/dashboard')
  },
  getAdminDashboardData() {
    return http.get('/dashboard/admin')
  },
  getPrivateFeedbackData(locationId) {
    return new Promise(function(resolve, reject) {
      var url = '/feedback/recentPrivateFeedback';

      if (locationId) url += '/' + locationId;

      http.get(url).then(function(response) {
        resolve(response);
      }).catch(function(err) {
        reject(err);
      });

    });
  },
  getPublicFeedbackData() {
    return new Promise(function(resolve, reject) {
      var locationId = localStorage.getItem('locationId');
      var searchObj = {source : 'Public', limit: 5};
      if (locationId) searchObj.locationId = locationId;
      http.post('/feedback/search/', searchObj).then(function(response) {
        resolve(response.results);
      }).catch(function(err) {
        reject(err);
      });
    });
  },
  getRecentPublicReviewsData() {
    return new Promise(function(resolve, reject) {
      var locationId = localStorage.getItem('locationId');
      var url = '/feedback/recentPublicReviews';

      if (locationId) url += '/' + locationId;

      http.get(url).then(function(response) {
        resolve(response);
      }).catch(function(err) {
        reject(err);
      });
    });
  },
  getPositiveFeedbackData() {
    return new Promise(function(resolve, reject) {
      var locationId = localStorage.getItem('locationId');
      var searchObj = {minRating: 4, limit: 5};
      if (locationId) searchObj.locationId = locationId;
      http.post('/feedback/search/', searchObj).then(function(response) {
        resolve(response.results);
      }).catch(function(err) {
        reject(err);
      });
    });
  },
  getAllPositiveFeedbackData() {
    return new Promise(function(resolve, reject) {
      http.get('/feedback/positive').then(function(response) {
        resolve(response);
      }).catch(function(err) {
        reject(err);
      });
    })
  },
  getAllNegativeFeedbackData() {
    return new Promise(function(resolve, reject) {
      http.get('/feedback/negative').then(function(response) {
        resolve(response);
      }).catch(function(err) {
        reject(err);
      });
    })
  },
  getInteractionData(locationId) {
    var payload = {locationId: locationId};
    return http.post('/reports/customerInteractions', payload);
  },
  getNewCustomers(searchObject) {
    return http.post('/reports/newCustomers', searchObject);
  },
  getActiveCampaigns(searchObject) {
    return http.post('/reports/activeCampaigns', searchObject);
  },
  getOpiniionRating(searchObject) {
    return http.post('/reports/opiniionRating', searchObject);
  },
  getNewCustomersByMonth() {
    var locationId = localStorage.getItem('locationId');
    if (locationId) {
      return http.get('/reports/newCustomersByMonth/' + locationId)
    } else {
      return http.get('/reports/newCustomersByMonth')
    }
  },
  getTotalCustomers() {
    var locationId = localStorage.getItem('locationId');
    if (locationId) {
      return http.get('/reports/totalCustomers/' + locationId)
    } else {
      return http.get('/reports/totalCustomers')
    }
  },
  getTotalCustomersByMonth() {
    var locationId = localStorage.getItem('locationId');
    if (locationId) {
      return http.get('/reports/totalCustomersByMonth/' + locationId)
    } else {
      return http.get('/reports/totalCustomersByMonth')
    }
  },
  getBusinessInfo() {
    return new Promise(function(resolve, reject) {
      var locationId = localStorage.getItem('locationId');
      if (locationId) {
        http.get('/location/' + locationId).then(function(response) {
          resolve(response);
        }).catch(function(err) {
          reject(err);
        });
      } else {
        http.get('/user/locationsCount').then(function(response) {
          resolve(response.count);
        }).catch(function(err) {
          reject(err);
        });
      }
    });
  },
  getOpiniionAggregate() {
    var locationId = localStorage.getItem('locationId');
    if (locationId) {
      return http.get('/reports/opiniionAggregateScore/' + locationId)
    } else {
      return http.get('/reports/opiniionAggregateScore')
    }
  },
  getReviewsBySource(searchObject) {
    return http.post('/reports/reviewsbySource', searchObject);
  },
  getWordCloud(locationId) {
    if(locationId) {
      return http.get('/reports/wordCloud/' + locationId)
    } else {
      return http.get('/reports/wordCloud' )
    }
  },
  getPhrases(word, locationId) {
    if(locationId) {
      return http.get('/reports/phrases/' + word + '/' + locationId)
    } else {
      return http.get('/reports/phrases/' + word )
    }
  }
}