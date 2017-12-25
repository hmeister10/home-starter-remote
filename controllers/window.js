mqttUtils = require('../utils/mqttUtils');
module.exports = {
  open: (which) => {
    return new Promise((resolve, reject) => {
      mqttUtils.init();
      resolve('opening ' +  which + ' windows');
    })
    
  },
  close: (which) => {
    return new Promise((resolve, reject) => {
      resolve('closing ' +  which + ' windows');
    })
  },
};