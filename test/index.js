'use strict';

var p2pspider = require('../lib/index');
var guessit = require('guessit-wrapper');

p2pspider(
    {
        address: '0.0.0.0',
        port: 6881,
        nodesMaxSize: 200,   // be careful
        maxConnections: 400, // be careful
        timeout: 5000,
        filter: function(infohash, callback) {
            var theInfohashIsExistsInDatabase = false;
            callback(theInfohashIsExistsInDatabase);
        }
    },
    function(metadata) {
        var torrent_name = metadata.info['name'].toString('utf8');
        guessit.parseName(torrent_name).then(function (data) {
            console.log(data);
        });
    }
);
