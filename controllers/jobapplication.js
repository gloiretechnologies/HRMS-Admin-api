const jobapplication = require('../models/jobapplication')



exports.jobapplication = async(req, res) => {
    try{
        if (!req.body.fullname)
        return res.status(400).send({ message: "please enter fullname" });
        if (!req.body.primarycontact)
        return res.status(400).send({ message: "please enter primarycontact" });
        if (!req.body.personaldetails)
        return res.status(400).send({ message: "please enter personaldetails" });
        if (!req.body.educationalqualification)
        return res.status(400).send({ message: "please enter educationalqualification" });
        if (!req.body.anysuggestions)
        return res.status(400).send({ message: "please enter anysuggestions" });
        if (!req.body.knowourcompany)
        return res.status(400).send({ message: "please enter knowourcompany" });

        const response = await jobapplication({
            fullname: req.body.fullname,
            primarycontact: req.body.primarycontact,
            alternatecontact: req.body.alternatecontact,
            presentemoluments: req.body.presentemoluments,
            personaldetails: req.body.personaldetails,
            refernce: req.body.reference,
            typeofconveyance: req.body.typeofconveyance,
            workexperience: req.body.workexperience,
            educationalqualification: req.body.educationalqualification,
            anysuggestions: req.body.anysuggestions,
            particularthingobserved: req.body.particularthingobserved,
            knowourcompany: req.body.knowourcompany            
        });
        response.save();
        if(response){
            return res.status(200).json(response)
        } else {
            return res.status(200).json({ message: "Internal Server Error" })
        }
    }
    catch (error) {
        return res.status(400).json({ message: error });
      } 
};

// Get All Applicants
exports.allapplicants = async(req, res) => {
    try{
      const response = await jobapplication.find();
      if(response){
        return res.status(200).json(response);
      } else {
        return res.status(400).json({ message: "Internal Server Error" })
      }
    }
   catch (error) {
        return res.status(400).json({ message: error });
  } 
    
};

// Get Single Applicant
exports.singleapplicant = async(req, res) => {
    try{
      if (!req.params.id) return res.status(400).json({ mes: "Id is required" });
      const response = await jobapplication.findOne({ applicationid: req.params.id })
      if(response){
        return res.status(200).json(response);
      } else {
        return res.status(400).json({ message: "Internal Server Error" })
      }
    }
    catch (error) {
        return res.status(400).json({ message: error });
  } 
}