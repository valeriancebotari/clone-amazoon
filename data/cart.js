export const cart = [];

export function addToCart(id, name){
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
                quantity: 1
            });
           console.log(cart);
        }    
}
