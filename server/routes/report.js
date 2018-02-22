var router = require('express').Router();
var sequelize = require('../db');
var Report = sequelize.import('../models/report');
var User = sequelize.import('../models/user');

router.post('/', function (req, res) {
    // req has some body properties that have a username and pwd
    var client = req.body.report.clientName;
    var address = req.body.report.clientAddress;
    var date = req.body.report.date;
    var owner = req.user.id;
    var notes = req.body.report.notes;
    var property = req.body.report.propertyNotes;
    var exterior = req.body.report.exteriorNotes;
    var garage = req.body.report.garageNotes;
    var roof = req.body.report.roofNotes;
    var plumbing = req.body.report.plumbingNotes;
    var electrical = req.body.report.electricalNotes;



    // Use our sequelize model to create report
    Report
        .create({
            clientName: client,
            clientAddress: address,
            date: date,
            owner: owner,
            notes: notes,
            propertyNotes: property,
            exteriorNotes: exterior,
            garageNotes: garage,
            roofNotes: roof,
            plumbingNotes: plumbing,
            electricalNotes: electrical
        })
        .then(
            function createSuccess(report) {
                res.json(report);
            },
            function createError(err) {
                res.send(500, err.message);
            }
        );
});

router.get('/', function (req, res) {
    var userid = req.user.id;
    Report
        .findAll({
            where: {
                owner: userid
            }
        })
        .then(
            function findAllSuccess(data) {
                // console.log(data);
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
});

//This will retrieve one specific report by the report id
router.get('/:id', function (req, res) {
    var data = req.params.id;
    //console.log(data); here for testing pourposes
    Report
        .findOne({
            where: {
                id: data
            }
        }).then(
            function getSuccess(updateData) {
                res.json(updateData);
            },
            function getError(err) {
                res.send(500, err.message);
            }
        );
});

//This will return the data from the report that was udated
router.put('/', function (req, res) {
    var description = req.body.report.desc;
    var result = req.body.report.result;
    var data = req.body.report.id;
    var definition = req.body.report.def;
    console.log(req);
    Report
        .update({
            clientName: client,
            clientAddress: address,
            date: date,
            owner: owner,
            notes: notes,
            propertyNotes: property,
            exteriorNotes: exterior,
            garageNotes: garage,
            roofNotes: roof,
            plumbingNotes: plumbing,
            electricalNotes: electrical,
        },

            {
                where: {
                    id: data
                }
            }
        ).then(
            function updateSuccess(updatedReport) {
                res.json(updatedReport);
            },

            function updateError(err) {
                res.send(500, err.message);
            }
        )
});

router.delete('/', function (req, res) {
    var data = req.body.report.id;
    Report
        .destroy({
            where: {
                id: data
            }
        }).then(
            function deleteReportSuccess(data) {
                res.send("you removed a report");
            },
            function deleteReportError(err) {
                res.send(500, err.message);
            }
        );
});


module.exports = router;