// TransitViewWeather
// Matthew Horger
// Drexel University
// Utilizes usage of Apache License, Version 2.0, found here -  http://aws.amazon.com/apache2.0/

'use strict';
var https = require('https');


exports.handler = function index(event, context, callback) {
    var options = {
    host: 'api.openweathermap.org', // connect to quizlet API
    port: 443,
    path: '/data/2.5/weather?q=Philadelphia&appid=c7108cad625b9e79582c6512938c3a5a',
    method: 'GET'
    };

    var req = https.request(options, function(res) {
        var body = '';
        console.log('Status:', res.statusCode);
        console.log('Headers:', JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            body += chunk;
        });
        res.on('end', function() {
            console.log('Successfully processed HTTPS response');
            body = JSON.parse(body); //
            console.log(body); // log the data just for debug
        });
    });
    req.end(); // actually executes our code
};
