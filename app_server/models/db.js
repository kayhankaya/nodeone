var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

var mongoDB = 'mongodb://localhost/nodedb';

mongoose.connect(mongoDB, function(err) {
    if (err) {
        console.log('hata:' + err);
    } else {
        console.log('bağlandı:' + mongoDB);
    }
});