'use strict';

let Signalisation = require('../models/hSignalisationModel');

exports.getAll = function(req, res) {
    Signalisation.getAll(function(err, signalisation) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', signalisation);
        res.send(signalisation);
    });
};


exports.create = function(req, res) {
    let new_signalisation = new Signalisation(req.body);
    Signalisation.create(new_signalisation, function(err, signalisation) {
        if (err)
            res.send(err);
        res.json(signalisation);
    });
};


exports.getById = function(req, res) {
    Signalisation.getById(req.params.signalisationId, function(err, signalisation) {
        if (err)
            res.send(err);
        res.json(signalisation);
    });
};


exports.update = function(req, res) {
    Signalisation.update(req.params.signalisationId, new Signalisation(req.body), function(err, signalisation) {
        if (err)
            res.send(err);
        res.json(signalisation);
    });
};


exports.delete = function(req, res) {
    Signalisation.delete(req.params.signalisationId, function(err, signalisation) {
        if (err)
            res.send(err);
        res.json({ message: "Signalisation successfully deleted" });
    });
};