import { useState } from "react";
import Tiles from "./components/Tiles";
import Score from "./components/Score";

function App() {
  const [tiles, setTiles] = useState([
    { id: 1, clicked: false, text: "😀" },
    { id: 2, clicked: false, text: "😁" },
    { id: 3, clicked: false, text: "😂" },
    { id: 4, clicked: false, text: "😳" },
    { id: 5, clicked: false, text: "🤣" },
    { id: 6, clicked: false, text: "😃" },
    { id: 7, clicked: false, text: "😐" },
    { id: 8, clicked: false, text: "😑" },
    { id: 9, clicked: false, text: "😎" },
    { id: 10, clicked: false, text: "😚" },
    { id: 11, clicked: false, text: "🤗" },
    { id: 12, clicked: false, text: "😏" },
    { id: 13, clicked: false, text: "😣" },
    { id: 14, clicked: false, text: "🤐" },
    { id: 15, clicked: false, text: "🙄" },
    { id: 16, clicked: false, text: "😶" },
  ]);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleChange = (id) => {
    const newTiles = tiles.map((tile) => {
      if (tile.id === id && tile.clicked === false) {
        setScore(score + 1);
        return { ...tile, clicked: true };
      } else if (tile.id === id && tile.clicked === true) {
        setScore(0);
        setHighScore(score);
        handleReset();
      }
      return tile;
    });

    setTiles(newTiles);
    handleRandom(newTiles);
  };

  const handleReset = () => {
    tiles.forEach((tile) => (tile.clicked = false));
  };

  const handleRandom = (tiles) => {
    tiles.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="container">
      <Score score={score} highScore={highScore} />
      <div className="tiles">
        {tiles.map((tile) => {
          return (
            <Tiles
              key={tile.id}
              id={tile.id}
              text={tile.text}
              handleChange={handleChange}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
