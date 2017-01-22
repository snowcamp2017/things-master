const fetch = require('node-fetch');

module.exports = function(app) {
  app.get('/sensors/babs-sensor', (req, res) => {

    fetch('http://snow-demo-babs.cleverapps.io/sensors/babs-sensor', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => response.json())
    .then(jsonData => res.send(jsonData));
  });
}