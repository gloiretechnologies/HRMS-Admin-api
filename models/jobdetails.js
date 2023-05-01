const mongoose = require('mongoose')
const autoIncrement = require("mongoose-sequence")(mongoose);

const schema = mongoose.Schema({
    uniqueid: Number,
    title: {
        type: String,
        required: true        
    },
    jobdescription: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        require: true
    },
    positions: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})
schema.plugin(autoIncrement, { inc_field: "uniqueid" });
module.exports = mongoose.model(`jobdetails`,schema)