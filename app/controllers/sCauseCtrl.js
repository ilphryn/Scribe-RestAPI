'use strict';

let Cause = require('../models/sCauseModel');

exports.getAll = function(req, res) {
    Cause.getAll(function(err, cause) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', cause);
        res.send(cause);
    });
};


exports.create = function(req, res) {
    let new_cause = new Cause(req.body);
    Cause.create(new_cause, function(err, cause) {
        if (err)
            res.send(err);
        res.json(cause);
    });
};


exports.getById = function(req, res) {
    Cause.getById(req.params.causeId, function(err, cause) {
        if (err)
            res.send(err);
        res.json(cause);
    });
};


exports.update = function(req, res) {
    Cause.update(req.params.causeId, new Cause(req.body), function(err, cause) {
        if (err)
            res.send(err);
        res.json(cause);
    });
};


exports.delete = function(req, res) {
    Cause.delete(req.params.causeId, function(err, cause) {
        if (err)
            res.send(err);
        res.json({ message: "Cause successfully deleted" });
    });
};