var express = require('express');
var router = express.Router();
var UserCollection = require('../model/user');

router.post('/adduser', (req, res) => {
    var cc = new UserCollection(req.body);
    cc.save();
    res.status(201).send(cc);
});

router.post('/signin', (req, res) => {
    UserCollection.find({ $and: [{ Email: req.body.Email }, { Pass: req.body.Pass }] }, (err, data) => {
        res.json({ data });
        res.status(200);
    });
});
module.exports = router;