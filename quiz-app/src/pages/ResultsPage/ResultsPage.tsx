import "./ResultPage.scss"
import { useNavigate } from "react-router-dom"

function ResultsPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  }

  return (
    <section className="results">
        <div className="results__content">
            <h1 className="results__score">{score}</h1>
            
            <h3 className="results__title">Results</h3>
            <button
            className="results__btn"
            onClick={handleClick}
            >Home</button>
        </div>
    </section>
  )
}

export default ResultsPage