    'user strict';
    let sql = require('../db');
    let msg = require('../util');

    //Hotline : Acteur
    let Acteur = function(acteur) {
        this.libelle_acteur = acteur.libelle_acteur;
        this.etat_acteur = acteur.etat_acteur;
    };

    Acteur.create = function(newActeur, result) { ///validate
        sql.query("INSERT INTO h_acteur set ?", newActeur, function(err, res) {

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
    Acteur.getById = function(acteurId, result) { ///validate
        sql.query("Select * from h_acteur where id_acteur = ? ", acteurId, function(err, res) {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };
    Acteur.getAll = function(result) { ///validate
        sql.query("Select * from h_acteur", function(err, res) {

            if (err) {
                console.log(err);
                result(null, err);
            } else {
                console.log('get all acteur with success');
                result(null, res);
            }
        });
    };
    Acteur.update = function(acteurId, acteur, result) { ///validate
        sql.query("UPDATE h_acteur SET ? WHERE id_acteur = ?", [acteur, acteurId], function(err, res) {
            if (err) {
                console.log(err);
                result(null, err);
            } else {
                console.log('data successfully modified => id:' + acteurId);
                result(null, msg.DATA_UPDATED);

            }
        });
    };
    Acteur.delete = function(acteurId, result) { ///validate
        sql.query("DELETE FROM h_acteur WHERE id_acteur = ?", [acteurId], function(err, res) {

            if (err) {
                console.log(err);
                result(null, err);
            } else {
                console.log('data successfully deleted => id:' + acteurId);
                result(null, msg.DATA_DELETED);
            }
        });
    };