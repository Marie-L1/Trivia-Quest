import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./QuizPage.scss";

// types for a single question
type Question = {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
};  

// The type for the props
type Props = {
    questions: Question[];
};

function QuizPage({ questions }: Props) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false); // State to track if the quiz is finished

    const handleAnswer = (answer: string) => {
        // Check if the answer is correct
        if (answer === questions[currentQuestion].correct_answer) {
            setScore(score + 1);
        }

        // Move to the next question or finish the quiz
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizFinished(true); // Set quiz as finished
        }
    };

    // Navigate to the results page if the quiz is finished
    if (quizFinished) {
        return <Navigate to="/results" state={{ score, total: questions.length }} />;
    }

    // Ensure questions are available before rendering
    if (!questions || questions.length === 0) {
        return <div>Loading questions...</div>;
    }

    const currentQuestionData = questions[currentQuestion];
    const allAnswers = [currentQuestionData.correct_answer, ...currentQuestionData.incorrect_answers];

    // Shuffle the answers
    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

    return (
        <section className="quiz-page">
            <div className="quiz-page__content">
                <h3 className="quiz-page__track">Question {currentQuestion + 1} of {questions.length}</h3>
                <p className="quiz-page__question">{currentQuestionData.question}</p>
                <ul className="quiz-page__answers-wrapper">
                    {shuffledAnswers.map((answer, index) => (
                        <li key={index} className="quiz-page__answer" onClick={() => handleAnswer(answer)}>
                            {answer}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default QuizPage;
