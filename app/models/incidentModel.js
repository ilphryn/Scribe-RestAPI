'user strict';
let sql = require('../db');
let msg = require('../util');

//Incident : Incident
let Incident = function(incident) {
    this.id_incident = incident.id_incident;
    this.type_incident = incident.type_incident;
    this.zone = incident.zone;
    this.localication = incident.localication;
    this.motif = incident.motif;
    this.detail_motif = incident.detail_motif;
    this.date_incident = incident.date_incident;
    this.date_constat = incident.date_constat;
    this.estimation_datefin = incident.estimation_datefin;
    this.impact_infra = incident.impact_infra;
    this.clt_tlp = incident.clt_tlp;
    this.clt_adsl = incident.clt_adsl;
    this.clt_fibre = incident.clt_fibre;
    this.clt_entreprise = incident.clt_entreprise;
    this.statut = incident.statut;
    this.date_fin = incident.date_fin;
    this.durée = incident.durée;
    this.acteur = incident.acteur;
    this.projetlynx = incident.projetlynx;
    this.cout_travaux = incident.cout_travaux;
    this.observation = incident.observation;


};

Incident.create = function(newIncident, result) { ///validate
    sql.query("INSERT INTO incident set ?", newIncident, function(err, res) {

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
Incident.getById = function(incidentId, result) { ///validate
    sql.query("Select * from incident where id_incident = ? ", incidentId, function(err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Incident.getAll = function(result) { ///validate
    sql.query("Select * from incident", function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('get all incident with success');
            result(null, res);
        }
    });
};
Incident.update = function(incidentId, incident, result) { ///validate
    sql.query("UPDATE incident SET ? WHERE id_incident = ?", [incident, incidentId], function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully modified => id:' + incidentId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Incident.delete = function(incidentId, result) { ///validate
    sql.query("DELETE FROM incident WHERE id_incident = ?", [incidentId], function(err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data successfully deleted => id:' + incidentId);
            result(null, msg.DATA_DELETED);
        }
    });
};