const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoInfoSchema = new Schema({
    video:      { type: String, required: true},
    thumb:      { type: String, required: true},
    caption:    { type: String, required: true},
});

module.exports = VideoInfoSchema;