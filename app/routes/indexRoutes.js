var questions = require('./questions');

module.exports = function(app) {

    // Question routes
    app.get('/api/questions', questions.getAll);
    app.post('/api/questions', questions.create);
    app.get('/api/questions/:number', questions.get);
    app.put('/api/questions/:number', questions.update);
    app.delete('/api/questions/:number', questions.remove);

    // UI route
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html');
    });

};
