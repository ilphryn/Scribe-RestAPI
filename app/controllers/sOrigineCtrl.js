'use strict';

let Origine = require('../models/sOrigineModel');

exports.getAll = function(req, res) {
    Origine.getAll(function(err, origine) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', origine);
        res.send(origine);
    });
};


exports.create = function(req, res) {
    let new_origine = new Origine(req.body);
    Origine.create(new_origine, function(err, origine) {
        if (err)
            res.send(err);
        res.json(origine);
    });
};


exports.getById = function(req, res) {
    Origine.getById(req.params.origineId, function(err, origine) {
        if (err)
            res.send(err);
        res.json(origine);
    });
};


exports.update = function(req, res) {
    Origine.update(req.params.origineId, new Origine(req.body), function(err, origine) {
        if (err)
            res.send(err);
        res.json(origine);
    });
};


exports.delete = function(req, res) {
    Origine.delete(req.params.origineId, function(err, origine) {
        if (err)
            res.send(err);
        res.json({ message: 'Origine successfully deleted' });
    });
};