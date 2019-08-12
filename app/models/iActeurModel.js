'user strict';
let sql = require('../db');
let msg = require('../util');

//Incident : ActeurIncident
let ActeurIncident = function(acteurincident) {
    this.libelle_acteurincident = acteurincident.libelle_acteurincident;
    this.etat_acteurincident = acteurincident.etat_acteurincident;
};

ActeurIncident.create = function(newActeurIncident, result) { ///validate
    sql.query("INSERT INTO i_acteurincident set ?", newActeurIncident, function(err, res) {

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
ActeurIncident.getById = function(acteurincidentId, result) { ///validate
    sql.query("Select * from i_acteurincident where id_acteurincident = ? ", acteurincidentId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
ActeurIncident.getAll = function(result) { ///validate
    sql.query("Select * from i_acteurincident", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all acteurincident with success');
            result(null, res);
        }
    });
};
ActeurIncident.update = function(acteurincidentId, acteurincident, result) { ///validate
    sql.query("UPDATE i_acteurincident SET ? WHERE id_acteurincident = ?", [acteurincident, acteurincidentId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + acteurincidentId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
ActeurIncident.delete = function(acteurincidentId, result) { ///validate
    sql.query("DELETE FROM i_acteurincident WHERE id_acteurincident = ?", [acteurincidentId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + acteurincidentId);
            result(null, msg.DATA_DELETED);
        }
    });
};

module.exports = ActeurIncident;