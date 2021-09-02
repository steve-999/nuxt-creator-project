const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const cors = require('cors')
const mongoose = require('mongoose');
const Property = require('./models/Property');

require('dotenv').config();
const app = express()

const dbUri = process.env.MONGO_DB_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('mongo db connected'))
    .catch(err => console.log(err));

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


app.post('/create_test_collection', async (req, res) => {
    const path = 'C:/www/coursera/vue/creator-project/data.txt'
    const contents = fs.readFileSync(path)
    const json_data = JSON.parse(contents)

    try {
        const resp = await Property.createCollection();
        const resp2 = await Property.insertMany(json_data.properties)
        res.json(resp2)
    }
    catch (err) {
        console.log('error', err)
        res.json({message: err})
    }
    
})

app.get('/properties', async (req, res) => {
    try {
        const doc = await Property.find()
        res.json(doc)
    }
    catch (err) {
        res.json(err.message)
    }    
});

app.get('/properties/:property_id', async (req, res) => {
    try {
        const doc = await Property.findOne({property_id: req.params.property_id})
        res.json(doc)
    }
    catch (err) {
        res.json(err.message)
    }    
});

app.patch('/properties/:property_id', async (req, res) => {
    const property_id = req.params.property_id;
    const update_obj = {};
    update_obj[req.body.update_key] = req.body.update_val;
    try {
        const resp = await Property.updateOne({'property_id': property_id}, { $set: update_obj});
        res.json(resp)
    }
    catch (err) {
        res.json(err)
    }
});


module.exports = {
   path: '/api',
   handler: app
}