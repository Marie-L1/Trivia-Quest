import { useEffect, useState } from "react";
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
    const [randomQuestions, setRandomQuestions] = useState<Question[]>([]); // New state for random questions

    useEffect(() => {
        const getRandomQuestions = (questions: Question[]) => {
            const shuffled = [...questions].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 5); // Get 5 random questions
        };

        setRandomQuestions(getRandomQuestions(questions)); // Set random questions on mount
        setCurrentQuestion(0); // Reset current question index
        setScore(0); // Reset score
        setQuizFinished(false); // Reset quiz finished state
    }, [questions]); // Run this effect whenever questions prop changes

    const handleAnswer = (answer: string) => {
        // Check if the answer is correct
        if (answer === randomQuestions[currentQuestion].correct_answer) {
            setScore(prevScore => prevScore + 1);
        }

        // Move to the next question or finish the quiz
        if (currentQuestion + 1 < randomQuestions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizFinished(true); // Set quiz as finished
        }
    };

    // Navigate to the results page if the quiz is finished
    if (quizFinished) {
        return <Navigate to="/results" state={{ score, total: randomQuestions.length }} />;
    }

    // Ensure questions are available before rendering
    if (!randomQuestions || randomQuestions.length === 0) {
        return <div>Loading questions...</div>;
    }

    const currentQuestionData = randomQuestions[currentQuestion];
    const allAnswers = [currentQuestionData.correct_answer, ...currentQuestionData.incorrect_answers];

    // Shuffle the answers
    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

    return (
        <section className="quiz-page">
            <div className="quiz-page__content">
                <h3 className="quiz-page__track">Question {currentQuestion + 1} of {randomQuestions.length}</h3>
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
