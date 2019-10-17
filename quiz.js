var currentQuestion = 0; //no question is displayed by default. initializing it at 0.
var score = 0; //initialing score with 0 as no questions have been answered correctly at start.

var container = document.getElementById("quizContainer"); //storing value of "quizcontainer" div
var questionEl = document.getElementById("question"); //storing value of "question" div
var opt1 = document.getElementById("opt1"); //storing value of "opt1" span
var opt2 = document.getElementById("opt2"); //storing value of "opt2" span
var opt3 = document.getElementById("opt3"); //storing value of "opt3" span
var opt4 = document.getElementById("opt4"); //storing value of "opt4" span

var totQuestions = questions.length; //storing the number of total questions in "totQuestions"
var nextButton = document.getElementById("nextButton"); //storing value of "nextButton" button
var resultCont = document.getElementById("result"); //storing value of "result" div

function loadQuestion(Index) {
  var q = questions[Index];
  questionEl.textContent = Index + 1 + ". " + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;

  if (currentQuestion == 0) {
    document.getElementById("previousButton").style.display = "none";
  }
  if (currentQuestion > 0) {
    document.getElementById("previousButton").style.display = "";
  }
  // var scorecard = document.getElementById("scorecard");
  // scorecard.innerHTML = `Score: ${score} out of ${totQuestions * 10} `;

  document.getElementById(
    "questionnumber"
  ).textContent = `Question: ${currentQuestion + 1} of ${totQuestions}`;

  if (resultCont.style.display == "none") {
    document.getElementById("resetQuiz").style.display = "none";
  }
}

loadQuestion(currentQuestion);

function loadNextQuestion() {
  var selectedOption = document.querySelector("input[type=radio]:checked");
  if (!selectedOption) {
    alert("Answer before moving on!");
    return;
  }
  var answer = selectedOption.value;
  if (questions[currentQuestion].answer == answer) {
    score += 10;
  }
  selectedOption.checked = false;
  currentQuestion++;
  if (currentQuestion == totQuestions - 1) {
    nextButton.textContent = "Finish";
  }
  if (currentQuestion == totQuestions) {
    document.getElementById("resetQuiz").style.display = "block";
    container.style.display = "none";
    resultCont.style.display = "";
    resultCont.textContent = `Your Score:  ${score} out of ${totQuestions *
      10} `;
    return;
  }

  loadQuestion(currentQuestion);
}

function loadPreviousQuestion() {
  currentQuestion--;

  score -= 10;

  if (score < 0) {
    score = 0;
  }

  loadQuestion(currentQuestion);
}

function retake() {
  document.location.reload();
}
