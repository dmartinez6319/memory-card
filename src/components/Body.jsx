import PlayArea from "./PlayArea.jsx";
import "../styles/body.css";

const Body = ({score,highScore,setScore,setHighScore}) => {
  return (
    <main>
      <PlayArea
        score={score}
        highScore={highScore}
        setScore={setScore}
        setHighScore={setHighScore}
      />
    </main>
  );
};

export default Body;
