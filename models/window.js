let windowController = require('../controllers/window');
let _ = require('lodash');

const createErrorResponse = (errorCode) => {
  let data = 'Oops something went wrong';
  switch(errorCode){
    case 400: 
      data = 'Looks like we have some bad data, please try again';
      break;
    case 500: 
      data = 'Looks like we messed up something at our end, please try again';
      break;
    default: 
      break;
  }

  return createResponse(data);
}

const createResponse = (data) => {
  return {
    "speech": data,
    "displayText": data,
    "data": {},
    "contextOut": [],
    "source": "windowController"
  }
};

const model = (data) => {
  return new Promise((resolve, reject) => {
    console.log('ENTERED WINDOW MODEL');
    let operation = _.get(data, 'result.parameters.states');
    operation = !!operation ? String(operation).toLowerCase() : '';

    switch(operation) {
      case 'open':
      case 'close':
        break;
      default: 
        operation = '';
    }
    
    console.log('PERFORMING OPERATION::', operation);
    
    if(operation !== ''){
      windowController.control('all', operation).then((response) => {
        console.log('COMPLETED OPERATION WITH RESPONSE', response);
        resolve(createResponse(response));
      }).catch(() => {
        reject(createErrorResponse(500));
      });
    } else {
      reject(createErrorResponse(400));
    }
    
  })
}


module.exports = model;