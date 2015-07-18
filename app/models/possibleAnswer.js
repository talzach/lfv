var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');

var possibleAnswerSchema = new Schema({
    number: Schema.ObjectId,
    text: String
});

possibleAnswerSchema.plugin(autoIncrement.plugin, {model: 'PossibleAnswer', field: 'number'});
module.exports = {
    model : mongoose.model('PossibleAnswer', possibleAnswerSchema),
    schema : possibleAnswerSchema
};
