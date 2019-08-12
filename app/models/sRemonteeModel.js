'user strict';
let sql = require('../db');
let msg = require('../util');

//Signalisation : Rémontées
let Remontee = function(remontee) {
    this.libelle_remontee = remontee.libelle_remontee;
    this.typereclamation = remontee.typereclamation;
    this.etat_remontee = remontee.etat_remontee;
};

Remontee.create = function(newRemontee, result) { ///validate
    sql.query("INSERT INTO s_remontee set ?", newRemontee, function(err, res) {

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
Remontee.getById = function(remonteeId, result) { ///validate
    sql.query("Select * from s_remontee where id_remontee = ? ", remonteeId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Remontee.getAll = function(result) { ///validate
    sql.query("Select * from s_remontee", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all remontee with succes');
            result(null, res);
        }
    });
};
Remontee.update = function(remonteeId, remontee, result) { ///validate
    sql.query("UPDATE s_remontee SET ? WHERE id_remontee = ?", [remontee, remonteeId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + remonteeId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Remontee.delete = function(remonteeId, result) { ///validate
    sql.query("DELETE FROM s_remontee WHERE id_remontee = ?", [remonteeId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + remonteeId);
            result(null, msg.DATA_DELETED);
        }
    });
};
// Remontee.loadByReclamation = function(typereclamation, result) { ///Get remontée by type of reclamations..
//     sql.query("Select * from s_remontee where typereclamation = ? ", typereclamation, function(err, res) {
//         if (err) {
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, res);
//         }
//     });
// };