const question1Answer = document.getElementById("que1answer1");
const question2Answer = document.getElementById("que2answer4");
const question3Answer = document.getElementById("que3answer1");
const question4Answer = document.getElementById("que4answer4");
const question5Answer = document.getElementById("que5answer1");

const submit = document.getElementById("submit");

//hides the reload button from being viewed on the form
//makes it visible on the next page
const totalScore = document.getElementById("total-score");
totalScore.style.display = "none"

let question1Score;
let question2Score;
let question3Score;
let question4Score;
let question5Score;

submit.addEventListener("click", (e) =>{
    e.preventDefault()
    result()
})