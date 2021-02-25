var languageData = {
  reviewRedirect: {
    en: {
      tellMore: '',
      urRedirect: '',
      buttonText: '',
      instructions: '',
      ifNotRedirect: ''
    },
    es: {
      tellMore: '',
      urRedirect: '',
      buttonText: '',
      instructions: '',
      ifNotRedirect: ''
    }
  },
  leaveReview: {
    en: {
    },
    es: {
    }
  }
};

export default {
  getPageText(pageName, language) {
    if (languageData && languageData[pageName] && languageData[pageName][language]) {
      return languageData[pageName][language];
    } else {
      return {};
    }
  }
};
