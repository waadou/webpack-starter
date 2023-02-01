import axios from "axios";

const config = {
	headers: {
		Accept: "application/json",
	},
};

const jokesUrl = "https://icanhazdadjoke.com";

const generateJoke = function () {
	axios.get(jokesUrl, config).then((res) => {
		document.getElementById("joke").innerHTML = res.data.joke;
	});
	return "I don't trust stairs. They are up to something.";
};

export default generateJoke;
