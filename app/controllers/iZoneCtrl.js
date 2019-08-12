'use strict';

let ZoneIncident = require('../models/iZoneModel');

exports.getAll = function(req, res) {
    ZoneIncident.getAll(function(err, zoneincident) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', zoneincident);
        res.send(zoneincident);
    });
};


exports.create = function(req, res) {
    let new_zoneincident = new ZoneIncident(req.body);
    ZoneIncident.create(new_zoneincident, function(err, zoneincident) {
        if (err)
            res.send(err);
        res.json(zoneincident);
    });
};


exports.getById = function(req, res) {
    ZoneIncident.getById(req.params.zoneincidentId, function(err, zoneincident) {
        if (err)
            res.send(err);
        res.json(zoneincident);
    });
};


exports.update = function(req, res) {
    ZoneIncident.update(req.params.zoneincidentId, new ZoneIncident(req.body), function(err, zoneincident) {
        if (err)
            res.send(err);
        res.json(zoneincident);
    });
};


exports.delete = function(req, res) {
    ZoneIncident.delete(req.params.zoneincidentId, function(err, zoneincident) {
        if (err)
            res.send(err);
        res.json({ message: "ZoneIncident successfully deleted" });
    });
};