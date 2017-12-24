let windowController = require('../controllers/window');

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
      windowController[operation]('all').then((response) => {
        resolve(createResponse(response));
      })
    } else {
      reject(createErrorResponse(400));
    }
    
  })
}


module.exports = model;