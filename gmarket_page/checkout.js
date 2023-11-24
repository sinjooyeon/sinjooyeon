import {cart} from './cart.js';
import {products} from './products.js';
console.log(cart);

const cartSumaryHTML = '';


cart.forEach((cartItem) => {
  const productId = cartItem.productId;


  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  console.log(matchingProduct);


  //   if (matchingProduct) {
  //     cartSumaryHTML += `


  //       <div class="orderCheck">
  //         <div>
  //           <div class="content">
  //             <div class="small-pic">
  //               <img src="${matchingProduct.image}" alt="">
  //             </div>
  //             <div class="text">
  //               <p>상품: ${matchingProduct.name}</p>
  //               <p>제품설명 : ${matchingProduct.explanation}</p>
  //               <p>수량: ${quantity}개</p>
  //               <p>가격:${matchingProduct.price}원</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  // `;
  //   }
});
const list = document.querySelector('.products-text');
list.innerHTML = cartSumaryHTML;
