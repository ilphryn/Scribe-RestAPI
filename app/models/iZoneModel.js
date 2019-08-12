'user strict';
let sql = require('../db');
let msg = require('../util');

//Incident : ZoneIncident
let ZoneIncident = function(zoneincident) {
    this.libelle_zoneincident = zoneincident.libelle_zoneincident;
    this.etat_zoneincident = zoneincident.etat_zoneincident;
};

ZoneIncident.create = function(newZoneIncident, result) { ///validate
    sql.query("INSERT INTO i_zoneincident set ?", newZoneIncident, function(err, res) {

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
ZoneIncident.getById = function(zoneincidentId, result) { ///validate
    sql.query("Select * from i_zoneincident where id_zoneincident = ? ", zoneincidentId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
ZoneIncident.getAll = function(result) { ///validate
    sql.query("Select * from i_zoneincident", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all zoneincident with success');
            result(null, res);
        }
    });
};
ZoneIncident.update = function(zoneincidentId, zoneincident, result) { ///validate
    sql.query("UPDATE i_zoneincident SET ? WHERE id_zoneincident = ?", [zoneincident, zoneincidentId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + zoneincidentId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
ZoneIncident.delete = function(zoneincidentId, result) { ///validate
    sql.query("DELETE FROM i_zoneincident WHERE id_zoneincident = ?", [zoneincidentId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + zoneincidentId);
            result(null, msg.DATA_DELETED);
        }
    });
};


module.exports = ZoneIncident;