var Music = require('../database.js').Music;

exports.create = function (params, callback) {

    var music = new Music(params);

    music.save(function (err, accountItem) {
        if (err) {
            callback({success: false, error:err});
        }else{
            callback({success: true, account: accountItem});
        }
    });

};
exports.list = function (callback) {
    find({}, callback);
};
function find(query, callback) {
    Music.find(query).exec(function (err, accounts) {
        if (err) {
            callback({success: false, error: err});
        } else {
            callback({success: true, accounts: accounts});
        }
    });
}
exports.deleteById = function (id, callback) {
    Music.remove({title: id}, function (err) {
        if (err) {
            callback({success: false, error: err});
        } else {
            callback({success: true});
        }
    });
};
exports.findById = function (id, callback) {
    Music.findOne({title: id}, function (err, result) {
        if(err){
            callback({success:false, account:result})
        }else{
            callback({success:true, account:result});
        }
    });
};