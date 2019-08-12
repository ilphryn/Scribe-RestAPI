'user strict';
let sql = require('../db');
let msg = require('../util');

//Signalisation : Destinataire
let Destinataire = function(destinataire) {
    this.libelle_destinataire = destinataire.libelle_destinataire;
    this.etat_destinataire = destinataire.etat_destinataire;
};

Destinataire.create = function(newDestinataire, result) { ///validate
    sql.query("INSERT INTO s_destinataire set ?", newDestinataire, function(err, res) {

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
Destinataire.getById = function(destinataireId, result) { ///validate
    sql.query("Select * from s_destinataire where id_destinataire = ? ", destinataireId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Destinataire.getAll = function(result) { ///validate
    sql.query("Select * from s_destinataire", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all destinataire with succes');
            result(null, res);
        }
    });
};
Destinataire.update = function(destinataireId, destinataire, result) { ///validate
    sql.query("UPDATE s_destinataire SET ? WHERE id_destinataire = ?", [destinataire, destinataireId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + destinataireId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Destinataire.delete = function(destinataireId, result) { ///validate
    sql.query("DELETE FROM s_destinataire WHERE id_destinataire = ?", [destinataireId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + destinataireId);
            result(null, msg.DATA_DELETED);
        }
    });
};