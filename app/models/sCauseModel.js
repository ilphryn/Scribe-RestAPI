'user strict';
let sql = require('../db');
let msg = require('../util');

//Signalisation : Cause
let Cause = function(cause) {
    this.libelle_cause = cause.libelle_cause;
    this.etat_cause = cause.etat_cause;
};

Cause.create = function(newCause, result) { ///validate
    sql.query("INSERT INTO s_cause set ?", newCause, function(err, res) {

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
Cause.getById = function(causeId, result) { ///validate
    sql.query("Select * from s_cause where id_cause = ? ", causeId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Cause.getAll = function(result) { ///validate
    sql.query("Select * from s_cause", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all cause with success');
            result(null, res);
        }
    });
};
Cause.update = function(causeId, cause, result) { ///validate
    sql.query("UPDATE s_cause SET ? WHERE id_cause = ?", [cause, causeId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + causeId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Cause.delete = function(causeId, result) { ///validate
    sql.query("DELETE FROM s_cause WHERE id_cause = ?", [causeId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + causeId);
            result(null, msg.DATA_DELETED);
        }
    });
};