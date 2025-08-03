let array = [1, 2, 3, 4, 5];
let [first, second, ...rest] = array;
let mySelf = {
  firstName: "Muhammad Saeed",
  lastName: "Qasim",
  age: 19,
  hobbies: ["reading", "gaming", "coding"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
};
({
  console: () => {
    console.log("First:", first);
    console.log("Second:", second);
    console.log("Rest:", rest);
    console.log("Myself:", mySelf);
    console.log("First Name:", mySelf.firstName);
    console.log("Last Name:", mySelf.lastName);
    console.log("Hobbies:", mySelf.hobbies.join(", "));
    console.log(
      "Address:",
      `${mySelf.address.street}, ${mySelf.address.city}, ${mySelf.address.country}`
    );
  },
}).console();
for (prop in mySelf) {
  console.log(`${prop}: ${mySelf[prop]}`);
}
console.log("Keys of mySelf:", Object.keys(mySelf));

let mySelfStr = `My name is ${mySelf.firstName} ${mySelf.lastName}, I am ${mySelf.age} years old.`;
console.log(mySelfStr);
console.log(typeof [1, 2, 3, 4, 5], typeof "Hello World", typeof 42);
