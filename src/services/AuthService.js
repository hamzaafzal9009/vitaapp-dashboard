import http from './http-common'

export default {
  login(email, password) {
    localStorage.removeItem("token");
    localStorage.removeItem("spoofing");
    if (email) {
      return new Promise(function(resolve, reject) {
        http.post('/auth/login', {email: email, password: password})
          .then(function(response) {
            resolve(response);
          }).catch(function(error) {
            console.log(error);
            reject(error);
          });
      });
    } else {
      return new Promise(function(resolve, reject) {
        http.post('/auth/login', {})
          .then(function(response) {
            resolve(response);
          }).catch(function(error) {
            reject(error);
          });
      });
    }
  },
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("locationId");
    localStorage.removeItem("spoofing");
    window.location = '/login';
    return;
  },
  idleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("locationId");
    localStorage.removeItem("spoofing");
    window.location = '/login/idle';
    return;
  },
  setPassword(userId, token, password) {
    return http.post('/auth/setPassword', {userId: userId, token: token, password: password})
  },
  refreshActivity() {
    return http.get('/auth/refreshActivity')
  }
}