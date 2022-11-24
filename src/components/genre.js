import React from "react";

const genre = (props) => {
  return (
    <div style={{ display: "inline" }}>
      <p
        style={{
          padding: ".5rem 1.1rem",
          border: "2px solid white",
          display: "inline-block",
          fontSize: "1.3rem",
          borderRadius: "1rem",
          backgroundColor: "white",
          color: "black",
          fontWeight: 500,
          marginBottom: "1rem"
        }}
      >
        {" "}
        {props.text}
      </p>
    </div>
  );
};

export default genre;
