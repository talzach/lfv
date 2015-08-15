var questionModel = require('./../models/questionModel');

exports.get = function (req, res) {
    questionModel.find({number: req.params.number}, function (err, questions) {
        if (err) {
            return res.send(400, {error: err});
        }

        questions[0].possibleAnswers.

        res.json(questions[0]);
    });
};

exports.update = function (req, res) {
    var query = { 'number': req.body.number };
    questionModel.findOneAndUpdate(query, req.body, {upsert: true, new: true},
        function (err, question) {
            if (err) {
                return res.send(500, {error: err});
            }

            return res.send(question);
        });
};

exports.getAll = function (req, res) {
    questionModel.find(function (err, questions) {
        if (err) {
            return res.send(400, {error: err});
        }

        res.json(questions);
    });
};

exports.create = function (req, res) {
    questionModel(req.body).save(function (err, question) {
        if (!err) {
            console.log("Item added");
            res.send(question);
        }
        else {
            console.log(err);
            return res.send(400, {error: err});
        }
    });
};

exports.remove = function (req, res) {
    questionModel.remove({number: req.params.number}, function (err) {
        if (err) {
            return res.send(400, {error: err});
        }

        res.send(true);
    });
};

