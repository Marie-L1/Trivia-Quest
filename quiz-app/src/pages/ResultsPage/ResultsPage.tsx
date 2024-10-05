import "./ResultPage.scss";
import { useNavigate } from "react-router-dom";
import heart from "../../assets/icons/heart.svg";

type Props = {
  score: number;
  total: number;
};

function ResultsPage({ score, total }: Props) {
  const navigate = useNavigate();

  // Create an array of hearts based on the score
  const hearts = Array.from({ length: total }, (_, index) => index < score);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <section className="results">
      <div className="results__content">
        <h3 className="results__title">Results</h3>
        <h3 className="results__total">Your Score: {score} out of {total}</h3>
        <div className="results__hearts">
          {hearts.map((isFilled, index) => (
            <img
              key={index}
              src={heart}
              className={`results__heart ${isFilled ? "filled" : ""} ${index === score - 1 ? "animated" : ""}`}
              alt="pixel heart"
            />
          ))}
        </div>
        <button className="results__btn" onClick={handleClick}>Home</button>
      </div>
    </section>
  );
}

export default ResultsPage;
