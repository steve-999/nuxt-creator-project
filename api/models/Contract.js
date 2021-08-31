const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RoomPricesSchema = require('./RoomPrices');

const ContractSchema = new Schema({
        book_now_url:                   { type: String, required: true },
        end_date:                       { type: String, required: true },
        min_contract_days:              { type: String, required: true },
        prices:                         [{ type: RoomPricesSchema, required: true}],
        restrictions:                   [{ type: String, required: true }],
        start_date:                     { type: String, required: true },
        title:                          { type: String, required: true },
        utilities: {
            broadband:                  { type: Boolean, required: true },
            contents_insurance:         { type: Boolean, required: true },
            council_tax:                { type: Boolean, required: true },
            electricity:                { type: Boolean, required: true },
            gas:                        { type: Boolean, required: true },
            phone:                      { type: Boolean, required: true },
            tv_license:                 { type: Boolean, required: true },
            water:                      { type: Boolean, required: true },
        }
});

module.exports = ContractSchema;