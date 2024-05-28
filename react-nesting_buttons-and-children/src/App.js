import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Button One</Button>
      <Button>Button Two</Button>
      <Button>Button Three</Button>
      <Button>Button Four</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
