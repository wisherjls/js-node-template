// Function to calculate order total
function calculateTotal(order) {
	return order.price * order.quantity;
}
const order = { price: 10, quantity: 2 };
console.log(calculateTotal(order)); // Should print: 20
