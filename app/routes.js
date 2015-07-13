var questionModel = require('./models/question');

module.exports = function(app) {
    app.get('/api/questions', function(req, res) {
        questionModel.find(function(err, nerds)
        {
           if(err)
           {
               res.send(err);
           }

            res.json(nerds);
        });
    });

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });
};
