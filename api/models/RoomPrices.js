const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomPricesSchema = new Schema({
    deposit_per_person:         { type: String, required: true},
    fee_per_person:             { type: String, required: true},
    price_per_person_per_week:  { type: String, required: true},
    room_name:                  { type: String, required: false}
});

module.exports = RoomPricesSchema;