$(document).ready(function(){

var magic8Ball = {};

magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "maybe someday", "In your dreams."];

$("#answer").hide();

magic8Ball.answerQuestion = function(question)
{
      $("#answer").fadeIn(3000);

      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

      $("#8ball").effect("shake");

      var randomNumber = Math.random();
      var randomNumberFromArray = randomNumber * this.listOfAnswers.length;
      var randomIndex = Math.floor(randomNumberFromArray);
      var answer = this.listOfAnswers[randomIndex];

      $("#answer").text(answer);

      console.log(question);
      console.log(answer);

};

//set up question to be asked for 8-ball

var onClick = function()
{
      $("#answer").hide();

      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

  setTimeout(
    function()
    {
      var question = prompt("ASK A YES/NO QUESTION!")
      magic8Ball.answerQuestion(question)
    }, 300);

};

    $("#questionButton").click( onClick );

});



//CALL FUNCTION for console to test

/*magic8Ball.askQuestion("Do I like JavaScript?");



  OBJECT magic 8-ball
	PROPERTY list of answers = [yes, no, maybe, someday, never, absolutely]

FUNCTION ask question

	INPUT ask the magic 8-ball a qustion
    shake the 8-ball
    8-ball picks random answer from list of answers
    OUTPUT answer

    FUNCTION STOP

RUN FUNCTION ask question WITH INPUT "will I ever learn JS?"*/
