import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getQuestions } from "./script/apiHandler";
import './App.scss'
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import Footer from "./components/Footer/Footer";

type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
function App() {
  const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const fetchedQuestions = await getQuestions(10, "medium"); // Adjust as needed
                setQuestions(fetchedQuestions);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };

        fetchQuestions();
    }, []);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage questions={questions} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
