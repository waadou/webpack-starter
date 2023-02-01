import generateJoke from "./generate-joke";
import "./css/main.scss";
import logo from "./img/logo.svg";

const logoImg = document.getElementById("logo");
logoImg.src = logo;

const jokeBtn = document.getElementById("jokeBtn");

/** We want to get new joke when we clik on the joke button */
jokeBtn.addEventListener("click", generateJoke);

/** At least we want t have a joke when the page refreshes. */
generateJoke();
