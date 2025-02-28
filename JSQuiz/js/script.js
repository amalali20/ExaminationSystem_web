import { questions } from "./question.js"; 
import { users } from "./users.js";


var passPattern = /^[a-zA-Z0-9]{6,}$/;
var emailPattern = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

var quizcContainer = document.querySelector('.quiz-container');

var emailField = document.getElementById("emailField");
var passField = document.getElementById("passField");
var Start = document.getElementById("startBtn");

var warningEmail = document.getElementById('warningEmail');
var warningPass = document.getElementById('warningPass');



function isValidatEmail()
{
    return emailPattern.test(emailField.value)
}

function isValidatPass()
{
    return passPattern.test(passField.value)
}

function checkFormValidity() {
    const enteredEmail = emailField.value;
    const enteredPass = passField.value;

    const user = users.find(u => u.Email === enteredEmail && u.pass === enteredPass);
    if (isValidatEmail() && isValidatPass())
    {
        if (user) {
            Start.disabled = false; // Enable login button if user exists
        } else {
            Start.disabled = true; 
            warningPass.innerText = "Invalid email or password!";
            warningPass.style.color = "red";
        }
    }
    else
    {
        Start.disabled = true; 
    }
    
}



emailField.addEventListener('input', function(){
    warningEmail.innerText = '';
    if(!isValidatEmail())
    {
        this.style.border = '2px solid red';
        warningEmail.innerText = 'Enter valid email like(test@gmail.com) !!!';
        warningEmail.style.color = "red";
        this.focus();
    }
    else{
        this.style.border = 'none';
        warningEmail.innerText = '';
        checkFormValidity();
    }
});

passField.addEventListener('input', function(){
    warningPass.innerText = '';
    if(!isValidatPass())
    {
        this.style.border = '2px solid red';
        warningPass.innerText = 'must bt more than 6 char !!!';
        warningPass.style.color = "red";
        this.focus();
    }
    else{
        this.style.border = 'none';
        warningPass.innerText = '';
        checkFormValidity();
    }
})

var container = document.getElementById('container');
var title = document.getElementById('title');
var qImage = document.getElementById('qImage');
var answersTable = document.getElementById('answersTable');
var nextbtn = document.getElementById('nextbtn');

var currentQuestionIndex = 0; 
var userAnswer = ""; 
var count = 0;
var correct;
var nameFiled;


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

Start.addEventListener('click', function () {
    
    shuffleArray(questions);
    quizcContainer.style.display = 'none';
    container.style.display = 'flex';
    startTimer(); 
    nextbtn.disabled = true;
    loadQuestion(currentQuestionIndex);
        

    
});

nextbtn.addEventListener('click', function () {

    if (currentQuestionIndex === questions.length - 2) 
    {
        nextbtn.textContent = 'Submit';
    }

    if (userAnswer === correct) {
        count++;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++; 
        loadQuestion(currentQuestionIndex);
    } 
    else {
        clearInterval(timerInterval); 
        endExam(); 
    }
    nextbtn.disabled = true;
});

// Function to load a question
function loadQuestion(i) {

    let Nq = document.getElementById('Nq');
    Nq.innerText = `${i+1} of ${questions.length}`;

    title.innerText = `${i+1}- ${questions[i].title}`;
    qImage.src = questions[i].imageUrl;
    shuffleArray(questions[i].answers);
    let answersList = questions[i].answers;
    correct = questions[i].correctAnswer;

    answersTable.innerHTML = ""; 
    let selectedRow = null; 
    answersList.forEach(answer => {
        var td = document.createElement('td');
        td.innerText = answer;
        var tr = document.createElement('tr');

        tr.appendChild(td);
        answersTable.appendChild(tr);

        
        tr.addEventListener('click', function (e) {
            if (selectedRow) {
                selectedRow.style.backgroundColor = ''; 
                selectedRow.style.color = 'white';
            }

            userAnswer = e.currentTarget.innerText;
            selectedRow =  e.currentTarget; 
            selectedRow.style.backgroundColor = 'rgb(49, 101, 148)';
            selectedRow.style.color = 'white';

            nextbtn.disabled = false;  
        });
    });
}


var timeLeft = 60;
var timerInterval; 

let timerDisplay = document.getElementById("timerDisplay");

function startTimer() {
    timeLeft = 60; 
    timerDisplay.innerText = `  ${timeLeft}s`; 

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = `  ${timeLeft}s`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval); 
            alert("Time's up! Exam is over.");
            endExam(); 
        }
    }, 1000);
}

function endExam() {
    container.style.display = 'none';
    document.getElementById("progress").style.display = "block";
    

        let percentage = (count / questions.length) * 100; 
        updateProgressBar(percentage);

}

// Function to update the circular progress bar
function updateProgressBar(percentage) {

    let number = document.getElementById("number");
    let nucheckmber = document.getElementById("check");

    number.innerText =`You answered ${count} correct out of ${questions.length}`;

    let circle = document.querySelector('.progress-ring__circle');
    let progressText = document.getElementById('progressText');

    let circumference = 2 * Math.PI * 50; 
    let offset = circumference - (percentage / 100) * circumference;


    let icon = document.createElement('i');
    
    if (percentage < 60) {
        circle.style.stroke = "red"; 
        nucheckmber.innerText = `Unfortunately, yon not passed  `;
        nucheckmber.style.color= 'red';
        icon.classList.add('fa-regular');
        icon.classList.add('fa-face-frown-open');
        nucheckmber.appendChild(icon);
    } 
    else{
        nucheckmber.innerText = `Congratulations, You passed   `;
        nucheckmber.style.color= 'green';
        icon.classList.add('fa-regular');
        icon.classList.add('fa-face-smile-wink');
        nucheckmber.appendChild(icon);
    }
    

    circle.style.strokeDashoffset = offset;
    progressText.textContent = `${Math.round(percentage)}%`; 
}


