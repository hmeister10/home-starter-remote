
const hub = 'hub_himanshu';

module.exports = {
  hub,
  get: () => {
    return new Promise(function(resolve, reject) {
      resolve({
        hub
      });
    });
  }
}