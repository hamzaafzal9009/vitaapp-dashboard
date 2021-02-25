import http from './http-common'

export default {
  getUsers(pageNum) {
    var url = '/user/all';
    if (pageNum) url += '/' + pageNum;
    return http.get(url)
  },
  getUser(userId) {
    return http.get('/user/' + userId)
  },
  getCurrentUser() {
    return http.get('/user/current')
  },
  getUserRole(locationId) {
    if (locationId) {
      return http.get('/user/role/' + locationId)
    } else {
      return http.get('/user/role')
    }
  },
  getUsersByEmail(emailAddress){
    return http.get('/user/searchByEmail/' + emailAddress)
  },
  findUserByEmail(emailAddress){
    return http.get('/user/findUserEmail/' + emailAddress)
  },
  markViewedWalkthrough(emailAddress) {
    return http.post('/user/markLoggedIn', {emailAddress: emailAddress})
  },
  searchUsersAdvanced(searchObject) {
    return http.post('/user/search', searchObject)
  },
  getUserLocations(userId, pageNum) {
    var url = '/user/locations';
    if (userId) url += '/forUser/' + userId;
    if (pageNum) url += '/' + pageNum;
    return http.get(url)
  },
  getAllUserLocations() {
    return http.get('/user/allLocations')
  },
  getAssignableUserLocations(targetId) {
    return http.get('/user/assignableLocations/' + targetId)
  },
  searchAssignableUserLocations(targetId, searchString) {
    return http.get('/user/searchAssignableLocations/' + targetId + '/' + searchString)
  },
  getUsersForLocation(locationId, pageNum) {
    var url = '/user/forlocation/' + locationId;
    if (pageNum) url += '/' + pageNum;
    return http.get(url)
  },
  getEmployees(pageNum) {
    var url = '/user/employees';
    if (pageNum) url += '/' + pageNum;
    return http.get(url)
  },
  saveUser(user) {
    if (user.userId) {
      return http.post('/user/update', user);
    } else {
      return http.post('/user/create', user);
    }
  },
  activateUser(userId) {
    return http.get('/user/activate/' + userId)
  },
  deactivateUser(userId) {
    return http.get('/user/deactivate/' + userId)
  },
  deleteUser(userId) {
    return http.get('/user/delete/' + userId)
  },
  spoofUser(userId) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        try {
          var token = localStorage.getItem('token');
          http.post('/auth/spoof', {userId: userId, token: token}).then(function(response) {
            resolve({success: response.success});
          }).catch(function(err) {
            reject(err);
          });
        } catch(error) {
          console.log('Spoofing error', error);
          reject(err);
        }
      }, 500);
    });
  },
  endSpoofUser() {
    var token = localStorage.getItem('token');
    return new Promise(function(resolve, reject) {
      http.post('/auth/endSpoof', {token: token}).then(function(response) {
        resolve({success: response.success});
      }).catch(function(err) {
        reject(err);
      });
    });
  },
  saveUserLocation(userId, locationId, role, communications) {
    return http.post('/user/assign', {userId: userId, locationId: locationId, role: role, communications: communications})
  },
  removeUserLocation(userId, locationId) {
    return http.post('/user/unassign', {userId: userId, locationId: locationId})
  },
  getUserByReset(token) {
    return http.post('/user/getByReset', {token: token})
  },
  sendResetPasswordEmail(email, token) {
    return http.post('/user/sendResetEmail', {email: email, token: token})
  },
  logPageVisit(page) {
    return http.post('/logs/pageVisit', {page: page})
  },
  getUserReportPosition() {
    return http.post('/user/getUserReportPosition')
  },
  saveUserReportPosition(position) {
    return http.post('/user/setUserReportPosition', {position: position})
  },
  saveUserComms(location, user) {
    return http.post('/user/setCommunication', {location: location, user: user})
  }
}