var readLineSync = require('readline-sync');
var score = 0;
var userName = readLineSync.question("What's your name? ")
console.log("Welcome " + userName + " to Do you know Suchita?")

// play function

function play(question, answer) {
  var userAnswer = readLineSync.question(question);


  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("You're right!")
    score = score + 1;
  } else {
    console.log("Wrong answer!")
  }
  console.log("----------------------------");
}

var questions = [{
  question: "Where do I live? ",
  answer: "Mumbai"
},
{
  question: "Which is my native place? ",
  answer: "Mahabaleshwar"
},
{
  question: "What's my favorite color? ",
  answer: "White"
},
{
  question: "My favorite place in Mumbai ",
  answer: "Marine lines"
},
{
  question: "What is my date of birth (dd/mm/yyyy)",
  answer: "19/12/1993"
},]

for (i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Yay! your score is: ", score)
if (score >= 2) {
  console.log(userName, score)
}
