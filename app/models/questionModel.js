let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment'),
    validate = require('mongoose-validator'),
    answerSchema = require('./answerModel').schema;
let extend = require('mongoose-validator').extend;

extend('isArrayLength', val => (val.length >= 2), 'Number of answers should be 2 or more.');

let possibleAnswersValidator = [
    validate({
        validator: 'isArrayLength'
    })
];

let questionSchema = new Schema({
    number: { type: Number, required: true },
    text: { type: String, required: true },
    possibleAnswers: { type: [answerSchema], required: true, validate: possibleAnswersValidator },
    type: { type: String, required: true }
});

questionSchema.plugin(autoIncrement.plugin, { model: 'Question', field: 'number' });
module.exports = mongoose.model('Question', questionSchema);

