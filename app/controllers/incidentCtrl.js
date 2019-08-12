'use strict';

let Incident = require('../models/incidentModel');

exports.getAll = function(req, res) {
    Incident.getAll(function(err, incident) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', incident);
        res.send(incident);
    });
};


exports.create = function(req, res) {
    let new_incident = new Incident(req.body);
    Incident.create(new_incident, function(err, incident) {
        if (err)
            res.send(err);
        res.json(incident);
    });
};


exports.getById = function(req, res) {
    Incident.getById(req.params.incidentId, function(err, incident) {
        if (err)
            res.send(err);
        res.json(incident);
    });
};


exports.update = function(req, res) {
    Incident.update(req.params.incidentId, new Incident(req.body), function(err, incident) {
        if (err)
            res.send(err);
        res.json(incident);
    });
};


exports.delete = function(req, res) {
    Incident.delete(req.params.incidentId, function(err, incident) {
        if (err)
            res.send(err);
        res.json({ message: "Incident successfully deleted" });
    });
};