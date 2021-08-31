const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AddressSchema = require('./Address');
const ContractSchema = require('./Contract');
const PhotoInfoSchema = require('./PhotoInfo');
const VideoInfoSchema = require('./VideoInfo');
const RoomDetailsSchema = require('./RoomDetails');


const propertySchema = new Schema({
    accreditation:              [{ type: String,            required: false }],
    address:                    { type: AddressSchema,      required: false },
    bank_id:                    { type: String,             required: false },
    bathrooms:                  { type: String,             required: true },
    cluster_size:               { type: String,             required: true },
    contracts:                  [{ type: ContractSchema,    required: true}],
    coordinates: { 
        lat:                    { type: String,             required: true }, 
        lng:                    { type: String,             required: true }
    },
    description:                { type: String,             required: true },
    designation:                { type: String,             required: true },
    disabled:                   { type: Boolean,            required: true },
    eligibility: {
        dss:                    { type: Boolean,            required: true },
        female_only:            { type: Boolean,            required: true },
        male_only:              { type: Boolean,            required: true },
        pets_permitted:         { type: Boolean,            required: true },
        postgraduate_student:   { type: Boolean,            required: true },
        professional:           { type: Boolean,            required: true },
        smoking_permitted:      { type: Boolean,            required: true },
        trainee:                { type: Boolean,            required: true },
        undergraduate_student:  { type: Boolean,            required: true },
    },
    energy_performance: {
        co2_current:            { type: Number,             required: true },
        co2_potential:          { type: Number,             required: true },
        eef_current:            { type: Number,             required: true },
        eef_potential:          { type: Number,             required: true },
        epc_certificate:        { type: String,             required: false },
        epc_reference:          { type: String,             required: false },
    },
    facilities:                 [{ type: String,            required: true }],
    floor_space:                { type: String,             required: true },
    media: {
        floorplans:             [{ type: PhotoInfoSchema,   required: false }],
        photos:                 [{ type: PhotoInfoSchema,   required: false }],
        photos360:              [{ type: PhotoInfoSchema,   required: false }],
        tours:                  [{ type: VideoInfoSchema,   required: false }],
        videos:                 [{ type: VideoInfoSchema,   required: false }]
    },
    property_id:                { type: String,             required: true },
    quantity:                   { type: String,             required: true },
    quantity_available:         { type: String,             required: true },
    room_details:               [{ type: RoomDetailsSchema, required: false }],
    room_type:                  { type: String,             required: true },
    rooms_let_individually:     { type: String,             required: true }
});

const Property = mongoose.model('property', propertySchema);
module.exports = Property;