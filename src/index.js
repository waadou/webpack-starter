import generateJoke from "./generate-joke";
import "./css/main.scss";
import logo from "./img/logo.svg";

const logoImg = document.getElementById("logo");
logoImg.src = logo;

console.log(generateJoke());
