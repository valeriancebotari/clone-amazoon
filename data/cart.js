export const cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    /*productName: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    productImage: "images/products/athletic-cotton-socks-6-pairs.jpg",
    productPrice: 1090, */
    quantity: 2
},
{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',    
    quantity: 1
}];

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
}
