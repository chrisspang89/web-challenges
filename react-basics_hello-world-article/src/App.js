import React from "react";
import "./styles.css";

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World!</h1>
      <p>This is a paragraph inside the article.</p>
    </article>
  );
}

export default function App() {
  return <HelloWorldArticle />;
}
