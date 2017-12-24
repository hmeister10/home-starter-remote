module.exports = {
  open: (which) => {
    return new Promise((resolve, reject) => {
      resolve('opening ' +  which + ' windows');
    })
    
  },
  close: (which) => {
    return new Promise((resolve, reject) => {
      resolve('closing ' +  which + ' windows');
    })
  },
};