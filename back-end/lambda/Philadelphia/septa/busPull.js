// TransitViewWeather
// Matthew Horger
// Drexel University
// Utilizes usage of Apache License, Version 2.0, found here -  http://aws.amazon.com/apache2.0/

'use strict';
var https = require('https');
var mysql = require('mysql');

exports.handler = function (intent, session, callback) {
    var options = {
    host: 'www3.septa.org', // connect to SEPTA API
    port: 80,
    path: '/hackathon/TransitViewAll/',
    method: 'GET'
    };
    var body = '';
    var req = https.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            body += chunk;
        });
        res.on('end', function() {
            body = JSON.parse(body);
            callback(null, body);
        });
    });
    req.end(); // actually executes our code


};
