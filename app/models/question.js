var mongoose = require('mongoose');

module.exports = mongoose.model('Question', {
    name : {type : String, default: ''}
});
