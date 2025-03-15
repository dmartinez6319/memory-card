import Card from "./Card.jsx";
import cardNames from "../data.js";
import "../styles/play_area.css";
import { useEffect, useState } from "react";

const PlayArea = ({ score, highScore, setScore, setHighScore }) => {
  const [playedCards, setPlayedCards] = useState([]);
  const [playableCards, setPlayableCards] = useState([]);
  const [showCheckMark, setCheckMark] = useState(false);

  useEffect(() => {
    console.log("RUNNING " + score);
    const resetPlayArea = () => {
      console.log("area reset");

      let temp = cardNames.slice();
      let shuffled = [];

      for (let i = 0; i < cardNames.length; i++) {
        const j = Math.floor(Math.random() * temp.length);
        shuffled.push(temp[j]);
        temp.splice(j, 1);
      }

      setPlayableCards(shuffled);
    };

    if (score == 0) {
      setCheckMark(false);
      console.log("score 0");
      setPlayedCards([]);
      resetPlayArea();
    }

    if (score >= 1) {
      setCheckMark(true);

      resetPlayArea();
    }

    if (score > highScore) {
      setHighScore(score);
    }

    return () => {
      console.log("Cleanup function running");
      // Clean up intervals or subscriptions here
    };
  }, [score, setScore]);

  const handleAnimationEnd = () => {
    setCheckMark(false);
  };

  {
    return (
      <div className="play-area">
        {showCheckMark && <div className="checkmark" onAnimationEnd={handleAnimationEnd} >✔️</div>}

        {playableCards.map((name, i) => (
          <Card
            name={name}
            key={`${name} ${i}`}
            playedCards={playedCards}
            setPlayedCards={setPlayedCards}
            setScore={setScore}
            score={score}
          />
        ))}
      </div>
    );
  }
};

export default PlayArea;
