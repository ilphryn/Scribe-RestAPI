'use strict';

let Remontee = require('../models/sRemonteeModel');

exports.getAll = function(req, res) {
    Remontee.getAll(function(err, remontee) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', remontee);
        res.send(remontee);
    });
};


exports.create = function(req, res) {
    let new_remontee = new Remontee(req.body);
    Remontee.create(new_remontee, function(err, remontee) {
        if (err)
            res.send(err);
        res.json(remontee);
    });
};


exports.getById = function(req, res) {
    Remontee.getById(req.params.remonteeId, function(err, remontee) {
        if (err)
            res.send(err);
        res.json(remontee);
    });
};


exports.update = function(req, res) {
    Remontee.update(req.params.remonteeId, new Remontee(req.body), function(err, remontee) {
        if (err)
            res.send(err);
        res.json(remontee);
    });
};


exports.delete = function(req, res) {
    Remontee.delete(req.params.remonteeId, function(err, remontee) {
        if (err)
            res.send(err);
        res.json({ message: 'Remontee successfully deleted' });
    });
};