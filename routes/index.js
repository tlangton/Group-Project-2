var express = require('express');
var router = express.Router();
const db = require("../models");

/* GET home page. */
router.get('/', function(req, res, next) {

    // ===========================================================
    db.Jobs.findAll({}).then(function(results) {
        console.log(results);
        res.render("index", { results: results });
    });
    // ==============================================================

    // var jobList1 = {
    //     company_name: "Google",
    //     location: "New Jersey",
    //     phone: 0987654322,
    //     email: "whoisju1@gmail.com",
    //     position: "Full Stack Developer",
    //     job_description: "Nice!!",
    //     job_requirements: "Node JS",
    //     job_number: "1234",
    //     additional_info: "They have a happy culture."
    //         // application_status: 
    // };

    // var jobList2 = {
    //     company_name: "Google",
    //     location: "New Jersey",
    //     phone: 0987654322,
    //     email: "whoisju1@gmail.com",
    //     position: "Full Stack Developer",
    //     job_description: "Nice!!",
    //     job_requirements: "Node JS",
    //     job_number: "1234",
    //     additional_info: "They have a happy culture."
    //         // application_status: 
    // };

    // var jobList = [jobList1, jobList2];

    // res.render("index", jobList);
});

router.get('/form', function(req, res, next) {
    let hdbObj = {
        job: "Software Engineer",
        company: "Google",
        requirement: "Et est est magna incident ipsum."
    };
    res.render('form', hdbObj);
});

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
        res.redirect("/");
    });
});


module.exports = router;