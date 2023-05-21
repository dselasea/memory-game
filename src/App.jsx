import { useState } from "react";
import Tiles from "./components/Tiles";

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

  const handleChange = (id) => {
    const newTiles = tiles.map((tile) => {
      if (tile.id === id) {
        return { ...tiles, id, clicked: true };
      }
      return tile;
    });
    handleRandom(newTiles);
    setTiles(newTiles);
  };

  const handleRandom = (tiles) => {
    tiles.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="container">
      <div className="tiles">
        {tiles.map((tile) => {
          return (
            <Tiles key={tile.id} text={tile.text} handleChange={handleChange} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
