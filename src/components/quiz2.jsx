import { useState } from "react";

function quizApp() {
    const questionBank = [
    {
        question : "What is the capital of france?",
        options : ["Berlin", "London", "Paris"],
        answer : "Paris",

    },
    {
        question: "Which language is used for web app?",
            options: ["PHP", "Python", "JS", "All"],
            answer: "All",
    },
      {
        question: "Which language is used for web app?",
            options: ["PHP", "Python", "JS", "All"],
            answer: "All",
    },
]

const initialAnswer = Array(questionBank.length).fill(null);
const [userAnswers, setUserAnswers] = useState(initialAnswer);
const [currentQuestion, setCurrentQuestion] = useState(0);

function handleSelectOption(option){
    const updateAnswer = [...userAnswers];
    updateAnswer[currentQuestion] = option;
    setUserAnswers(updateAnswer);
}
function nextQuestion(){
    if(currentQuestion < questionBank.length - 1){
        setCurrentQuestion(currentQuestion - 1);
    }
}

function prevQuestion(){
    if(currentQuestion > 0){
        setCurrentQuestion(currentQuestion - 1);

    }
}
function questionAnswer(option){
    console.log(option);
}

return(
    <div>
        <h2>Question {currentQuestion - 1}</h2>
        <p>{questionBank[currentQuestion].question}</p>


        {questionBank[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleSelectOption(option)}>{option}</button>
        ))}
        <div className="nav-buttons">
                <button onClick={prevQuestion}>Previous</button>
                <button onClick={nextQuestion}>Next</button>
            </div>
    </div>
)
} 

export default Quiz;