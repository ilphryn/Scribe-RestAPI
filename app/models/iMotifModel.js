'user strict';
let sql = require('../db');
let msg = require('../util');

//Incident : MotifIncident
let MotifIncident = function(motifincident) {
    this.libelle_motifincident = motifincident.libelle_motifincident;
    this.etat_motifincident = motifincident.etat_motifincident;
};

MotifIncident.create = function(newMotifIncident, result) { ///validate
    sql.query("INSERT INTO i_motifincident set ?", newMotifIncident, function(err, res) {

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
MotifIncident.getById = function(motifincidentId, result) { ///validate
    sql.query("Select * from i_motifincident where id_motifincident = ? ", motifincidentId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
MotifIncident.getAll = function(result) { ///validate
    sql.query("Select * from i_motifincident", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all motifincident with success');
            result(null, res);
        }
    });
};
MotifIncident.update = function(motifincidentId, motifincident, result) { ///validate
    sql.query("UPDATE i_motifincident SET ? WHERE id_motifincident = ?", [motifincident, motifincidentId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + motifincidentId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
MotifIncident.delete = function(motifincidentId, result) { ///validate
    sql.query("DELETE FROM i_motifincident WHERE id_motifincident = ?", [motifincidentId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + motifincidentId);
            result(null, msg.DATA_DELETED);
        }
    });
};

module.exports = MotifIncident;