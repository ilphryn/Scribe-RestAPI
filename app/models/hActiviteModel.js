'user strict';
let sql = require('../db');
let msg = require('../util');

//Hotline : Activite
let Activite = function(activite) {
    this.libelle_activite = activite.libelle_activite;
    this.etat_activite = activite.etat_activite;
};

Activite.create = function(newActivite, result) { ///validate
    sql.query("INSERT INTO h_activite set ?", newActivite, function(err, res) {

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
Activite.getById = function(activiteId, result) { ///validate
    sql.query("Select * from h_activite where id_activite = ? ", activiteId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Activite.getAll = function(result) { ///validate
    sql.query("Select * from h_activite", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all activite with success');
            result(null, res);
        }
    });
};
Activite.update = function(activiteId, activite, result) { ///validate
    sql.query("UPDATE h_activite SET ? WHERE id_activite = ?", [activite, activiteId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + activiteId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Activite.delete = function(activiteId, result) { ///validate
    sql.query("DELETE FROM h_activite WHERE id_activite = ?", [activiteId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + activiteId);
            result(null, msg.DATA_DELETED);
        }
    });
};