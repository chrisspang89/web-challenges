import React from "react";
import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Super nice article</h2>
      <label htmlFor="inputField" className="article__label">
        Type something:
      </label>
      <input id="inputField" className="aricle__input" type="text"></input>
      <a className="article__link" href="https://react.dev/learn">
        React is nice. Learn more about it!
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
