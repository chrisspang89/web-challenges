import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley isHappy />;
      <Smiley isHappy />;
    </div>
  );
}

function Smiley({ isHappy }) {
  return (
    <div>
      {isHappy ? (
        <span role="img" aria-label="happy">
          😊
        </span>
      ) : (
        <span role="img" aria-label="sad">
          😢
        </span>
      )}
    </div>
  );
}
