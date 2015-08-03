var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment'),
    validate = require('mongoose-validator'),
    PossibleAnswerSchema = require('./possibleAnswerModel').schema;
var extend = require('mongoose-validator').extend;

extend('isArrayLength', function (val) {
    return val.length >= 2;
}, 'Number of answers should be 2 or more.');

var possibleAnswersValidator = [
    validate({
        validator: 'isArrayLength'
    })
];

var questionSchema = new Schema({
    number: Schema.ObjectId,
    text: { type: String, required: true },
    possibleAnswers: { type: [PossibleAnswerSchema], required: true, validate: possibleAnswersValidator },
    type: String
});


questionSchema.plugin(autoIncrement.plugin, { model: 'Question', field: 'number' });
module.exports = mongoose.model('Question', questionSchema);

