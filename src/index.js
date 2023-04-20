import _ from "lodash";
import myName from "./myName";
import "./style.css";
import Dragon from "./dragon-logo.png";
import Data from "./data.xml";
import Notes from "./data.csv";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  element.textContent = myName("Shazam");
  element.classList.add("hello");

  const myDragon = new Image();
  myDragon.src = Dragon;

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
