import "./Tag.css";

export default function Tag({ tag }) {
  const className = `tag ${tag === "admin" ? "tag--highlight" : ""}`;
  return <li className={className}>{tag}</li>;
}
