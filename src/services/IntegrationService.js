import http from "./http-common";

export default {
  saveIntegration(integration, integrationObj) {
    return http.post('/apis/create/' + integration, integrationObj)
  },
  getIntegrations() {
    return http.get('/apis/all')
  },
  activateIntegration(id) {
    return http.post('/apis/activate', {id: id})
  },
  deactivateIntegration(id) {
    return http.post('/apis/deactivate', {id: id})
  },
  updateIntegration(integration) {
    return http.post('/apis/update', {integration: integration})
  },
  getProperties(integrationData) {
    return http.post('/apis/getProperties', {data: integrationData})
  },
  getCurrentTenantList(id) {
    return http.post('/apis/getCurrentTenantList', {id: id})
  },
  testIntegration(id) {
    return http.post('/apis/testIntegration', {id: id})
  }
};
