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
        return this;
  }
}
let softwareEngineer = new Person('Muhammad Saeed', 19, 'Software Engineer');
console.log(softwareEngineer.introduce());
console.log(softwareEngineer.getDetails());

   
   

