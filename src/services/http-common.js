import axios from 'axios';
import config from '../config';

const http = axios.create({
  baseURL: config.baseUrl,
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': -1
  }
});

http.interceptors.request.use(function (httpConfig) {
  var token = localStorage.getItem('token');
  if (token) {
    httpConfig.headers.token = token;
  }
  return httpConfig;
}, function(error) {
  console.log(error);
  return error;
});

http.interceptors.response.use(function(response) {
  if (response.headers.token) {
    try {
      localStorage.setItem('token', response.headers.token);
    } catch (error) {
      console.log
    }
    if (window.idleTimer) clearTimeout(window.idleTimer);
    window.idleTimer = setTimeout(function() {
      window.location = '/login/idle';
    }, 900000);
  }
  return response.data;
}, function (error) {
  if (error.response && (error.response.status === 403)) {
    localStorage.removeItem('token');
    window.location = '/login';
  }
  return Promise.reject(error);
});

export default http;
