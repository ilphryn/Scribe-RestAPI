'use strict';

let Mention = require('../models/sMentionModel');

exports.getAll = function(req, res) {
    Mention.getAll(function(err, mention) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', mention);
        res.send(mention);
    });
};


exports.create = function(req, res) {
    let new_mention = new Mention(req.body);
    Mention.create(new_mention, function(err, mention) {
        if (err)
            res.send(err);
        res.json(mention);
    });
};


exports.getById = function(req, res) {
    Mention.getById(req.params.mentionId, function(err, mention) {
        if (err)
            res.send(err);
        res.json(mention);
    });
};


exports.update = function(req, res) {
    Mention.update(req.params.mentionId, new Mention(req.body), function(err, mention) {
        if (err)
            res.send(err);
        res.json(mention);
    });
};


exports.delete = function(req, res) {
    Mention.delete(req.params.mentionId, function(err, mention) {
        if (err)
            res.send(err);
        res.json({ message: 'Mention successfully deleted' });
    });
};