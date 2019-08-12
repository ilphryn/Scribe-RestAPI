'use strict';

let Acteur = require('../models/hActeurModel');

exports.getAll = function(req, res) {
    Acteur.getAll(function(err, acteur) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', acteur);
        res.send(acteur);
    });
};


exports.create = function(req, res) {
    let new_acteur = new Acteur(req.body);
    Acteur.create(new_acteur, function(err, acteur) {
        if (err)
            res.send(err);
        res.json(acteur);
    });
};


exports.getById = function(req, res) {
    Acteur.getById(req.params.acteurId, function(err, acteur) {
        if (err)
            res.send(err);
        res.json(acteur);
    });
};


exports.update = function(req, res) {
    Acteur.update(req.params.acteurId, new Acteur(req.body), function(err, acteur) {
        if (err)
            res.send(err);
        res.json(acteur);
    });
};


exports.delete = function(req, res) {
    Acteur.delete(req.params.acteurId, function(err, acteur) {
        if (err)
            res.send(err);
        res.json({ message: "Acteur successfully deleted" });
    });
};