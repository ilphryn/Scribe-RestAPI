'user strict';
let sql = require('../db');
let msg = require('../util');

//Hotline : Zone
let Zone = function(zone) {
    this.libelle_zone = zone.libelle_zone;
    this.etat_zone = zone.etat_zone;
};

Zone.create = function(newZone, result) { ///validate
    sql.query("INSERT INTO h_zone set ?", newZone, function(err, res) {

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
Zone.getById = function(zoneId, result) { ///validate
    sql.query("Select * from h_zone where id_zone = ? ", zoneId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Zone.getAll = function(result) { ///validate
    sql.query("Select * from h_zone", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all zone with success');
            result(null, res);
        }
    });
};
Zone.update = function(zoneId, zone, result) { ///validate
    sql.query("UPDATE h_zone SET ? WHERE id_zone = ?", [zone, zoneId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + zoneId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Zone.delete = function(zoneId, result) { ///validate
    sql.query("DELETE FROM h_zone WHERE id_zone = ?", [zoneId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + zoneId);
            result(null, msg.DATA_DELETED);
        }
    });
};

module.exports = Zone;