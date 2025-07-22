class Person {
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }
  introduce() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.profession}.`;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Profession: ${this.profession}`;
  }
}
let softwareEngineer = new Person('Alice', 30, 'Software Engineer');
console.log(softwareEngineer.introduce());