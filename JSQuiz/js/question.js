class Question {
    constructor(title, imageUrl, answers, correctAnswer) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
}



export const  questions = [
    new Question("What does HTML stand for?", "./images/im1.svg", ["HyperText Markup Language", "Hyper Transfer Markup Language", "High-Level Text Machine Learning", "Hyperlink and Text Markup Language"],"HyperText Markup Language" ),
    new Question("What is syntax for a function in JS?", "./images/im2.png", ["function myFunction{}", "def myFunction():", "function myFunction(){}", "func myFunction(){}"],"function myFunction(){}" ),
    new Question("What is the name of this language?", "./images/im3.svg", ["java", "C++", "Python", "C#"],"Python" ),
    new Question("What does SQL stand for?", "./images/im4.png", ["Structured Question Language", "Standard Query Language", "Structured Query Language", "Standard Question Language"],"Structured Query Language" ),
    new Question("Which symbol is used to access an element by ID in CSS?", "./images/im5.svg", [". (dot)", "# (hash)", "@ (at symbol)", ": (colon)"],"# (hash)" ),
    
    new Question("What is the purpose of the git clone command?", "./images/im6.svg", ["Creates a new Git repository", "Copies a repository from a remote source", "Deletes a repository", "Merges two branches"],"Copies a repository from a remote source" ),
    new Question("Which of these is an IDE?", "./images/im7.avif", ["Notepad", "VS Code", "Chrome", "Sublime Text"],"VS Code" ),
    new Question("What name of animal?", "./images/1.jpg", ["Dog", "Cat", "Panda","Lion"],"Panda" ),
    new Question("what result of 5+2*10/2?", "./images/8.avif", ["140", "45", "15", ],"15" ),
    new Question("What is Chemical Symbol for Water?", "./images/10.jpg", ["H2O", "O2", "CO2", "H2"],"H2O" )
];

