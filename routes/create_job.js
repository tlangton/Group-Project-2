var express = require("express");
var app = express();
var router = express.Router();
const db = require("../models");

router.post("/jobs/create", function(req, res) {
    console.log(req.body);
    // Get data from form element
    db.Jobs.create({
        company_name: req.body.company,
        location: req.body.location,
        phone: req.body.telephone,
        email: req.body.email,
        position: req.body.position,
        job_description: req.body.jobDescription,
        job_requirements: req.body.requirements,
        job_number: req.body.jobNum,
        additional_info: req.body.additionalInfo,
        application_status: req.body.status
    }).then(function(Jobs) {
        console.log(Jobs);
    });
});

module.exports = router;