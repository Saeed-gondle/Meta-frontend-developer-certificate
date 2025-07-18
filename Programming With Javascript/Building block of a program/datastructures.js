let mySelf = {
  name: "Muhammad Saeed",
  age: 19,
  isStudent: true,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old. I am a ${this.profession}`
    );
  },
  profession: "Software Engineer",
  skills: ["JavaScript", "Python", "C++"],
};
mySelf.greet();