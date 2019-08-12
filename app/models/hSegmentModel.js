'user strict';
let sql = require('../db');
let msg = require('../util');

//Hotline : Segment
let Segment = function(segment) {
    this.libelle_segment = segment.libelle_segment;
    this.etat_segment = segment.etat_segment;
};

Segment.create = function(newSegment, result) { ///validate
    sql.query("INSERT INTO h_segment set ?", newSegment, function(err, res) {

        if (err) {
            console.log(err);
            result(err, null);
            next();
        } else {
            console.log('data successfully added => id=' + res.insertId);
            result(null, msg.DATA_ADDED);
        }
    });
};
Segment.getById = function(segmentId, result) { ///validate
    sql.query("Select * from h_segment where id_segment = ? ", segmentId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Segment.getAll = function(result) { ///validate
    sql.query("Select * from h_segment", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all segment with success');
            result(null, res);
        }
    });
};
Segment.update = function(segmentId, segment, result) { ///validate
    sql.query("UPDATE h_segment SET ? WHERE id_segment = ?", [segment, segmentId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + segmentId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Segment.delete = function(segmentId, result) { ///validate
    sql.query("DELETE FROM h_segment WHERE id_segment = ?", [segmentId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + segmentId);
            result(null, msg.DATA_DELETED);
        }
    });
};

module.exports = Segment;