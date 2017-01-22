const fetch = require('node-fetch');

module.exports = function(app) {
  app.get('/sensors/buster-sensor', (req, res) => {

    fetch('http://snow-demo-buster.cleverapps.io/sensors/buster-sensor', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => response.json())
    .then(jsonData => res.send(jsonData));
  });
}