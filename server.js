#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var fs = require('fs');


var app = express();
app.use(express.static(__dirname + "/public"));
var devloper =
    [
        { first: "santosh", last: "singh" },
        { first: "john", last: "doe" }


    ];

app.get("/rest/developer", function (req, res) {

    res.json(devloper);
});

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.listen(port,ip);