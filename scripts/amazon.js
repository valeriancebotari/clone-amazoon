/*const products = [{
    image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 pairs',
    rating: {
        stars: 4.5,
        count: 87
    },
    priceCents: 1090
    },{
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
        stars: 4,
        count: 127
    },
    priceCents: 2095
    },{
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799    
  }]; */


    // let productsHTML = ''; varianta forEach()
    // products.forEach(function(product){   
    // productsHTML += `<div> etc` 
    const cartQuantity = document.querySelector('.js-cart-quantity');
    // // cartQuantity.textContent = JSON.parse(localStorage.getItem('quantity'));
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
                    $${ (product.priceCents / 100 ).toFixed(2)}
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

                <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id=${product.id} data-product-name="${product.name}">
                    Add to Cart
                </button>
            </div>`;
  }).join('');
  document.querySelector('.products-grid').innerHTML = productsHTML;
  
  //let totalQ = 0;
  //console.log(productsHTML);


  /** push items to cart */
  document.querySelectorAll('.js-add-to-cart').forEach(function(btn){
        btn.addEventListener('click', function(e){
            //  const productId = btn.dataset.productId;
            //  const productName = btn.dataset.productName;
             const productId = e.currentTarget.dataset.productId;
             const productName = e.currentTarget.dataset.productName;
             //console.log(productId);   
             let matchingItem;
             cart.forEach(function(item){
                if(productId === item.productId){
                   matchingItem = item;
                }    
             });

             if(matchingItem){
                matchingItem.quantity++;
             }
             else{
                cart.push({
                    productId: productId,
                    productName: productName,
                    quantity: 1
                });
             }
             let totalQ ;
             totalQ = cart.reduce(function(acc,curr){
                acc += curr.quantity;
                return acc;
              },0);
              cartQuantity.textContent = totalQ;
              //localStorage.setItem('quantity', JSON.stringify(totalQ));

        });


  });
  
 

  /** count total quantities in the cart */
//console.log(cart.length);
  //if(cart.length > 0){     
  //}
  