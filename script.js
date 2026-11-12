const customerName = "Sara";
let customerAge = 24;
let balance = 100;

console.log("Restaurant Menu:");
console.log("1. Burger - $10");
console.log("2. Pizza - $15");
console.log("3. Sandwich - $8");
console.log("4. Pasta - $12");
console.log("5. Exit - $0");

let choice = 2;
let foodPrice = 0;
switch (choice) {
  case 1:
    console.log("You selected Burger. Price: $10.");
    foodPrice = 10;
    break;
  case 2:
    console.log("You selected Pizza. Price: $15.");
    foodPrice = 15;
    break;
  case 3:
    console.log("You selected Sandwich. Price: $8.");
    foodPrice = 8;
    break;
  case 4:
    console.log("You selected Pasta. Price: $12.");
    foodPrice = 12;
    break;
  case 5:
    console.log("Thank you for visiting!");
  default:
    console.log("Invalid selection!");
}

let quantity = 3;
let totalPrice = foodPrice * quantity;
let remainingBalance = balance - totalPrice;
let additionalCost = foodPrice * (quantity + 3);

console.log("Quantity: ", quantity);
console.log("Total Price: ", totalPrice);
console.log("Remaining balance: ", remainingBalance);
console.log("Additional cost: ", additionalCost);

if (customerAge >= 18) {
  console.log("True");
} else {
  console.log("False");
}

if (balance > totalPrice) {
  console.log("True");
} else {
  console.log("False");
}

if (quantity > 1) {
  console.log("True");
} else {
  console.log("False");
}

if (totalPrice == 0) {
  console.log("True");
} else {
  console.log("False");
}

if (remainingBalance >= 0) {
  console.log("True");
} else {
  console.log("False");
}

if (customerAge < 18) {
  console.log("You are underage");
} else if (balance < totalPrice) {
  console.log("Insufficient balance");
} else {
  console.log("Your order has been placed successfully!");
}

let paymentMethod = 1;
switch (paymentMethod) {
  case 1:
    console.log("Payment method: Cash");
    break;
  case 2:
    console.log("Payment method: Credit Card");
    break;
  case 3:
    console.log("Payment method: Bank Transfer");
    break;
  default:
    console.log("Invalid payment method!");
}
