'user strict';

module.exports = function(app) {

    let Mention = require('../controllers/sMentionCtrl');

    // Mention Routes
    app.route('/mention')
        .get(Mention.getAll)
        .post(Mention.create);

    app.route('/mention/:mentionId')
        .get(Mention.getById)
        .put(Mention.update)
        .delete(Mention.delete);
};