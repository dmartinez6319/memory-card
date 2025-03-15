import { useEffect, useState } from "react";
import "../styles/card.css";

const Card = ({ name, playedCards, setPlayedCards, setScore }) => {
  const [image, setImage] = useState();

  const getCardImage = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}`,
        { mode: "cors" }
      );
      if (!response.ok) {
        console.log("There was an error getting an image");
      }
      const imageJSON = await response.json();
      setImage(imageJSON.sprites.front_default);
    } catch (e) {
        console.warn(e);
        
    }
  };

  useEffect(() => {
    getCardImage();
  }, []);

  const checkCards = () => {

    for (let item of playedCards) {
      if (item === name) {
        console.log("same card");
        setScore(0);
        return;
      }
    }

    setScore((prevCount) => {
      return prevCount + 1;
    });

    setPlayedCards((prevCards) => {
      return [...prevCards, name];
    });

  };

  return (
    <div className="playing-card" onClick={checkCards}>
      <img src={image} alt={name} title={`This is a ${name}!`} />
    </div>
    
  );
};

export default Card;
