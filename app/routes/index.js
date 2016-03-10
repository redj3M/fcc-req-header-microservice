'use strict';

var headerParser = require(process.cwd() + '/app/common/headerParser.js');

module.exports = function(app) {
    app.route('/')
        .get(function(req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });
    app.route('/api/whoami')
        .get(function(req, res) {
            res.send(headerParser(req.headers))
        });
};