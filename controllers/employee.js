const employeedetails = require('../models/employee')



// Add Employee Details
exports.addemployeedetails = async(req, res) =>{
    try{
        if (!req.body.fullname)
        return res.status(400).send({ message: "please enter fullname" });
        if (!req.body.email)
        return res.status(400).send({ message: "please enter email" });
        if (!req.body.phone)
        return res.status(400).send({ message: "please enter phone" });
        if (!req.body.department)
        return res.status(400).send({ message: "please enter department" });
        if (!req.body.jobrole)
        return res.status(400).send({ message: "please enter jobrole" });
        if (!req.body.dateofjoining)
        return res.status(400).send({ message: "please enter dateofjoining" });
        if (!req.body.companyname)
        return res.status(400).send({ message: "please enter companyname" });
        if (!req.body.dateofbirth)
        return res.status(400).send({ message: "please enter dateofbirth" });
         
       const response = await employeedetails({
        fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        department: req.body.department,
        jobrole: req.body.jobrole,
        dateofjoining: req.body.dateofjoining,
        companyname: req.body.companyname
       })
       if(response){
        return res.status(200).json(response)
       } else {
        return res.status(400).json({ message: "Internal server error" })
       }
    }
    catch (error) {
        return res.status(400).json({ message: error });
      } 
};

// Get All Employee Details
exports.allemployeedetails = async(req, res) => {
    try{
      const response = await employeedetails.find();
      if(response){
        return res.status(200).json(response)
      } else {
        return res.status(400).json({ message: "Internal server error" })
       }
    }
    catch (error) {
        return res.status(400).json({ message: error });
      } 
}