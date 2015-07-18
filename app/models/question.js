var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');
var PossibleAnswerModel = require('./possibleAnswer');

var questionSchema = new Schema({
    number: Schema.ObjectId,
    text: String,
    possibleAnswers: [PossibleAnswerModel],
    type: { type : String, default : 'Yesss' }
});

questionSchema.plugin(autoIncrement.plugin, {model: 'Question', field: 'number'});
module.exports = mongoose.model('Question', questionSchema);

