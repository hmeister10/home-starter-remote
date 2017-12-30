mqttUtils = require('../utils/mqttUtils');
userUtils = require('../utils/userUtils');

module.exports = {
  control: (which, action) => {
    return new Promise((resolve, reject) => {
      userUtils.get().then((data) => {
        console.log(data);
        mqttUtils.publish(data.hub, 'window', action);
        resolve(`${action}ing ${which} windows`);
      }).catch(() => {
        reject('failed to get user data');
      });
    })
  }
};