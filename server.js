'use strict';

var express = require('express');
var app = express();
var useragent = require('useragent');
useragent(true);

app.get('/', (req, res) => {
    
    let b_info = {
        'ip address': req.ip,
        'language': req.headers['accept-language'],
        'software': useragent.parse(req.headers['user-agent']).toAgent()
    };
    
    res.send(b_info);
});

app.listen(process.env.PORT, () => {
    console.log('Listening on port ' + process.env.PORT + ".");
});