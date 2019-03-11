// TransitViewWeather
// Matthew Horger
// Drexel University
// Utilizes usage of Apache License, Version 2.0, found here -  http://aws.amazon.com/apache2.0/

'use strict';
var https = require('https');
var mysql = require('mysql');

exports.handler = function (intent, session, callback) {
    var options = {
    host: 'api.openweathermap.org', // connect to OpenWeather API
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
            var rain, snow, gust; // need these variables to set defaults in case they are empty for the SQL query
            if(body.rain == undefined){
                body.rain = [];
                body.rain["1h"] = null;
            }
            if(body.snow == undefined){
                body.snow = [];
                body.snow["1h"] = null;
            }
            if(body.wind.gust == undefined){
                body.wind.gust = null;
            }

            body.main.temp = (body.main.temp - 273.15) * 9/5 + 32; // convert temperature into cel. and then into far.
            body.wind.speed = (body.wind.speed * 2.237);
            body.visibility = body.visibility / 1609.344;
            if(body.wind.gust != undefined){
                body.wind.gust = (body.wind.gust * 2.237);
            }

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

            var sql = "INSERT INTO Philadelphia VALUES('"
                + body.weather[0].main +"','"+
                  body.weather[0].description +"',"+
                  body.rain["1h"] +","+
                  body.snow["1h"] +","+
                  body.main.temp +","+
                  body.main.pressure +","+
                  body.main.humidity +","+
                  body.visibility +","+
                  body.wind.speed +","+
                  body.wind.gust +","+
                  body.clouds.all +", CONVERT_TZ(Now(), 'GMT', 'EST'));";
          console.log(sql);
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
