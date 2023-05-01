const mongoose = require('mongoose')
const autoIncrement = require("mongoose-sequence")(mongoose);

const schema = mongoose.Schema({
    employeeid: Number,
    fullname: {
        type: String,
        required: true        
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        require: true
    },
    department: {
        type: String,
        require: true
    },
    jobrole: {
        type: String,
        require: true
    },
    dateofjoining: {
        type: Date,
        require: true
    },
    dateofbirth: {
        type: Date,
        require: true
    },
    companyname: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})
schema.plugin(autoIncrement, { inc_field: "employeeid" });
module.exports = mongoose.model(`employeedetails`,schema)