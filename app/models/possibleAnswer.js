var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var possibleAnswerSchema = mongoose.model('PossibleAnswer', {
    number : Number,
    text : String
});

possibleAnswerSchema.plugin(autoIncrement.plugin, { model: 'PossibleAnswer', field: 'number' });
module.exports = possibleAnswerSchema;
