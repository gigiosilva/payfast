const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

module.exports = function(){
    let app = express();

    app.use(bodyParser.json());
    
    app.use(expressValidator());

    consign()
        .include('controllers')
        .then('infrastructure')
        .into(app);

    return app;
}