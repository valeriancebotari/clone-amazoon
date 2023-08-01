export let cart = JSON.parse(localStorage.getItem('cart')) ||
[{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 1
}];

function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(id){
    let matchingItem;
        cart.forEach(function(cartItem){
            if(id === cartItem.productId){
                matchingItem = cartItem;
            }    
        });

        if(matchingItem){
            matchingItem.quantity++;   
            console.log(cart);         
        }
        else{
            cart.push({
                productId: id,                
                quantity: 1
            });
           console.log(cart);
        }    
        saveToStorage();
}

export function removeFromCart(id){
   let newCart = cart.filter( (cartItem) => {
        return cartItem.productId !== id;
   });
   //console.log(newCart);
   cart = newCart;
   console.log(cart);
   saveToStorage();
}
