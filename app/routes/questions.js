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
    questionModel(req.body.question).save(function (err) {
        if (err) {
            res.send(err);
        }

        res.send(true);
    });
};

exports.getAll = function (req, res) {
    questionModel.find(function (err, questions) {
        if (err) {
            res.status(400).send(err);
        }

        res.json(questions);
    });
};

exports.create = function (req, res) {
    questionModel(req.body).save(function(err, question) {
        if (!err) {
            console.log("Item added");
            res.send(question);
        }
        else
        {
            console.log(err);
            res.status(400).send(err);
        }
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

