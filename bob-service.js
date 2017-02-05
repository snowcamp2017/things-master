const fetch = require('node-fetch');

module.exports = function(app) {
  app.get('/sensors/bob-sensor', (req, res) => {

    fetch('http://snow-demo-bob.cleverapps.io/sensors/bob-sensor', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => response.json())
    .then(jsonData => res.send(jsonData));
  });
}