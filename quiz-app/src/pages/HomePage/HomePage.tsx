import "./Homepage.scss";
import sword from "../../assets/icons/sword.svg";
import { useNavigate } from "react-router-dom";

interface HomePageProps {
  onStart: () => void;  // Expecting a function prop called 'onStart'
}

function HomePage({onStart}: HomePageProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    onStart();
    navigate("/quiz");
  }
  return (
    <section className="homepage">
        <div className="homepage__content">
            <h3 className="homepage__welcome">Welcome to</h3>
            <h1 className="homepage__title">TRIVIA QUEST</h1>
            <img src={sword} className="homepage__img" alt="pixel sword"/>
            <button
            className="homepage__btn"
            onClick={handleClick}
            >Start Quiz</button>
        </div>
    </section>
  )
}

export default HomePage