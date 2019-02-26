// TransitViewWeather
// Matthew Horger
// Drexel University
// Utilizes usage of Apache License, Version 2.0, found here -  http://aws.amazon.com/apache2.0/

'use strict';
var https = require('https');


exports.handler = function (intent, session, callback) {
    var options = {
    host: 'api.openweathermap.org', // connect to quizlet API
    port: 443,
    path: '/data/2.5/weather?q=Philadelphia&appid=c7108cad625b9e79582c6512938c3a5a',
    method: 'GET'
    };
    var body = '';
    var req = https.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            body += chunk;
        });
        res.on('end', function() {
            body = JSON.parse(body); //
            callback(null, body);
        });
    });
    req.end(); // actually executes our code
};
