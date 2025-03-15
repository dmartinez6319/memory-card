import Card from "./card";
import cardNames from "../data.js";
import "../styles/play_area.css"

const PlayArea = () => {
  return (
    <div className="play-area">
      {cardNames.map((name) => (
        <Card name={name} key={name} />
      ))}
    </div>
  );
};

export default PlayArea;
