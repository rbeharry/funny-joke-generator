import axios from "axios";
import Typewriter from "typewriter-effect/dist/core";
function displayJoke(response) {
  new Typewriter("#typewriter-text", {
      strings: response.data.answer,
      autoStart: true,
    });
  function generateJoke(event) {
    event.preventDefault();

    

    let instructionsInput = document.querySelector("#joke-generator-form");
    let apiKey = "3fbc16ffbdt190o64c90aa576419eec5";
    let prompt = `Generate a joke from user ${instructionsInput.value}`;
    let context =
      "You are a very funny comedian. Please tell me something funny";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    axios.get(apiURL).then(displayJoke);
  }

  let jokeformElement = document.querySelector("#generate-joke-button");
  jokeformElement.addEventListener("click", generateJoke);