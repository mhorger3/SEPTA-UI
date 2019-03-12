// TransitViewTrolley
// Matthew Horger
// Drexel University
// Utilizes usage of Apache License, Version 2.0, found here -  http://aws.amazon.com/apache2.0/

'use strict';
var https = require('https');
var mysql = require('mysql');

exports.handler = function (intent, session, callback) {
  route10();
  route11();
  route13();
  route15();
  route34();
  route36();
  route101();
  route102();
  callback(null);
};

function route10(){
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
                password: "lambda"
              });

              con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
              });

              var sql = "INSERT INTO Trolley.ROUTE_10 VALUES("
                  + body.bus[trolley].lat +","+
                    body.bus[trolley].lng +","+
                    body.bus[trolley].trip +","+
                    body.bus[trolley].VehicleID +",'"+
                    body.bus[trolley].Direction +"','"+
                    body.bus[trolley].destination +"',"+
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
}

function route11(){
  var options = {
  host: 'www3.septa.org', // connect to quizlet API
  port: 443,
  path: '/hackathon/TransitView/11',
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
                password: "lambda"
              });

              con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
              });

              var sql = "INSERT INTO Trolley.ROUTE_11 VALUES("
                  + body.bus[trolley].lat +","+
                    body.bus[trolley].lng +","+
                    body.bus[trolley].trip +","+
                    body.bus[trolley].VehicleID +",'"+
                    body.bus[trolley].Direction +"','"+
                    body.bus[trolley].destination +"',"+
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
}

function route13(){
  var options = {
  host: 'www3.septa.org', // connect to quizlet API
  port: 443,
  path: '/hackathon/TransitView/13',
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
                password: "lambda"
              });

              con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
              });

              var sql = "INSERT INTO Trolley.ROUTE_13 VALUES("
                  + body.bus[trolley].lat +","+
                    body.bus[trolley].lng +","+
                    body.bus[trolley].trip +","+
                    body.bus[trolley].VehicleID +",'"+
                    body.bus[trolley].Direction +"','"+
                    body.bus[trolley].destination +"',"+
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
}

function route15(){
  var options = {
  host: 'www3.septa.org', // connect to quizlet API
  port: 443,
  path: '/hackathon/TransitView/15',
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
                password: "lambda"
              });

              con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
              });

              var sql = "INSERT INTO Trolley.ROUTE_15 VALUES("
                  + body.bus[trolley].lat +","+
                    body.bus[trolley].lng +","+
                    body.bus[trolley].trip +","+
                    body.bus[trolley].VehicleID +",'"+
                    body.bus[trolley].Direction +"','"+
                    body.bus[trolley].destination +"',"+
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
}

function route34(){
  var options = {
  host: 'www3.septa.org', // connect to quizlet API
  port: 443,
  path: '/hackathon/TransitView/34',
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
                password: "lambda"
              });

              con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
              });

              var sql = "INSERT INTO Trolley.ROUTE_34 VALUES("
                  + body.bus[trolley].lat +","+
                    body.bus[trolley].lng +","+
                    body.bus[trolley].trip +","+
                    body.bus[trolley].VehicleID +",'"+
                    body.bus[trolley].Direction +"','"+
                    body.bus[trolley].destination +"',"+
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
}

function route36(){
  var options = {
  host: 'www3.septa.org', // connect to quizlet API
  port: 443,
  path: '/hackathon/TransitView/36',
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
                password: "lambda"
              });
              con.query('SET GLOBAL connect_timeout=28800');
              con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
              });

              var sql = "INSERT INTO Trolley.ROUTE_36 VALUES("
                  + body.bus[trolley].lat +","+
                    body.bus[trolley].lng +","+
                    body.bus[trolley].trip +","+
                    body.bus[trolley].VehicleID +",'"+
                    body.bus[trolley].Direction +"','"+
                    body.bus[trolley].destination +"',"+
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
}

function route101(){
  var options = {
  host: 'www3.septa.org', // connect to quizlet API
  port: 443,
  path: '/hackathon/TransitView/101',
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
                password: "lambda"
              });

              con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
              });

              var sql = "INSERT INTO Trolley.ROUTE_101 VALUES("
                  + body.bus[trolley].lat +","+
                    body.bus[trolley].lng +","+
                    body.bus[trolley].trip +","+
                    body.bus[trolley].VehicleID +",'"+
                    body.bus[trolley].Direction +"','"+
                    body.bus[trolley].destination +"',"+
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
}

function route102(){
  var options = {
  host: 'www3.septa.org', // connect to quizlet API
  port: 443,
  path: '/hackathon/TransitView/102',
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
                password: "lambda"
              });

              con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
              });

              var sql = "INSERT INTO Trolley.ROUTE_102 VALUES("
                  + body.bus[trolley].lat +","+
                    body.bus[trolley].lng +","+
                    body.bus[trolley].trip +","+
                    body.bus[trolley].VehicleID +",'"+
                    body.bus[trolley].Direction +"','"+
                    body.bus[trolley].destination +"',"+
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
}
