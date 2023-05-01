const jobdetails = require('../models/jobdetails')



// Create a Job For Available Positions
exports.addjobposition = async( req, res) => {
    try{
        if (!req.body.title)
        return res.status(400).send({ message: "please enter title" });
        if (!req.body.jobdescription)
        return res.status(400).send({ message: "please enter jobdescription" });
        if (!req.body.status)
        return res.status(400).send({ message: "please enter status" });
        if (!req.body.positions)
        return res.status(400).send({ message: "please enter positions" });
        if (!req.body.email)
        return res.status(400).send({ message: "please enter email" });

        const response = await jobdetails({
            title: req.body.title,
            jobdescription: req.body.jobdescription,
            status: req.body.status,
            positions: req.body.positions,
            email: req.body.email
        })
        response.save();
        if(response){
            return res.status(200).json(response)
        }else{
            return res.status(400).json({ message: "No Job Postion"})
        }
    }
    catch (error) {
        return res.status(400).json({ message: error });
      } 
};

// Get All Available Positions
exports.alljobdetails = async(req, res) => {
    try{
     const response = await jobdetails.find();
       if(response) {
          return res.status(200).json(response);
       } else {
          return res.status(400).json({ message: "No details found" })
       }
    }
    catch (error) {
        return res.status(400).json({ message: error });
      } 
};

// Get Single Job Position
exports.singlejobposition = async(req, res) => {
    try{
      if (!req.params.uniqueid) return res.status(400).json({ mes: "uniqueid is required" });
      const response = await jobdetails.findOne({ uniqueid: req.params.uniqueid });
      if(response) {
        return res.status(200).json(response);
      } else {
        return res.status(400).json({ message: "Internal Server Error" })
      }
    }
    catch (error) {
        return res.status(400).json({ message: error });
      } 
}

// Update Job Details
exports.updatejobdetails = async(req, res) => {
    try{
        if (!req.body.title)
        return res.status(400).send({ message: "please enter title" });
        if (!req.body.jobdescription)
        return res.status(400).send({ message: "please enter jobdescription" });
        if (!req.body.status)
        return res.status(400).send({ message: "please enter status" });
        if (!req.body.positions)
        return res.status(400).send({ message: "please enter positions" });
        if (!req.body.email)
        return res.status(400).send({ message: "please enter email" });

       const response = await jobdetails.updateOne(
        { uniqueid: req.params.uniqueid },
       {
        $set: {
            title: req.body.title,
            jobdescription: req.body.jobdescription,
            status: req.body.status,
            positions: req.body.positions,
            email: req.body.email
        }
       });
       if(response){
        return res.status(200).json(response);
       } else {
        return res.status(400).json({ message: "Internal Server Error"})
       }
    }
    catch (error) {
        return res.status(400).json({ message: error });
      } 
};

// Delete Job Position
exports.removejobposition = async(req, res) => {
  try{
     const removejobdetails = await jobdetails.deleteOne(
        { uniqueid: req.params.uniqueid },
     );
     if(removejobdetails) {
        return res.status(200).json(removejobdetails);
     } else {
        return res.status(400).json({ message: "Internal Server Error" });
     }
  }
  catch (error) {
    return res.status(400).json({ message: error });
  } 
};

