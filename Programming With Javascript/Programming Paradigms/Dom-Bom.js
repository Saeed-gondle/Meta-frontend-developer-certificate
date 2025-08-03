// BOM stand for Browser Object Model
// DOM stands for Document Object Model
// BOM is a collection of objects provided by the browser
// It allows JavaScript to interact with the browser
document.body.style.backgroundColor = "lightblue"; // Change background color
document.body.classList.add("animate-fade-in"); // Add a class for animation
// Js Selector and Manipulation
let container = document.querySelector(".container");
container.style.padding = "20px"; // Add padding to the container
const heading = document.querySelector(".heading");
heading.textContent = "Welcome to My Website"; // Change heading text
heading.style.color = "darkblue"; // Change heading color
heading.style.padding = "30px"; // Add padding to the heading
// container.appendChild(heading); // Append heading to the container
let paragraph = document.querySelector(".paragraph");
paragraph.textContent = "This is a simple paragraph added using JavaScript."; // Add text to
let button = document.querySelector("button");
button.addEventListener("click", function () {
  alert("Button was clicked!"); // Alert when button is clicked
});
