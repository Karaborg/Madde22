/*jshint esversion: 6 */
"use strict";

const Song = require("../../models/song.js");

module.exports = function (mongoose) {
    var schema = Song.songSchema;

    return mongoose.model('Song', schema);
};