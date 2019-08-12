'user strict';
let sql = require('../db');
let msg = require('../util');

//Signalisation : Mention
let Mention = function(mention) {
    this.libelle_mention = mention.libelle_mention;
    this.etat_mention = mention.etat_mention;
};

Mention.create = function(newMention, result) { ///validate
    sql.query("INSERT INTO s_mention set ?", newMention, function(err, res) {

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
Mention.getById = function(mentionId, result) { ///validate
    sql.query("Select * from s_mention where id_mention = ? ", mentionId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Mention.getAll = function(result) { ///validate
    sql.query("Select * from s_mention", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all mention with success');
            result(null, res);
        }
    });
};
Mention.update = function(mentionId, mention, result) { ///validate
    sql.query("UPDATE s_mention SET ? WHERE id_mention = ?", [mention, mentionId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + mentionId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Mention.delete = function(mentionId, result) { ///validate
    sql.query("DELETE FROM s_mention WHERE id_mention = ?", [mentionId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + mentionId);
            result(null, msg.DATA_DELETED);
        }
    });
};

module.exports = Mention;