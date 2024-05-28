import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Greeting name="Pete" />
      <Greeting name="Chris" />
      <Greeting name="Esraa" />
    </div>
  );
}

function Greeting({ name }) {
  const coaches = ["Pete", "Esraa", "Niklas", "Aleks"];
  const greetingMessage = coaches.includes(name)
    ? `Hello, Coach ${name}!`
    : `Hello, ${name}!`;
  return <h1>{greetingMessage}</h1>;
}
