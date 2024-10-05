import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.scss'
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import Footer from "./components/Footer/Footer";
import questions from "./data/q&a.json";

function App() {
  const [score, setScore] = useState(0);
  const totalQuestions = 5;

  const getRandomQuestions = (questions: any) => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, totalQuestions);
  };

  const randomQuestions = getRandomQuestions(questions.questions)

  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage questions={randomQuestions} />} />
        <Route path="/results" 
        element={<ResultsPage score={score} total={totalQuestions} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
