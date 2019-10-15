/*jshint esversion: 6 */
"use strict";

const schemaName = 'music';

module.exports = function (mongoose) {
    var schema = mongoose.Schema(
        {
            title: {type: String},
            artist: {type: String},
            duration: {type: Number},
            genres: {type: Array},
            album: {type: String},
            clicked: {type: Number},
            liked: {type: Number},
            downloaded: {type: Number},
            shared: {type: Number}
        }
    );

    return mongoose.model(schemaName, schema);
};