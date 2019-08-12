'use strict';

let Action = require('../models/hActionModel');

exports.getAll = function(req, res) {
    Action.getAll(function(err, action) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', action);
        res.send(action);
    });
};


exports.create = function(req, res) {
    let new_action = new Action(req.body);
    Action.create(new_action, function(err, action) {
        if (err)
            res.send(err);
        res.json(action);
    });
};


exports.getById = function(req, res) {
    Action.getById(req.params.actionId, function(err, action) {
        if (err)
            res.send(err);
        res.json(action);
    });
};


exports.update = function(req, res) {
    Action.update(req.params.actionId, new Action(req.body), function(err, action) {
        if (err)
            res.send(err);
        res.json(action);
    });
};


exports.delete = function(req, res) {
    Action.delete(req.params.actionId, function(err, action) {
        if (err)
            res.send(err);
        res.json({ message: "Action successfully deleted" });
    });
};