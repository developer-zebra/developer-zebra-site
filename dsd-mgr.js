#!/bin/env node
//  OpenShift sample Node application
var express = require('express'),
    fs      = require('fs'),
    Firebase = require('firebase'),
    firebaseURL = 'https://docs2device.firebaseIO.com',
    myRootRef = new Firebase(firebaseURL),
    firebaseSecret = 'tcK008BaUFHjtCR5tYauSTlXLiMDBKEKfuk1DKec',
    bodyParser = require('body-parser'),
    path = require('path'),
    wrench = require('wrench');

//  Set the environment variables we need.
var ipaddress = "127.0.0.1";
var port      = 8080;

var app = express();
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    next();
 });

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(path.join(__dirname, 'dsdmgr')));

app.post('/dsd',  function(req, res){

    var json = req.body

    var json_file = 'dsdmgr/dsds/' + json.name +'.json';
    console.log("Writing to: " + json_file);
    fs.open(json_file, 'w', function(err, fd) {
       if (err) {
           return console.error(err);
       }
      console.log("Created json:" + json_file);     
    });        
    fs.writeFile(json_file, JSON.stringify(json), function(err) {
        if(err) {
            console.error("Could not write file" + json_file + ": %s", err);
            res.status(400).json({message: "Shared line not available"})
        }
        res.status(200).json({message: json_file + " created"})
    });

})

app.get('/dsds', function (req, res) {
    var files = wrench.readdirSyncRecursive(path.join(__dirname, 'dsdmgr/dsds'));
    var dsds = [];
    for (var f = 0; f < files.length; f++) {
        if(path.extname(files[f]) == ".dsd"){
            files[f] = "dsds/" + files[f];
            dsds.push(files[f]);
        }
    }

    res.send(dsds);

});

//  Start the app on the specific interface (and port).
app.listen(port, ipaddress, function() {
    console.log('%s: Node server started on %s:%d ...',
                Date(Date.now() ), ipaddress, port);
});