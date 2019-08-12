'use strict';

let Hotline = require('../models/hotlineModel');

exports.getAll = function(req, res) {
    Hotline.getAll(function(err, hotline) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', hotline);
        res.send(hotline);
    });
};


exports.create = function(req, res) {
    let new_hotline = new Hotline(req.body);
    Hotline.create(new_hotline, function(err, hotline) {
        if (err)
            res.send(err);
        res.json(hotline);
    });
};


exports.getById = function(req, res) {
    Hotline.getById(req.params.hotlineId, function(err, hotline) {
        if (err)
            res.send(err);
        res.json(hotline);
    });
};


exports.update = function(req, res) {
    Hotline.update(req.params.hotlineId, new Hotline(req.body), function(err, hotline) {
        if (err)
            res.send(err);
        res.json(hotline);
    });
};


exports.delete = function(req, res) {
    Hotline.delete(req.params.hotlineId, function(err, hotline) {
        if (err)
            res.send(err);
        res.json({ message: "Hotline successfully deleted" });
    });
};