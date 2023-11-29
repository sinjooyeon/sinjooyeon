
import {products} from './products.js';



function pro() {
  const goodsContainer = document.querySelector('.goods');
  products.forEach((element) => {
    goodsContainer.innerHTML += `
 <div class="products">

    <div class="grid-container2">
      <div>
        <div class="small-container">
          <img class="profilepic" src="${element.image}" alt="">
        </div>
        <div class="content">
          <div class="small-pic">
            <img src="${element.ceo}" alt="">
          </div>
          <div class="text">
            <p>${element.name}</p>
            <p>${element.explanation} </p>
             <p>${element.price}</p>
             <button class="addbutton js-add-button" data-product-id="${element.id}" type="submit">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
  });
};

pro();

const cart = [];


function addToCart(productId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });


  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1

    });
  };
}




function updateCartQuantity() {
  let cartQuantity = 0;


  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  const textquantity = document.querySelector('.cartquantity');
  textquantity.innerHTML = cartQuantity;
}









const addButton = document.querySelectorAll('.js-add-button');
addButton.forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    addToCart(productId);
    updateCartQuantity();

    localStorage.setItem('cart', JSON.stringify(cart));


  });
});

console.log(cart);

document.getElementById('icon-container').addEventListener('click', () => {
  window.location.href = 'cart.html';
});





