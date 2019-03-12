// TransitViewTrolley
// Matthew Horger
// Drexel University
// Utilizes usage of Apache License, Version 2.0, found here -  http://aws.amazon.com/apache2.0/

'use strict';
var https = require('https');
var mysql = require('mysql');

exports.handler = function (intent, session, callback) {
    var options = {
    host: 'www3.septa.org', // connect to quizlet API
    port: 443,
    path: '/hackathon/TransitView/10',
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
            for (var trolley in body.bus)
            {
                var con = mysql.createConnection({
                  host: "septa01.ccgbnu8qerao.us-east-1.rds.amazonaws.com",
                  user: "lambda",
                  password: "lambda",
                  database: "Trolley"
                });

                con.connect(function(err) {
                  if (err) throw err;
                  console.log("Connected!");
                });

                var sql = "INSERT INTO ROUTE_10 VALUES("
                    + body.bus[trolley].lat +","+
                      body.bus[trolley].lng +","+
                      body.bus[trolley].trip +","+
                      body.bus[trolley].VehicleID +",'"+
                      body.bus[trolley].Direction +"','"+
                      body.bus[trolley].destinaion +"',"+
                      body.bus[trolley].late +", CONVERT_TZ(Now(), 'GMT', 'EST'));";
                console.log(sql);
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("Result: " + result);
                });
                con.end();
            }
        });
    });
    req.end(); // actually executes our code

    callback(null, body);

};
