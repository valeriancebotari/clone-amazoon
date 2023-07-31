export const cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 1
}];

export function addToCart(id, name, img, price){
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
                productName: name,
                productImage: img,
                productPrice: price,
                quantity: 1
            });
           console.log(cart);
        }    
}
