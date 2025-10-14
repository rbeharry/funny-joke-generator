function generateJoke(event){
    event.preventDefault();
    let jokeElement=document.querySelector("#joke");

new Typewriter("#typewriter", {
strings: "Let me tell you something funny",
autoStart: true,
delay: 1,
cursor: "",
 
});
   
new Typewriter("#typewriter", {
  strings: "Front-end developer + communications specialist",
  autoStart: true,
 
});

  
   


let jokeFormElement = document.querySelector("#joke-generator-form");
jokeFormElement.addEventListener("submit", generateJoke);
}