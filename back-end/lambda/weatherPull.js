// TransitViewWeather
// Matthew Horger
// Drexel University
// Utilizes usage of Apache License, Version 2.0, found here -  http://aws.amazon.com/apache2.0/

'use strict';
var https = require('https');
var mysql = require('mysql');

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
            body = JSON.parse(body);
            body = parseData(body); // parse our data into our DB Units

            // need to call DB to insert info
            var con = mysql.createConnection({
                  host: "weatherdata.ccgbnu8qerao.us-east-1.rds.amazonaws.com",
                  user: "lambda",
                  password: "lambda",
                  database: "weatherview"
                });

            con.connect(function(err) {
              if (err) throw err;
              console.log("Connected!");
            });

            var sql = "SELECT * FROM Philadelphia";
            con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Result: " + result);
            });
            con.end();


            callback(null, body);
        });
    });
    req.end(); // actually executes our code


};

function parseData(body){
    body.main.temp = (body.main.temp - 273.15) * 9/5 + 32; // convert temperature into cel. and then into far.
    body.main.pressure = (body.main.pressure / 1013.25); // convert atm to MB, a more accepted unit for us Americans
    body.wind.speed = (body.wind.speed * 2.237); // convert to MPH
    if(body.wind.gust != undefined){
        body.wind.gust = (body.wind.gust * 2.237);
    }
    return body;
}
