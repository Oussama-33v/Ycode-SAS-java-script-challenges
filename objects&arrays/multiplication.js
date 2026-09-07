let product = {
    name: "t-shirt",
    price: 50,
    category: "clouths",
    quantity: 4,
    available: false
};

if (product.available === true) {
    product.price = product.quantity * product.price;
}
else{
    console.log('product not available');
}
for (let key in product) {
    console.log(key, product[key]);
}


