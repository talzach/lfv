var questionModel = require('./../models/question');

module.exports = function(app) {
    app.get('/api/questions/1', function(req, res) {
        questionModel.find({ 'number' : 1 }, function(err, question)
        {
            if(err)
            {
                res.send(err);
            }

            res.json(question);
        });
    });

    //var question = new questionModel({ text : 'worked! 1' });
    //question.save(function(err) {
    //    if (err) {
    //        return err;
    //    }
    //    else {
    //        console.log("Post saved");
    //    }
    //});
};

