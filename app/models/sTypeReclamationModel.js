'user strict';
let sql = require('../db');
let msg = require('../util');

//Signalisation : TypeReclamation
let TypeReclamation = function(typereclamation) {
    this.libelle_typereclamation = typereclamation.libelle_typereclamation;
    this.etat_typereclamation = typereclamation.etat_typereclamation;
};

TypeReclamation.create = function(newTypeReclamation, result) { ///validate
    sql.query("INSERT INTO s_typereclamation set ?", newTypeReclamation, function(err, res) {

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
TypeReclamation.getById = function(typereclamationId, result) { ///validate
    sql.query("Select * from s_typereclamation where id_typereclamation = ? ", typereclamationId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
TypeReclamation.getAll = function(result) { ///validate
    sql.query("Select * from s_typereclamation", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all type of reclamation with succes');
            result(null, res);
        }
    });
};
TypeReclamation.update = function(typereclamationId, typereclamation, result) { ///validate
    sql.query("UPDATE s_typereclamation SET ? WHERE id_typereclamation = ?", [typereclamation, typereclamationId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + typereclamationId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
TypeReclamation.delete = function(typereclamationId, result) { ///validate
    sql.query("DELETE FROM s_typereclamation WHERE id_typereclamation = ?", [typereclamationId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + typereclamationId);
            result(null, msg.DATA_DELETED);
        }
    });
};

module.exports = TypeReclamation;