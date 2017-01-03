let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');

let answerSchema = new Schema({
    number: Number,
    text: String,
    restrictedQuestions: [{ type: Schema.Types.ObjectId, ref: 'Question' }]
});

answerSchema.plugin(autoIncrement.plugin, { model: 'answer', field: 'number' });
module.exports = {
    model : mongoose.model('answer', answerSchema),
    schema : answerSchema
};
