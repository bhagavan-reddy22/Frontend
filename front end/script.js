const cart = [];  
//add

function addToCart(houseName, price) {

    function findhouse(item) {  // defines a nested function, takes an item in the cart
        return item.houseName === housetName;
    }

    const house = cart.find(findProduct);

    if (product) {
        product.quantity++;
    } else {
        cart.push({ productName, price, quantity: 1 });  
    }

    updateCart();
}

//remove

function removeFromCart(productName) {
    const index = cart.findIndex(item => item.productName === productName); // nested funt to search an item in the cart using findindex funt

    if (index !== -1) {  
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }

        updateCart();  
    }
}

//update

function updateCart() {
    const cartItems = document.getElementById("cartItems"); // select cartItems from HTML document
    cartItems.innerHTML = "";

    let total = 0;  

    cart.forEach(item => {    
        const cartItem = document.createElement("li");
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove";
        removeButton.onclick = () => removeFromCart(item.productName);

        cartItem.textContent = `${item.productName} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;

        cartItem.appendChild(removeButton);
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    const cartTotal = document.getElementById("cartTotal");
    cartTotal.textContent = total.toFixed(2);  
}



function checkout() {
    alert("Checkout is not implemented in this example.");
}
