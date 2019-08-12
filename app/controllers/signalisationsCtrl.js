'use strict';

let Signalisations = require('../models/signalisationsModel');

exports.getAll = function(req, res) {
    Signalisations.getAll(function(err, signalisations) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', signalisations);
        res.send(signalisations);
    });
};


exports.create = function(req, res) {
    let new_signalisations = new Signalisations(req.body);
    Signalisations.create(new_signalisations, function(err, signalisations) {
        if (err)
            res.send(err);
        res.json(signalisations);
    });
};


exports.getById = function(req, res) {
    Signalisations.getById(req.params.signalisationsId, function(err, signalisations) {
        if (err)
            res.send(err);
        res.json(signalisations);
    });
};


exports.update = function(req, res) {
    Signalisations.update(req.params.signalisationsId, new Signalisations(req.body), function(err, signalisations) {
        if (err)
            res.send(err);
        res.json(signalisations);
    });
};


exports.delete = function(req, res) {
    Signalisations.delete(req.params.signalisationsId, function(err, signalisations) {
        if (err)
            res.send(err);
        res.json({ message: "Signalisations successfully deleted" });
    });
};