// Task 1: Code a Person class
// WRITE YOUR CODE HERE - Define the Person class
// WRITE YOUR CODE HERE - Add a constructor with default parameters
// WRITE YOUR CODE HERE - Add the sleep() method
// WRITE YOUR CODE HERE - Add the doSomethingFun() method
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  sleep() {
    this.energy += 10;
  }

  doSomethingFun() {
    this.energy -= 10;
  }
}

// Task 2: Code a Worker class
// WRITE YOUR CODE HERE - Define the Worker class that extends Person
class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }

  goToWork() {
    this.xp += 10;
  }
}

// Task 3: Code an intern object, run methods
function intern() {
  const intern = new Worker("Bob", 21, 110, 0, 10);
  intern.goToWork();
  return intern;
}

// Task 4: Code a manager object, methods
function manager() {
  const manager = new Worker("Alice", 30, 120, 100, 30);
  manager.doSomethingFun();
  return manager;
}
