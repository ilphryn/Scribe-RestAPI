'user strict';
let sql = require('../db');
let msg = require('../util');

//Hotline
let Hotline = function(hotline) {
    this.id_assistance = hotline.id_assistance;
    this.date_reception = hotline.date_reception;
    this.contact_technicien = hotline.contact_technicien;
    this.nd = hotline.nd;
    this.signalisation = hotline.signalisation;
    this.date_transmission = hotline.date_transmission;
    this.acteur = hotline.acteur;
    this.action_corrective = hotline.action_corrective;
    this.statut = hotline.statut;
    this.date_reponse = hotline.date_reponse;
    this.duree = hotline.duree;
    this.commentaire = hotline.commentaire;
    this.ress_mutation = hotline.ress_mutation;
    this.noeud_mutation = hotline.noeud_mutation;
    this.cause_mutation = hotline.cause_mutation;
    this.nd_occupation = hotline.nd_occupation;
    this.login_agent = hotline.login_agent;
    this.activite = hotline.activite;
};

Hotline.create = function(newHotline, result) { ///validate
    sql.query("INSERT INTO hotline set ?", newHotline, function(err, res) {

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
Hotline.getById = function(hotlineId, result) { ///validate
    sql.query("Select * from hotline where id_hotline = ? ", hotlineId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Hotline.getAll = function(result) { ///validate
    sql.query("Select * from hotline", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all hotline with success');
            result(null, res);
        }
    });
};
Hotline.update = function(hotlineId, hotline, result) { ///validate
    sql.query("UPDATE hotline SET ? WHERE id_hotline = ?", [hotline, hotlineId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + hotlineId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Hotline.delete = function(hotlineId, result) { ///validate
    sql.query("DELETE FROM hotline WHERE id_hotline = ?", [hotlineId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + hotlineId);
            result(null, msg.DATA_DELETED);
        }
    });
};