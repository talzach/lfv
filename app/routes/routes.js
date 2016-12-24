var questions = require('./questions'),
    path = require('path'),
    appRoot = path.dirname(require.main.filename);

module.exports = function (app) {

    // Question routes
    app.get('/api/questions/:number', questions.get);
    app.post('/api/questions/next', questions.getNext);
    app.post('/api/questions/nextNumber', questions.getNextNumber);
    app.get('/api/questions', questions.getAll);
    app.post('/api/questions', questions.create);
    app.put('/api/questions', questions.update);
    app.delete('/api/questions/:number', questions.remove);

    // Admin UI route
    app.get('/admin*', function (req, res) {
        res.sendFile(appRoot + '/public/views/admin/adminIndex.html');
    });

    // UI route
    app.get('*', function (req, res) {
        res.sendFile(appRoot + '/public/views/index.html');
    });
};
