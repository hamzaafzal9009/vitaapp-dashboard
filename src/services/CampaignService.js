import http from './http-common'

export default {
  testMigration() {
    return http.post('/campaign/testMigration');
  },
  testCampaignMessage(message, locationId, email, phone, name, type) {
    
    return http.post('/campaign/sendTest', {message: message, locationId: locationId, email: email, phone: phone, name: name, type: type});
  },
  getPausedCampaign(campaignId) {
    return http.post('/campaign/getPaused', {campaignId: campaignId})
  },
  getTemporaryId() {
    return http.post('/campaign/generateId');
  },
  getEmailDesign(searchObject) {
    return http.post('/campaign/getEmailDesign', searchObject);
  },
  getCampaigns() {
    return http.get('/campaign/all')
  },
  searchCampaigns(searchObject) {
    return http.post('/campaign/search', searchObject);
  },
  getCampaign(campaignId) {
    return http.get('/campaign/find/' + campaignId);
  },
  getRedirectCampaign(campaignId, action) {
    return http.get('/campaign/forStep/' + campaignId + '/' + action);
  },
  getCampaignByType(locationId, type) {
    return http.post('/campaign/byType', {locationId: locationId, type: type});
  },
  getCampaignsByLocation(locationId, type) {
    return http.post('/campaign/byLocation', {locationId: locationId, type: type});
  },
  getCampaignLogs(campaignId) {
    return http.get('/campaign/logs/' + campaignId)
  },
  saveCampaign(campaign) {
    if(campaign.campaignId) {
      return http.post('/campaign/update', campaign);
    } else {
      return http.post('/campaign/create', campaign);
    }
  },
  updateCampaign(campaign) {
    return http.post('/campaign/update', campaign);
  },
  changeCampaignStatus(campaignId, status) {
    return http.post('/campaign/changeStatus', {campaignId: campaignId, status: status})
  },
  unsubscribe(campaignId) {
    return http.get('/campaign/unsubscribe/' + campaignId);
  },
  saveImageToFile(imageData) {
    return http.post('/images/save', {imageData: imageData});
  },
  retrieveImage(imageId) {
    return http.get('/get/' + imageId);
  }
}