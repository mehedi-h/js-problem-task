const shoppingCart = [
    { name: 'Shirt', brand: 'Polo', price: 500, quantity: 5 },
    { name: 'Pant', brand: 'Denim', price: 300, quantity: 3 },
    { name: 'Shoes', brand: 'Apex', price: 200, quantity: 2 },
    { name: 'Belt', brand: 'Legend', price: 50, quantity: 2 },
];

function totalCost (products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let productTotal = product.price * product.quantity;
        sum = sum + productTotal;
        // console.log(product);
    }
    return sum;
}
const expense = totalCost(shoppingCart);

console.log(expense);