'use strict';

let TypeReclamation = require('../models/sTypeReclamationModel');

exports.getAll = function(req, res) {
    TypeReclamation.getAll(function(err, typereclamation) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', typereclamation);
        res.send(typereclamation);
    });
};


exports.create = function(req, res) {
    let new_typereclamation = new TypeReclamation(req.body);
    TypeReclamation.create(new_typereclamation, function(err, typereclamation) {
        if (err)
            res.send(err);
        res.json(typereclamation);
    });
};


exports.getById = function(req, res) {
    TypeReclamation.getById(req.params.typereclamationId, function(err, typereclamation) {
        if (err)
            res.send(err);
        res.json(typereclamation);
    });
};


exports.update = function(req, res) {
    TypeReclamation.update(req.params.typereclamationId, new TypeReclamation(req.body), function(err, typereclamation) {
        if (err)
            res.send(err);
        res.json(typereclamation);
    });
};


exports.delete = function(req, res) {
    TypeReclamation.delete(req.params.typereclamationId, function(err, typereclamation) {
        if (err)
            res.send(err);
        res.json({ message: 'TypeReclamation successfully deleted' });
    });
};