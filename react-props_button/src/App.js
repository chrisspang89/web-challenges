import React from "react";
import "./styles.css";

export default function App() {
  const handleClick = () => {
    console.log("You clicked me!");
  };

  return (
    <div>
      <Button
        color="green"
        disabled={false}
        text="Submit"
        onClick={handleClick}
      />
      <Button color="red" disabled={true} text="Danger" onClick={handleClick} />
      <Button
        color="grey"
        disabled={false}
        text="Disabled"
        onClick={handleClick}
      />
    </div>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button style={{ color: color }} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}
