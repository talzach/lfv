var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');
var PossibleAnswerSchema = require('./possibleAnswerModel').schema;

var questionSchema = new Schema({
    number: Schema.ObjectId,
    text: String,
    possibleAnswers: [PossibleAnswerSchema],
    type: String
});

questionSchema.plugin(autoIncrement.plugin, { model: 'Question', field: 'number' });
module.exports = mongoose.model('Question', questionSchema);

