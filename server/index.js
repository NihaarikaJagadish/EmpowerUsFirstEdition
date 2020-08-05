const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');

var macaddress = require('macaddress');

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('Server started at port : 3000'));

console.log("The MAC id is :")

macaddress.one(function (err, mac) {
    console.log("Mac address for this host: %s", mac);  
});
