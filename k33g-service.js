const fetch = require('node-fetch');

module.exports = function(app) {
  app.get('/sensors/k33g-sensor', (req, res) => {

    fetch('http://snow-demo-k33g.cleverapps.io/sensors/k33g-sensor', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => response.json())
    .then(jsonData => res.send(jsonData));

  });
}
