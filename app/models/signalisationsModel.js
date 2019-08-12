'user strict';
let sql = require('../db');
let msg = require('../util');


//Signalisations Model

let Signalisations = function(signalisations) {
    this.id_signalisations = signalisations.id_signalisations;
    this.origine = signalisations.origine;
    this.initiateur = signalisations.initiateur;
    this.nom_client = signalisations.nom_client;
    this.contact_client = signalisations.contact_client;
    this.num_dossier = signalisations.num_dossier;
    this.dateheure_signalisations = signalisations.dateheure_signalisations;
    this.dateheure_reception = signalisations.dateheure_reception;
    this.idligne = signalisations.idligne;
    this.signalisations = signalisations.signalisations;
    this.type_reclamation = signalisations.type_reclamation;
    this.remontee = signalisations.remontee;
    this.detail_remontee = signalisations.detail_remontee;
    this.analyse = signalisations.analyse;
    this.constitution = signalisations.constitution;
    this.dateheure_transmission = signalisations.dateheure_transmission;
    this.destinataire = signalisations.destinataire;
    this.dateheure_echeance = signalisations.dateheure_echeance;
    this.statut = signalisations.statut;
    this.cr_intervention = signalisations.cr_intervention;
    this.dateheure_releve = signalisations.dateheure_releve;
    this.rootcause = signalisations.rootcause;
    this.observation = signalisations.observation;
    this.dateheure_modification = signalisations.dateheure_modification;
    this.blocage = signalisations.blocage;
    this.nbre_relance = signalisations.nbre_relance;
    this.login_agent = signalisations.login_agent;
};

Signalisations.create = function(newSignalisations, result) { ///validate
    sql.query("INSERT INTO signalisations set ?", newSignalisations, function(err, res) {

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
Signalisations.getById = function(signalisationsId, result) { ///validate
    sql.query("Select * from signalisations where id_signalisation = ? ", signalisationsId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Signalisations.getAll = function(result) { ///validate
    sql.query("Select * from signalisations", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all signalisations with success');
            result(null, res);
        }
    });
};
Signalisations.update = function(signalisationsId, signalisations, result) { ///validate
    sql.query("UPDATE signalisations SET ? WHERE id_signalisations = ?", [signalisations, signalisationsId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + signalisationsId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Signalisations.delete = function(signalisationsId, result) { ///validate
    sql.query("DELETE FROM signalisations WHERE id_signalisations = ?", [signalisationsId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + signalisationsId);
            result(null, msg.DATA_DELETED);
        }
    });
};

module.exports = Signalisations;