import Header from "./components/Header";
import Body from "./components/Body";
import { useState } from "react";

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <Header score={score} highScore={highScore} />
      <Body
        score={score}
        highScore={highScore}
        setScore={setScore}
        setHighScore={setHighScore}
      />
    </>
  );
};

export default App;
