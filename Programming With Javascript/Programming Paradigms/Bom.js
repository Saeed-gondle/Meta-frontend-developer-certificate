let array = [1, 2, 3, 4, 5];
let [first, second, ...rest] = array;
let mySelf = {
  firstName: "Muhammad Saeed",
  lastName: "Qasim",
  age: 30,
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
    console.log("Address:", `${mySelf.address.street}, ${mySelf.address.city}, ${mySelf.address.country}`);
  }
}).console();