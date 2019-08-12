'user strict';
let sql = require('../db');
let msg = require('../util');

//Hotline : Signalisation
let Signalisation = function(signalisation) {
    this.libelle_signalisation = signalisation.libelle_signalisation;
    this.etat_signalisation = signalisation.etat_signalisation;
};

Signalisation.create = function(newSignalisation, result) { ///validate
    sql.query("INSERT INTO h_signalisation set ?", newSignalisation, function(err, res) {

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
Signalisation.getById = function(signalisationId, result) { ///validate
    sql.query("Select * from h_signalisation where id_signalisation = ? ", signalisationId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Signalisation.getAll = function(result) { ///validate
    sql.query("Select * from h_signalisation", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all signalisation with success');
            result(null, res);
        }
    });
};
Signalisation.update = function(signalisationId, signalisation, result) { ///validate
    sql.query("UPDATE h_signalisation SET ? WHERE id_signalisation = ?", [signalisation, signalisationId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + signalisationId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Signalisation.delete = function(signalisationId, result) { ///validate
    sql.query("DELETE FROM h_signalisation WHERE id_signalisation = ?", [signalisationId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + signalisationId);
            result(null, msg.DATA_DELETED);
        }
    });
};