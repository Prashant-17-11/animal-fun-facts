import backgroundImage from "./images/ocean-bed.jpg";

import { animals } from "./Animals";
import "./App.css";
// importing styling for app

const title = "";
// to store the title of the animal whose fact is being shown
const images = [];
// to store the images of animals
const showBackground = true;
// to store whether to show background or not
const background = (
  <img src={backgroundImage} className="background" alt="ocean" />
);
// to store the background for the app

const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an Animal for Fun Fact!!!" : title}</h1>{" "}
    <p id="fact"></p>
    {showBackground ? background : null}
    <div className="animals">{images}</div>
  </div>
);
// to store the facts to be shown
// if there is no title then we show default message

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      src={animals[animal].image}
      alt={animal}
      aria-label={animal}
      role="button"
      onClick={displayFacts}
    />
  );
}
// creating an array of images for each animal

function displayFacts(e) {
  // e means event
  const facts = animals[e.target.alt].facts;
  //console.log(facts);
  //console.log(facts.length);
  const randomNum = Math.floor(Math.random() * facts.length);
  //console.log(randomNum);
  const fact = facts[randomNum];
  //console.log(fact);
  document.getElementById("fact").innerHTML = fact;
}
// this function will display facts
// console's were for debugging

function App() {
  return animalFacts;
} // sending our animal Facts JSX to be rendered in index.js

export default App;
