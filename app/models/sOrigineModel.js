'user strict';
let sql = require('../db');
let msg = require('../util');

//Signalisation : Origine
let Origine = function(origine) {
    this.libelle_origine = origine.libelle_origine;
    this.etat_origine = origine.etat_origine;
};

Origine.create = function(newOrigine, result) { ///validate
    sql.query("INSERT INTO s_origine set ?", newOrigine, function(err, res) {

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
Origine.getById = function(origineId, result) { ///validate
    sql.query("Select * from s_origine where id_origine = ? ", origineId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Origine.getAll = function(result) { ///validate
    sql.query("Select * from s_origine", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all origine with success');
            result(null, res);
        }
    });
};
Origine.update = function(origineId, origine, result) { ///validate
    sql.query("UPDATE s_origine SET ? WHERE id_origine = ?", [origine, origineId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + origineId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Origine.delete = function(origineId, result) { ///validate
    sql.query("DELETE FROM s_origine WHERE id_origine = ?", [origineId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + origineId);
            result(null, msg.DATA_DELETED);
        }
    });
};