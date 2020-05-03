var express = require('express');
var router = express.Router();
var CourseCollection = require('../model/course');

router.post('/addcourse', (req, res) => {
    var cc = new CourseCollection(req.body);
    cc.save();
    res.status(201).send(cc);

});

router.get('/viewcourse', (req, res) => {
    CourseCollection.find({}, (err, data) => {
        res.json({ data });
        res.status(200);
    });

});

router.get('/readcourse/:id', (req, res) => {
    CourseCollection.find({ _id: req.params.id }, (err, course) => {
        res.json({ course });
        res.status(200);
    });
});













router.put('/updatecontact', (req, res) => {
    ContactCollection.findById(req.body._id, (err, data) => {
        data.Mobile = req.body.Mobile;
        data.Message = req.body.Message;
        data.save();
        res.status(201).send(data);
    });
});

router.delete('/deletecontact/:id', (req, res) => {
    ContactCollection.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        res.status(201).send(data);
    });
});


module.exports = router;