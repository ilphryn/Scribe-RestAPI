'use strict';

let Destinataire = require('../models/sDestinataireModel');

exports.getAll = function(req, res) {
    Destinataire.getAll(function(err, destinataire) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', destinataire);
        res.send(destinataire);
    });
};


exports.create = function(req, res) {
    let new_destinataire = new Destinataire(req.body);
    Destinataire.create(new_destinataire, function(err, destinataire) {
        if (err)
            res.send(err);
        res.json(destinataire);
    });
};


exports.getById = function(req, res) {
    Destinataire.getById(req.params.destinataireId, function(err, destinataire) {
        if (err)
            res.send(err);
        res.json(destinataire);
    });
};


exports.update = function(req, res) {
    Destinataire.update(req.params.destinataireId, new Destinataire(req.body), function(err, destinataire) {
        if (err)
            res.send(err);
        res.json(destinataire);
    });
};


exports.delete = function(req, res) {
    Destinataire.delete(req.params.destinataireId, function(err, destinataire) {
        if (err)
            res.send(err);
        res.json({ message: "Destinataire successfully deleted" });
    });
};