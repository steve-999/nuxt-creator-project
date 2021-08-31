const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomDetailsSchema = new Schema({
    disabled_access:    { type: Boolean, required: true},
    ensuite:            { type: Boolean, required: true},
    floor:              { type: String, required: false},
    floor_space:        { type: String, required: true},
    room_id:            { type: String, required: true},
    room_name:          { type: String, required: true},
});

module.exports = RoomDetailsSchema;