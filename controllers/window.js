mqttUtils = require('../utils/mqttUtils');
module.exports = {
  open: (which) => {
    return new Promise((resolve, reject) => {
      mqttUtils.open();
      resolve('opening ' +  which + ' windows');
    })
    
  },
  close: (which) => {
    return new Promise((resolve, reject) => {
      mqttUtils.close();
      resolve('closing ' +  which + ' windows');
    })
  },
};