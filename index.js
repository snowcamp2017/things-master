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
require('./k33g-service')(app)

require('./babs-service')(app)

require('./buster-service')(app)


app.listen(port);
console.log(`🌍 Web Application is started - listening on ${port}`);
