import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from '../scripts/utils/money.js';

/** varianta forEach()
    let productsHTML = ''; 
    products.forEach(function(product){   
    productsHTML += `<div> etc` **** */

const cartQuantity = document.querySelector('.js-cart-quantity');
const productsHTML = products.map(function(product){
    return `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                $${ formatCurrency(product.priceCents)}
            </div>

            <div class="product-quantity-container">
                <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id=${product.id}>
                Add to Cart
            </button>
        </div>`;
  }).join('');
document.querySelector('.products-grid').innerHTML = productsHTML;

function updateCartQty(){
    let totalQ ;
    totalQ = cart.reduce(function(acc,curr){
                acc += curr.quantity;
                return acc;
             },0);
    cartQuantity.textContent = totalQ;      
}

document.querySelectorAll('.js-add-to-cart').forEach(function(btn){
    btn.addEventListener('click', function(e){
        const productId = e.currentTarget.dataset.productId;
        
        addToCart(productId);       
        updateCartQty();
    });
});
  

 
