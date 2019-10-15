const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: {type: String},
    artist: {type: String},
    duration: {type: Number},
    genres: {type: String},
    album: {type: String},
    clicked: {type: Number},
    liked: {type: Number},
    downloaded: {type: Number},
    shared: {type: Number}
});

module.exports = mongoose.model('Song',songSchema);