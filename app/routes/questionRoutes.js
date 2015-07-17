var questionModel = require('./../models/question');

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
};

