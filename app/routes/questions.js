let questionModel = require('./../models/questionModel');

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

var getNext = function (req, res, numberOnly) {
    questionModel.where('_id').nin(req.body.restrictedQuestions)
        .where('number').gt(req.body.lastQuestionNumber)
        .sort('number')
        .findOne(function (err, question) {
            if (err) {
                return res.status(400).send({error: err});
            }

            if (question) {
                if (numberOnly) {
                    return res.json(question.number);
                } else {
                    return res.send(question);
                }
            } else {
                return res.status(400).send({error: err});
            }
        });
};

exports.getNext = function (req, res) {
    return getNext(req, res);
};


exports.getNextNumber = function (req, res) {
    return getNext(req, res, true);
};

exports.update = function (req, res) {
    let query = {'_id': req.body._id};
    questionModel.findOneAndUpdate(query, req.body, {upsert: true, new: true})
        .populate('possibleAnswers.restrictedQuestions')
        .exec((err, question) => {
            if (err) {
                console.log(err);
                return res.status(500).send({error: err});
            }

            console.log("Question updated");
            return res.send(question);
        });
};

exports.getAll = (req, res) => {
    questionModel.find(
        (err, questions) => {
            if (err) {
                return res.status(400).send({error: err});
            }

            res.json(questions);
        });
};

exports.create = (req, res) => {
    questionModel(req.body).save((err, question) => {
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

exports.remove = (req, res) => {
    questionModel.remove({number: req.params.number}, function (err) {
        if (err) {
            console.log(err);
            return res.status(400).send({error: err});
        }

        res.send(true);
    });
};

