'user strict';
let sql = require('../db');
let msg = require('../util');

//Hotline : Action
let Action = function(action) {
    this.libelle_action = action.libelle_action;
    this.etat_action = action.etat_action;
};

Action.create = function(newAction, result) { ///validate
    sql.query("INSERT INTO h_action set ?", newAction, function(err, res) {

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
Action.getById = function(actionId, result) { ///validate
    sql.query("Select * from h_action where id_action = ? ", actionId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Action.getAll = function(result) { ///validate
    sql.query("Select * from h_action", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all action with success');
            result(null, res);
        }
    });
};
Action.update = function(actionId, action, result) { ///validate
    sql.query("UPDATE h_action SET ? WHERE id_action = ?", [action, actionId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + actionId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Action.delete = function(actionId, result) { ///validate
    sql.query("DELETE FROM h_action WHERE id_action = ?", [actionId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + actionId);
            result(null, msg.DATA_DELETED);
        }
    });
};

module.exports = Action;