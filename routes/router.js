const express = require('express');
const router = express.Router();

const jobdetailscontroller = require("../controllers/jobdetails");
const jobapplicationcontroller = require("../controllers/jobapplication");
const employeecontroller = require("../controllers/employee");




// Job Position API's
router.post("/jobposition", jobdetailscontroller.addjobposition);
router.get("/alljobpositions", jobdetailscontroller.alljobdetails);
router.get("/jobposition/:uniqueid", jobdetailscontroller.singlejobposition);
router.put("/jobposition/:uniqueid", jobdetailscontroller.updatejobdetails);
router.delete("/jobposition/:uniqueid", jobdetailscontroller.removejobposition);


//Job Application
router.post("/jobapplication", jobapplicationcontroller.jobapplication);


//Employee Details
router.post("/employeedetails", employeecontroller.addemployeedetails);




module.exports = router;