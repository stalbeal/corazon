/**
 * QuestionController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {
    validate: function(req, res) {
        answer = {
            question1: req.param('question1'),
            question2: req.param('question2'),
            question3: req.param('question3'),
            question4: req.param('question4'),
            valid: false
        }

        var rightAnswer = 0;
        var question1ItsOk = answer.question1.toUpperCase() === 'stephany'.toUpperCase();
        if (question1ItsOk)
            rightAnswer++;
        else
        	console.log('question 1 invalid');

        var question2ItsOk = answer.question2.toUpperCase() === '16'.toUpperCase();
        if (question2ItsOk)
            rightAnswer++;
        else
        	console.log('question 2 invalid');


        var question3ItsOk = answer.question3.toUpperCase() === 'oscar'.toUpperCase();
        if (question3ItsOk)
            rightAnswer++;
        else
        	console.log('question 3 invalid');


        var question4ItsOk = answer.question4.toUpperCase() === '7'.toUpperCase();
        if (question4ItsOk)
            rightAnswer++;
        else
        	console.log('question 4 invalid');


        if(rightAnswer==4)
        	answer.valid=true;

        console.log(answer);
        res.view({
            answer: answer
        });
    }

};