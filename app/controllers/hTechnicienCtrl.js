'use strict';

let Technicien = require('../models/hTechnicienModel');

exports.getAll = function(req, res) {
    Technicien.getAll(function(err, technicien) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', technicien);
        res.send(technicien);
    });
};


exports.create = function(req, res) {
    let new_technicien = new Technicien(req.body);
    Technicien.create(new_technicien, function(err, technicien) {
        if (err)
            res.send(err);
        res.json(technicien);
    });
};


exports.getById = function(req, res) {
    Technicien.getById(req.params.technicienId, function(err, technicien) {
        if (err)
            res.send(err);
        res.json(technicien);
    });
};


exports.update = function(req, res) {
    Technicien.update(req.params.technicienId, new Technicien(req.body), function(err, technicien) {
        if (err)
            res.send(err);
        res.json(technicien);
    });
};


exports.delete = function(req, res) {
    Technicien.delete(req.params.technicienId, function(err, technicien) {
        if (err)
            res.send(err);
        res.json({ message: "Technicien successfully deleted" });
    });
};