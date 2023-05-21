const Score = ({ score, highScore }) => {
  return (
    <div className="score-container">
      <div className="info">
        <h2>Memory Game</h2>
        <p>
          Get points by clicking on an image but don't click on any image more
          than once!
        </p>
      </div>
      <div className="scores">
        <h2>Score: {score}</h2>
        <h2>HighScore: {highScore}</h2>
      </div>
    </div>
  );
};

export default Score;
