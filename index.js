var readLineSync = require('readline-sync');
var score = 0;
var userName = readLineSync.question("What's your name? " )
console.log("Welcome " + userName + " to Do you know Suchita?")

// play function

function play(question, answer){
  var userAnswer = readLineSync.question(question);


  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("You're right!")
    score = score+1;
  }else{
    console.log("Wrong answer!")
  }
  console.log("----------------------------");
}

var questions = [{
  question: "Where do I live? ",
  answer: "Mumbai"
},
{
  question: "What's my favorite dish? ",
  answer: "Gulab Jamun"
},
{
  question: "What's my favorite color? ",
  answer: "White"
}]

for(i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Yay! your score is: ", score)
if(score>=2){
  console.log(userName, score)
}