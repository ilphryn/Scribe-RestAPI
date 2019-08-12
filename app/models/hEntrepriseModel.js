'user strict';
let sql = require('../db');
let msg = require('../util');

//Hotline : Entreprise
let Entreprise = function(entreprise) {
    this.nom_entreprise = entreprise.nom_entreprise;
    this.etat_entreprise = entreprise.etat_entreprise;
};

Entreprise.create = function(newEntreprise, result) { ///validate
    sql.query("INSERT INTO h_entreprise set ?", newEntreprise, function(err, res) {

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
Entreprise.getById = function(entrepriseId, result) { ///validate
    sql.query("Select * from h_entreprise where id_entreprise = ? ", entrepriseId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Entreprise.getAll = function(result) { ///validate
    sql.query("Select * from h_entreprise", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all entreprise with success');
            result(null, res);
        }
    });
};
Entreprise.update = function(entrepriseId, entreprise, result) { ///validate
    sql.query("UPDATE h_entreprise SET ? WHERE id_entreprise = ?", [entreprise, entrepriseId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + entrepriseId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Entreprise.delete = function(entrepriseId, result) { ///validate
    sql.query("DELETE FROM h_entreprise WHERE id_entreprise = ?", [entrepriseId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + entrepriseId);
            result(null, msg.DATA_DELETED);
        }
    });
};

module.exports = Entreprise;