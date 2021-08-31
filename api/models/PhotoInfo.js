const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoInfoSchema = new Schema({
    photo:      { type: String, required: true},
    thumb:      { type: String, required: true},
    caption:    { type: String, required: true},
});

module.exports = PhotoInfoSchema;