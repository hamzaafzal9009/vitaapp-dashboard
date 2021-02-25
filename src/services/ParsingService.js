import http from './http-common'

export default {
  parseXLSX(file) {
    return http.post('/parsing/parseXLSX', {file: file})
  },

  saveParsingRules(mailbox, parsingRules, ruleId) {
    if (ruleId) {
      return http.post('/parsing/update', {ruleId: ruleId, mailbox: mailbox, parsingRules: parsingRules});
    } else {
      return http.post('/parsing/create', {mailbox: mailbox, parsingRules: parsingRules});
    }
  },

  getParsingRules(mailbox) {
    if(mailbox) {
      return http.get('/parsing/mailbox/' + mailbox)
    } else {
      return http.get('/parsing/all');
    }
  },

  getParsingRule(parseId) {
    return http.get('/parsing/' + parseId)
  },

  getSampleMail() {
    return http.get('/parsing/sampleMail');
  },

  changeParsingRuleStatus(parseId, status) {
    return http.post('/parsing/changeStatus', {parsingId: parseId, status: status});
  },

  getProcessedEmails(mailbox) {
    return http.get('/parsing/processed/' + mailbox);
  }
}