console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  console.log("Second character:", data.results[1]);
  console.log("Name of the fourth character", data.results[3].name);

  const r2d2 = data.results.find((character) => character.name === "R2-D2");
  console.log("Eyecolor of R2-D2:", r2d2.eye_color);
}

fetchData();
