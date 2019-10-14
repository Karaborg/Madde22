/*jshint esversion: 6 */
"use strict";

const schemaName = 'music';

module.exports = function (mongoose) {
    var schema = mongoose.Schema(
        {
            title: {type: String},
            artist: {type: String},
            duration: {type: Number}
        }
    );

    return mongoose.model(schemaName, schema);
};