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

function result(){
    if(question1Answer.checked){
        question1Score = 1
    }else{
        question1Score = 0
    }
    if(question2Answer && question2Answer.checked){
        question2Score = 1
    }else{
        question2Score = 0
    }
    if(question3Answer.checked){
        question3Score = 1
    }else{
        question3Score = 0
    }
    if(question4Answer.checked){
        question4Score = 1
    }else{
        question4Score = 0
    }
    if(question5Answer.checked){
        question5Score = 1
    }else{
        question5Score = 0
    }
    let scores= question1Score + question2Score + question3Score +question4Score +question5Score
    console.log(scores)
    let percent= (scores / 5 )*100
    console.log(percent)
    
    //hides the form after clicking the submit button
    const onlineQuiz = document.getElementById("onlinequiz");
    onlineQuiz.style.display = "none"

    const totalScore = document.getElementById("total-score");
const totalDiv = document.getElementById("total");
const percentScore = document.getElementById("percentage");
totalScore.style.display = "flex"

totalScore.style.height = "300px"
totalDiv.innerHTML = `<h3> Your total score is ${scores}</h3>`

percentScore.innerHTML = `<h4> Your total percentage is ${percent}</h4>`
}
