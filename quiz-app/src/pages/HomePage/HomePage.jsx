import React from "react";
import "./HomePage.scss"
import sword from "../../assets/icons/sword.svg";

function HomePage() {
  return (
    <div className="homepage">
        <div className="homepage__content">
            <h3 className="homepage__welcome">Welcome to</h3>
            <h1 className="homepage__title">TRIVIAL QUEST</h1>
            <img src={sword} className="homepage__img" alt="pixel sword"/>
            <button
            className="homepage__btn"
            >Start Quiz</button>
        </div>
    </div>
  )
}

export default HomePage