// Function to calculate order total
function calculateTotal(order) {
	return order.price * order.quantity;
}
const order = { price: 10, quantity: 2 };
console.log(calculateTotal(order)); // Should print: 20

// Function to format a username
function formatUsername(firstName, lastName) {
	return `${lastName}, ${firstName}`;
}
console.log(formatUsername("John", "Doe")); // Should print: "Doe, John"

// Function to combine two strings with a space
function combineStrings(str1, str2) {
	return `${str1} ${str2}`;
}
console.log(combineStrings("Hello", "World")); // Should print: "Hello World"

// Function to calculate cart total with tax
function calculateCartTotal(cart) {
	return cart.price + cart.price * cart.tax;
}
const cart = { price: 100, tax: 0.07 };
console.log(calculateCartTotal(cart)); // Should print: 107
