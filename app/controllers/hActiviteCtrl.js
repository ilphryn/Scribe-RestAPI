'use strict';

let Activite = require('../models/hActiviteModel');

exports.getAll = function(req, res) {
    Activite.getAll(function(err, activite) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', activite);
        res.send(activite);
    });
};


exports.create = function(req, res) {
    let new_activite = new Activite(req.body);
    Activite.create(new_activite, function(err, activite) {
        if (err)
            res.send(err);
        res.json(activite);
    });
};


exports.getById = function(req, res) {
    Activite.getById(req.params.activiteId, function(err, activite) {
        if (err)
            res.send(err);
        res.json(activite);
    });
};


exports.update = function(req, res) {
    Activite.update(req.params.activiteId, new Activite(req.body), function(err, activite) {
        if (err)
            res.send(err);
        res.json(activite);
    });
};


exports.delete = function(req, res) {
    Activite.delete(req.params.activiteId, function(err, activite) {
        if (err)
            res.send(err);
        res.json({ message: "Activite successfully deleted" });
    });
};