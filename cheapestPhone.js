const smartPhones = [
    { name: 'Samsung', camera: 64, memory: '64gb', color: 'Grey', price: 42000, },
    { name: 'Xiomi', camera: 32, memory: '32gb', color: 'Yellow', price: 38000, },
    { name: 'Oppo', camera: 48, memory: '64gb', color: 'Blue', price: 28000, },
    { name: 'Huawei', camera: 18, memory: '64gb', color: 'Sky', price: 22000, },
    { name: 'Apple', camera: 24, memory: '128gb', color: 'White', price: 85000, },
    { name: 'Nokia', camera: 108, memory: '32gb', color: 'Black', price: 68000, }
];

function cheapestPhone(smartPhones) {
    let cheapest = smartPhones[0];
    for (let i = 0; i < smartPhones.length; i++) {
        const phone = smartPhones[i]; 
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }  
    }
    return cheapest;
}
const choice = cheapestPhone(smartPhones);
console.log(choice);