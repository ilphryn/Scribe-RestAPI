'use strict';

let ActeurIncident = require('../models/iActeurModel');

exports.getAll = function(req, res) {
    ActeurIncident.getAll(function(err, acteurincident) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', acteurincident);
        res.send(acteurincident);
    });
};


exports.create = function(req, res) {
    let new_acteurincident = new ActeurIncident(req.body);
    ActeurIncident.create(new_acteurincident, function(err, acteurincident) {
        if (err)
            res.send(err);
        res.json(acteurincident);
    });
};


exports.getById = function(req, res) {
    ActeurIncident.getById(req.params.acteurincidentId, function(err, acteurincident) {
        if (err)
            res.send(err);
        res.json(acteurincident);
    });
};


exports.update = function(req, res) {
    ActeurIncident.update(req.params.acteurincidentId, new ActeurIncident(req.body), function(err, acteurincident) {
        if (err)
            res.send(err);
        res.json(acteurincident);
    });
};


exports.delete = function(req, res) {
    ActeurIncident.delete(req.params.acteurincidentId, function(err, acteurincident) {
        if (err)
            res.send(err);
        res.json({ message: "ActeurIncident successfully deleted" });
    });
};