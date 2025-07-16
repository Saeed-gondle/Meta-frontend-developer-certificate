"use strict";
console.log("Introduction to Javascript");
({
  hello: () => {
    console.log("Hello, World!");
  },
}).hello();
let mySelf = {
  name: "Muhammad Saeed",
  age: 19,
  isStudent: true,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
  profession: "Software Engineer",
  skills: ["JavaScript", "Python", "C++"],
};
