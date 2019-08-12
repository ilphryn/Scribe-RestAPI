'use strict';

let Segment = require('../models/hSegmentModel');

exports.getAll = function(req, res) {
    Segment.getAll(function(err, segment) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', segment);
        res.send(segment);
    });
};


exports.create = function(req, res) {
    let new_segment = new Segment(req.body);
    Segment.create(new_segment, function(err, segment) {
        if (err)
            res.send(err);
        res.json(segment);
    });
};


exports.getById = function(req, res) {
    Segment.getById(req.params.segmentId, function(err, segment) {
        if (err)
            res.send(err);
        res.json(segment);
    });
};


exports.update = function(req, res) {
    Segment.update(req.params.segmentId, new Segment(req.body), function(err, segment) {
        if (err)
            res.send(err);
        res.json(segment);
    });
};


exports.delete = function(req, res) {
    Segment.delete(req.params.segmentId, function(err, segment) {
        if (err)
            res.send(err);
        res.json({ message: "Segment successfully deleted" });
    });
};