const mongoose = require("mongoose");


const personaldetailsSchema = mongoose.Schema({

  fatherorhusbandname: { type: String, required: true },
  dateofbirth: { type: Date, required: true },
  presentaddress: { type: String, required: true },
  pin1: { type: Number, required: true },
  permanentaddress: { type: String, required: true },
  pin2: { type: Number, required: true },
  gardiancontactnumber: { type: Number, required: true },
  aadharno: { type: Number, required: true },
  panno: { type: String,  required: true },
  maritalstatus: { type: String, required: true },
  languagesread: { type: String,  required: true },
  languagespeak: { type: String, required: true  },
  email: { type: String, required: true },
  altemail: { type: String, required: true },
  strength: { type: String, required: true },
  weakness: { type: String, required: true }
});

const referenceSchema = mongoose.Schema({

  name: { type: String, required: true },
  designation: { type: String, required: true },
  companyname: { type: String,  required: true },
  address: { type: String, required: true },
  contactnumber: { type: Number, required: true },
})
 
const presentemolumentsSchema = mongoose.Schema({

  basicsalary: { type: String },
  benefitsandperks: { type: String },
  netemoluments: { type: String },
  grossemoluments: { type: String },
})

const workexperienceSchema = mongoose.Schema({ 
  fromto: { type: String },
  organizationname: { type: String },
  designation: { type: String },
  reportingto: { type: String },
  mainwork: { type: String },
  expinyears: { type: Number },
  salary: { type: Number },
})

const educationSchema = mongoose.Schema({
  institutename: { type: String, required: true },
  group: { type: String, required: true },
  yearpassed: { type: String, required: true },
  grade: { type: String, required: true }
})


const JobapplicationSchema = mongoose.Schema({

applicationid:{
  type: Number
},
  fullname: {
    type: String,
    required: true
  },
  primarycontact: {
    type: Number,
    required: true
  },
  alternatecontact: {
    type: Number,
    required: true
  },
  personaldetails: [{ type: personaldetailsSchema, required: true }],
  refernce: [{ type: referenceSchema , required: true }],
  presentemoluments: [{ type: presentemolumentsSchema, required: true }],
  typeofconveyance: { type: String },
  workexperience: [{ type: workexperienceSchema, required: true } ],
  educationalqualification: [{ type: educationSchema, required: true } ],
  anysuggestions : { type: String , required: true },
  particularthingobserved: { type: String, required: true },
  knowourcompany: { type: String, required: true },  
})
module.exports = mongoose.model("jobapplication", JobapplicationSchema);