
function generateJoke(event){
    event.preventDefault();
    
    let jokeFormElement = document.querySelector("#joke-generator-form");
jokeFormElement.addEventListener("submit", generateJoke);
}


new Typewriter("#joke", {
  strings: "Let me tell you something funny!",
  autoStart: true,
  delay: 1,
  cursor: "",
});


   




