'use strict';

let TypeIncident = require('../models/iTypeModel');

exports.getAll = function(req, res) {
    TypeIncident.getAll(function(err, typeincident) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', typeincident);
        res.send(typeincident);
    });
};


exports.create = function(req, res) {
    let new_typeincident = new TypeIncident(req.body);
    TypeIncident.create(new_typeincident, function(err, typeincident) {
        if (err)
            res.send(err);
        res.json(typeincident);
    });
};


exports.getById = function(req, res) {
    TypeIncident.getById(req.params.typeincidentId, function(err, typeincident) {
        if (err)
            res.send(err);
        res.json(typeincident);
    });
};


exports.update = function(req, res) {
    TypeIncident.update(req.params.typeincidentId, new TypeIncident(req.body), function(err, typeincident) {
        if (err)
            res.send(err);
        res.json(typeincident);
    });
};


exports.delete = function(req, res) {
    TypeIncident.delete(req.params.typeincidentId, function(err, typeincident) {
        if (err)
            res.send(err);
        res.json({ message: "TypeIncident successfully deleted" });
    });
};