
init = () => {
  var mqtt = require('mqtt')
  var client  = mqtt.connect('mqtt://m14.cloudmqtt.com', {
    username: "fyrroels",
    password: "1H7UyvEDvfOB",
    port: 17502,
  
  })
   
  client.on('connect', function () {
    client.subscribe('test1')
    client.publish('test/1', 'open windows')
  })
   
  client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
  })
}

module.exports = {init};

