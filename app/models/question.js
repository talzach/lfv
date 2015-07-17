var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var PossibleAnswer = require('PossibleAnswer');

var questionSchema = mongoose.model('Question', {
    number : Number,
    text : String,
    possibleAnswers : [PossibleAnswer],
    type : String
});

questionSchema.plugin(autoIncrement.plugin, { model: 'Question', field: 'number' });
module.exports = questionSchema;
