const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    city:               { type: String, required: true },
    country:            { type: String, required: true },
    postcode:           { type: String, required: true },
    property_name:      { type: String, required: true },
    property_number:    { type: String, required: false },
    road_name:          { type: String, required: true },
    uprn:               { type: String, required: false },
});

module.exports = AddressSchema;