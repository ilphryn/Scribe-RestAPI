'user strict';
let sql = require('../db');
let msg = require('../util');

//Incident : TypeIncident
let TypeIncident = function(typeincident) {
    this.libelle_typeincident = typeincident.libelle_typeincident;
    this.etat_typeincident = typeincident.etat_typeincident;
};

TypeIncident.create = function(newTypeIncident, result) { ///validate
    sql.query("INSERT INTO i_typeincident set ?", newTypeIncident, function(err, res) {

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
TypeIncident.getById = function(typeincidentId, result) { ///validate
    sql.query("Select * from i_typeincident where id_typeincident = ? ", typeincidentId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
TypeIncident.getAll = function(result) { ///validate
    sql.query("Select * from i_typeincident", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all typeincident with success');
            result(null, res);
        }
    });
};
TypeIncident.update = function(typeincidentId, typeincident, result) { ///validate
    sql.query("UPDATE i_typeincident SET ? WHERE id_typeincident = ?", [typeincident, typeincidentId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + typeincidentId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
TypeIncident.delete = function(typeincidentId, result) { ///validate
    sql.query("DELETE FROM i_typeincident WHERE id_typeincident = ?", [typeincidentId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + typeincidentId);
            result(null, msg.DATA_DELETED);
        }
    });
};