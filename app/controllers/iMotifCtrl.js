'use strict';

let MotifIncident = require('../models/iMotifModel');

exports.getAll = function(req, res) {
    MotifIncident.getAll(function(err, motifincident) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', motifincident);
        res.send(motifincident);
    });
};


exports.create = function(req, res) {
    let new_motifincident = new MotifIncident(req.body);
    MotifIncident.create(new_motifincident, function(err, motifincident) {
        if (err)
            res.send(err);
        res.json(motifincident);
    });
};


exports.getById = function(req, res) {
    MotifIncident.getById(req.params.motifincidentId, function(err, motifincident) {
        if (err)
            res.send(err);
        res.json(motifincident);
    });
};


exports.update = function(req, res) {
    MotifIncident.update(req.params.motifincidentId, new MotifIncident(req.body), function(err, motifincident) {
        if (err)
            res.send(err);
        res.json(motifincident);
    });
};


exports.delete = function(req, res) {
    MotifIncident.delete(req.params.motifincidentId, function(err, motifincident) {
        if (err)
            res.send(err);
        res.json({ message: "MotifIncident successfully deleted" });
    });
};