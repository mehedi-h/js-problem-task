const shoppingCart = [
    { name: 'Shirt', brand: 'Polo', price: 1880, quantity: 5 },
    { name: 'Pant', brand: 'Denim', price: 1450, quantity: 3 },
    { name: 'Shoes', brand: 'Apex', price: 2250, quantity: 2 },
    { name: 'Belt', brand: 'Legend', price: 650, quantity: 2 },
];

function totalCost (products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        sum = sum + product.price;
        // console.log(product);
    }
    return sum;
}
const expense = totalCost(shoppingCart);

console.log(expense);