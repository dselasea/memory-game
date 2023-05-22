const Score = ({ score, highScore }) => {
  return (
    <div className="score-container">
      <h3
        style={{
          backgroundColor: "#FFB5B5",
          padding: "0.8rem 1rem",
          borderRadius: "100px",
          boxShadow: "0px 5px 9px 11px rgba(0,0,0,0.1)",
        }}
      >
        Score: {score}
      </h3>
      <h2>Emomemory Game</h2>
      <h3
        style={{
          backgroundColor: "#B5FFB5",
          padding: "0.8rem 1rem",
          borderRadius: "100px",
          boxShadow: "0px 5px 9px 11px rgba(0,0,0,0.1)",
        }}
      >
        HighScore: {highScore}
      </h3>
    </div>
  );
};

export default Score;
