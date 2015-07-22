var questionModel = require('./../models/questionModel');

exports.get = function (req, res) {
    questionModel.find({ number : req.params.number }, function (err, question) {
        if (err) {
            res.send(err);
        }

        res.json(question[0]);
    });
};

exports.update = function (req, res) {
    questionModel(req.body).save(function (err) {
        if (err) {
            res.send(err);
        }

        res.send(true);
    });
};

exports.getAll = function (req, res) {
    questionModel.find(function (err, question) {
        if (err) {
            res.send(err);
        }

        res.json(question[0]);
    });
};

exports.create = function (req, res) {

    questionModel(req.body.question).save(function(err){
        console.log("Item added");
        res.send(true);
    });
};

exports.remove = function (req, res) {
    questionModel.remove({ number:req.params.number }, function (err) {
        if (err) {
            res.send(err);
        }

        res.send(true);
    });
};

var question2 = {
    text : 'worked! 1',
    possibleAnswers: [{text : 'newer', number : 2}, {text : 'every thing'}]
};

var q0 = new questionModel({
    text : 'worked! 1',
    possibleAnswers: [{text : 'possible!!!'}, {text : 'every thing'}]
});

var q = questionModel(question2);
q.save(function(err){
    console.log("Item added");
});

//
//question.save(function(err) {
//    if (err) {
//        return err;
//    }
//    else {
//        console.log("Post saved");
//    }
//});

