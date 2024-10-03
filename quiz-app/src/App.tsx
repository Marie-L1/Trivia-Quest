import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import Footer from "./components/Footer/Footer";
import questions from "./data/q&a.json";

function App() {
  const getRandomQuestions = (questions: any) => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5)
  };

  const randomQuestions = getRandomQuestions(questions.questions)

  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage questions={randomQuestions} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
