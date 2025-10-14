function displayJoke(response) {
  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function tellFunnyJoke(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "3fbc16ffbdt190o64c90aa576419eec5";
  let context = "You are a comedian who tells very funny jokes";
  let prompt = `Generate a very funny joke about ${userInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  
 let jokeElement = document.querySelector("#joke");
  jokeElement.classList.remove("hidden");
  jokeElement.innerHTML = `<div class="generating">⏳ Generating a joke about ${userInput.value}</div>`;
  
  axios.get(apiURL).then(displayJoke);
}



let generatorButton = document.querySelector("#generator-joke-button");
generatorButton.classList.remove("hidden");
generatorButton.addEventListener("click", tellFunnyJoke);

