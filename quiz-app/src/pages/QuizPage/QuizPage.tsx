import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./QuizPage.scss";

type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type Props = {
  questions: Question[];
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

function QuizPage({ questions, setScore }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (questions.length > 0) {
      // Shuffle and pick up to 5 random questions without repetition
      const shuffled = [...questions].sort(() => Math.random() - 0.5);
      setRandomQuestions(shuffled.slice(0, Math.min(5, shuffled.length)));
    }
  }, [questions]);

  const handleAnswer = (answer: string) => {
    if (answer === randomQuestions[currentQuestion].correct_answer) {
      setScore(prevScore => prevScore + 1);
    }

    if (currentQuestion + 1 < randomQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  if (quizFinished) {
    return <Navigate to="/results" />;
  }

  if (!randomQuestions || randomQuestions.length === 0) {
    return <div>Loading questions...</div>;
  }

  const currentQuestionData = randomQuestions[currentQuestion];
  const allAnswers = [currentQuestionData.correct_answer, ...currentQuestionData.incorrect_answers];
  const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

  return (
    <section className="quiz-page">
      <div className="quiz-page__content">
        <h3 className="quiz-page__track">Question {currentQuestion + 1} of {randomQuestions.length}</h3>
        <p className="quiz-page__question">{currentQuestionData.question}</p>
        <ul className="quiz-page__answers-wrapper">
          {shuffledAnswers.map((answer, index) => (
            <li 
              key={index} 
              className={`quiz-page__answer`} 
              onClick={() => handleAnswer(answer)}
            >
              {answer}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default QuizPage;
