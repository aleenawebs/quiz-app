import { useState } from "react";

function Quiz() {

    const QuestionBank = [
        {
            question: "What is the capital of france?",
            options: ["Berlin", "London", "Paris"],
            answer: "Paris",
        },
        {
            question: "Which language is used for web app?",
            options: ["PHP", "Python", "JS", "All"],
            answer: "All",
        },
        {
            question: "Which is the largest continent by area?",
            options: ["Africa", "Asia", "Europe"],
            answer: "Asia",
        },
    ];



    const initialAnswers = Array(QuestionBank.length).fill(null);

    const [userAnswers, setUserAnswers] = useState(initialAnswers);
    const [currentQuestion, setCurrentQuestion] = useState(0);


    function handleSelectOption(option) {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestion] = option;
        setUserAnswers(updatedAnswers);
    }


    function nextQuestion() {
        if (currentQuestion < QuestionBank.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    function prevQuestion() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }


  function questionAnswer(option){
    console.log(option);
}


    return (
        <div>
            <h2 style={{ color: "#000", fontSize: "24px" }}>Question {currentQuestion + 1}</h2>

            <p className="question" style={{ color: "#000", fontSize: "14px", margin: "0 0 20px 0" }}>
                {QuestionBank[currentQuestion].question}
            </p>

            {QuestionBank[currentQuestion].options.map((option, index) => (
                <button style={{ width: "100%", padding: "10px", margin: "0 0 10px 0" }}
                    key={index}
                    className="option"
                    onClick={() => handleSelectOption(option)}
                >
                    {option}
                </button>
            ))}
            <div className="nav-buttons">
                <button onClick={prevQuestion}>Previous</button>
                <button onClick={nextQuestion}>Next</button>
            </div>
        </div>
    );
}
deffefsf

export default Quiz;