var questionModel = require('./../models/question');

module.exports = function(app) {
    app.get('/api/questions', function(req, res) {
        questionModel.find({ 'number' : 10 }, function(err, question)
        {
            if(err)
            {
                res.send(err);
            }

            res.json(question);
        });
    });

    //var question = new questionModel({
    //    text : 'worked! 1',
    //    possibleAnswers: [{text : 'possible!!!'}, {text : 'every thing'}]
    //});
    //
    //question.save(function(err) {
    //    if (err) {
    //        return err;
    //    }
    //    else {
    //        console.log("Post saved");
    //    }
    //});
};

