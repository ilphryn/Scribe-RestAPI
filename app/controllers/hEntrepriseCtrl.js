'use strict';

let Entreprise = require('../models/hEntrepriseModel');

exports.getAll = function(req, res) {
    Entreprise.getAll(function(err, entreprise) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', entreprise);
        res.send(entreprise);
    });
};


exports.create = function(req, res) {
    let new_entreprise = new Entreprise(req.body);
    Entreprise.create(new_entreprise, function(err, entreprise) {
        if (err)
            res.send(err);
        res.json(entreprise);
    });
};


exports.getById = function(req, res) {
    Entreprise.getById(req.params.entrepriseId, function(err, entreprise) {
        if (err)
            res.send(err);
        res.json(entreprise);
    });
};


exports.update = function(req, res) {
    Entreprise.update(req.params.entrepriseId, new Entreprise(req.body), function(err, entreprise) {
        if (err)
            res.send(err);
        res.json(entreprise);
    });
};


exports.delete = function(req, res) {
    Entreprise.delete(req.params.entrepriseId, function(err, entreprise) {
        if (err)
            res.send(err);
        res.json({ message: "Entreprise successfully deleted" });
    });
};