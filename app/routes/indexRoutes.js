var questionModel = require('./../models/question');

module.exports = function(app) {

    app.get('/api/questions/10', function(req, res) {
        questionModel.find({ 'number' : 10 }, function(err, question)
        {
            if(err)
            {
                res.send(err);
            }

            res.json(question);
        });
    });

    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html');
    });
};
