// Little Lemon Receipt Maker Exercise

// Array of dishes with their base prices (without tax)
const dishData = [
  { name: "Italian pasta", price: 9.55 },
  { name: "Rice with veggies", price: 8.65 },
  { name: "Chicken with potatoes", price: 15.55 },
  { name: "Vegetarian Pizza", price: 6.45 },
];

// Step 2: Define getPrices() function with taxBoolean parameter
function getPrices(taxBoolean) {
  // Step 3: Loop over dishData array
  for (let i = 0; i < dishData.length; i++) {
    // Step 4: Declare finalPrice variable
    let finalPrice;

    // Step 5: Handle conditional pricing
    if (taxBoolean === true) {
      finalPrice = dishData[i].price * 1.2; // Add 20% tax
    }
    // Step 6: Handle no-tax pricing
    else if (taxBoolean === false) {
      finalPrice = dishData[i].price;
    }
    // Step 7: Add default case
    else {
      console.log("You need to pass a boolean to the getPrices call!");
      return;
    }

    // Step 8: Log dish details
    console.log(
      "Dish: " + dishData[i].name + " Price: $" + finalPrice.toFixed(2)
    );
  }
}

// Step 9: Define getDiscount() function with two parameters
function getDiscount(taxBoolean, guests) {
  // Step 10: Invoke getPrices()
  getPrices(taxBoolean);

  // Step 11: Validate input
  if (typeof guests === "number" && guests > 0 && guests < 30) {
    // Step 12: Calculate discount
    let discount = 0;

    if (guests < 5) {
      discount = 5;
    } else if (guests >= 5) {
      discount = 10;
    }

    console.log("Discount is: $" + discount);
  }
  // Step 13: Handle invalid input for guests
  else {
    console.log("The second argument must be a number between 0 and 30");
  }
}

// Functions are ready for autograder testing

