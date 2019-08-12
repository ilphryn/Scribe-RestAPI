'use strict';

let Zone = require('../models/hZoneModel');

exports.getAll = function(req, res) {
    Zone.getAll(function(err, zone) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', zone);
        res.send(zone);
    });
};


exports.create = function(req, res) {
    let new_zone = new Zone(req.body);
    Zone.create(new_zone, function(err, zone) {
        if (err)
            res.send(err);
        res.json(zone);
    });
};


exports.getById = function(req, res) {
    Zone.getById(req.params.zoneId, function(err, zone) {
        if (err)
            res.send(err);
        res.json(zone);
    });
};


exports.update = function(req, res) {
    Zone.update(req.params.zoneId, new Zone(req.body), function(err, zone) {
        if (err)
            res.send(err);
        res.json(zone);
    });
};


exports.delete = function(req, res) {
    Zone.delete(req.params.zoneId, function(err, zone) {
        if (err)
            res.send(err);
        res.json({ message: "Zone successfully deleted" });
    });
};