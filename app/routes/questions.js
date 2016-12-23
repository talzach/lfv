var questionModel = require('./../models/questionModel');

exports.get = function (req, res) {
    questionModel.find({number: req.params.number})
    .populate('possibleAnswers.restrictedQuestions')
    .exec(function (err, questions) {
        if (err) {
            console.log(err);
            return res.status(400).send({error: err});
        }

        res.json(questions[0]);
    });
};

exports.getNext = function (req, res) {
    questionModel.where('_id').nin(req.body.restrictedQuestions)
        .where('number').gt(req.body.lastQuestionNumber)
        .sort('number')
        .findOne(function (err, question) {
            return res.send(question);
        });
};

exports.update = function (req, res) {
    var query = {'_id': req.body._id};
    questionModel.findOneAndUpdate(query, req.body, {upsert: true, new: true})
        .populate('possibleAnswers.restrictedQuestions')
        .exec(function (err, question) {
            if (err) {
                console.log(err);
                return res.status(500).send({error: err});
            }

            console.log("Question updated");
            return res.send(question);
        });
};

exports.getAll = function (req, res) {
    questionModel.find(
        function (err, questions) {
            if (err) {
                return res.status(400).send({error: err});
            }

            res.json(questions);
        });
};

exports.create = function (req, res) {
    questionModel(req.body).save(function (err, question) {
        if (!err) {
            console.log("Question added");
            res.send(question);
        }
        else {
            console.log(err);
            return res.status(400).send({error: err});
        }
    });
};

exports.remove = function (req, res) {
    questionModel.remove({number: req.params.number}, function (err) {
        if (err) {
            console.log(err);
            return res.status(400).send({error: err});
        }

        res.send(true);
    });
};

