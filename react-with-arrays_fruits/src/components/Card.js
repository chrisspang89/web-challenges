import "./Card.css";

export default function Card({ name, color }) {
  let cardClass = "card";

  if (color === "green") {
    cardClass += " card--green";
  } else if (color === "red") {
    cardClass += " card--red";
  } else if (color === "yellow") {
    cardClass += " card--yellow";
  } else if (color === "orange") {
    cardClass += " card--orange";
  } else if (color === "purple") {
    cardClass += " card--purple";
  }

  return <p className={cardClass}>{name}</p>;
}
