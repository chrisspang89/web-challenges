import React from "react";
import "./styles.css";

function Sum({ valueA, valueB }) {
  const result = valueA + valueB;
  return (
    <div>
      {valueA} + {valueB} = {result}
    </div>
  );
}

export default function App() {
  return <Sum valueA={4} valueB={6} />;
}
