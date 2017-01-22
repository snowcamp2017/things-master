const express = require("express");
const bodyParser = require("body-parser");
const Promise = require('promise');
const fetch = require('node-fetch');

const port = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

// add your service
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

app.listen(port);
console.log(`🌍 Web Application is started - listening on ${port}`);
