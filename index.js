const selectedQuestions = quAndAn.sort(function () { return (Math.random() - Math.random()) }).slice(0, 5);
let score = 0;
let questionIndex = 0;

const gradeQuestion = (ans) => {
    if (ans != selectedQuestions[questionIndex].answer) {
        score += 10;
        console.log(score);
    };
    
    //increment questionIndex by 1
    questionIndex += 1;
};
const renderSucess = () => {
    console.log('final score is' + score + ' on 50')
    $('.question-number').text('');
    $('.question-question').text('');
    $('.options1').text('');
    $('.options2').text('');
    $('.options3').text('');
    $('.options4').text('');
    if (score >= 50) {
        $('<p>Congrats!!! !</p>').appendTo('.question-question');
        $('.question-number').text('Your score is ' + score + '/' + 50);
    } else {
        $('.question-number').text('Your score is ' + score + '/' + 50);
        $('<p>Go Study More,You Can Do Better!</p>').appendTo('.question-question');

    }

}
//call function to renderqueston(question index)
const renderQuestion = (qIndex) => {
    let question = selectedQuestions[qIndex];
    //get question number and populate with question number
    $('.question-number').text('');
    $('.question-question').text('');
    $('.options1').text('');
    $('.options2').text('');
    $('.options3').text('');
    $('.options4').text('');
    $('.question-number').text('question' + (qIndex + 1));
    //get question and populate with question
    $('.question-question').text(question.question);
    // get question-option and populate with option as radio
    question.options.forEach((element, i) => {
        let opt = ".options" + (i + 1);

        let radiobut = $('<input type="radio" name="answer" value=" + element +"/> ');

        let radiolab = $('<label for=' + element + '>' + element + '</label>');
        radiobut.appendTo(opt);
        radiolab.appendTo(opt);

    });
    $(".question-options input:radio[name='answer']").click(function () {


        if (questionIndex == (selectedQuestions.length - 1)) {
            gradeQuestion(this.value)
            renderSucess()
        } else {
            gradeQuestion(this.value)
            renderQuestion(questionIndex)
        }
    });
};
//on click on options run functions gradeQuestion(e)
$(document).ready(function () {
    renderQuestion(questionIndex);
});