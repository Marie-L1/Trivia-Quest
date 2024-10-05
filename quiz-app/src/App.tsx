import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.scss';
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import Footer from "./components/Footer/Footer";
import questionsData from "./data/q&a.json";

function App() {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(questionsData.questions); // Initialize questions state
  const totalQuestions = 5;

  // Reset score and questions when starting a new quiz
  const resetQuiz = () => {
    setScore(0);
    setQuestions(questionsData.questions); // Reset questions back to the original state
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage onStart={resetQuiz} />} />
          <Route 
            path="/quiz" 
            element={<QuizPage questions={questions} setScore={setScore} />} 
          />
          <Route 
            path="/results" 
            element={
              <ResultsPage 
                score={score} 
                total={totalQuestions} 
                onRestart={resetQuiz} // Pass resetQuiz as onRestart
              />} 
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
