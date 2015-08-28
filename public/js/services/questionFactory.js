angular.module('lfv.services').service('questionFactory', function () {
    this.createQuestion = function (type) {
        var question;

        if (type === "YesOn") {
            question = new FullTime();
        } else if (type === "Simple") {
            question = new PartTime();
        }
    }
});
