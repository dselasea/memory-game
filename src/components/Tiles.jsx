import React from "react";

const Tiles = ({ id, text, handleChange }) => {
  return (
    <>
      <div className="tile" onClick={() => handleChange(id)}>
        <h1>{text}</h1>
      </div>
    </>
  );
};

export default Tiles;
