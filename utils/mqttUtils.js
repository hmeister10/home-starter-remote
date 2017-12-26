var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://m14.cloudmqtt.com', {
  username: "fyrroels",
  password: "1H7UyvEDvfOB",
  port: 17502,

});

init = () => {
  
   
  client.on('connect', function () {
    client.subscribe('test1')
  })
   
  client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
  })
}


open = () => {
  init();
  client.publish('test/1', 'open windows')  
}

close = () => {
  init();
  client.publish('test/2', 'close windows')  
}

module.exports = {open, close};

