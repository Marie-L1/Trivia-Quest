import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
