'user strict';
let sql = require('../db');
let msg = require('../util');

//Hotline : Technicien
let Technicien = function(technicien) {
    this.id_technicien = technicien.id_technicien;
    this.nom = technicien.nom;
    this.prenoms = technicien.prenoms;
    this.contact = technicien.contact;
    this.entreprise = technicien.entreprise;
    this.zone = technicien.zone;
    this.segment = technicien.segment;

};

Technicien.create = function(newTechnicien, result) { ///validate
    sql.query("INSERT INTO h_technicien set ?", newTechnicien, function(err, res) {

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
Technicien.getById = function(technicienId, result) { ///validate
    sql.query("Select * from h_technicien where id_technicien = ? ", technicienId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Technicien.getAll = function(result) { ///validate
    sql.query("Select * from h_technicien", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all technicien with success');
            result(null, res);
        }
    });
};
Technicien.update = function(technicienId, technicien, result) { ///validate
    sql.query("UPDATE h_technicien SET ? WHERE id_technicien = ?", [technicien, technicienId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + technicienId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Technicien.delete = function(technicienId, result) { ///validate
    sql.query("DELETE FROM h_technicien WHERE id_technicien = ?", [technicienId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + technicienId);
            result(null, msg.DATA_DELETED);
        }
    });
};