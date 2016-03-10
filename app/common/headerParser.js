'use strict'
module.exports = function(headers) {
    var lang = headers['accept-language'];
    var os = headers['user-agent'];
    if (lang.indexOf(',') !== -1) {
        lang = lang.slice(0, lang.indexOf(','));
    }
    if (os.indexOf('(') !== -1 && os.indexOf(')') > os.indexOf('(')) {
        os = os.slice(os.indexOf('(') + 1, os.indexOf(')'))
    }
    return {
        'ip-adress': headers['x-forwarded-for'],
        'language': lang,
        'operating-system': os
    };
};