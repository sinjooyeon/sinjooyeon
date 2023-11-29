
import {products} from './products.js';



// 로컬 스토리지에서 배열을 가져와서 목록으로 표시
const storedProducts = localStorage.getItem('cart');
const cartproducts = storedProducts ? JSON.parse(storedProducts) : [];

const cartListElement = document.getElementById('gg');

cartproducts.forEach(cartProduct => {
  const productInfo = products.find(product => product.id === cartProduct.productId);
  if (productInfo) {
  const listItem = document.createElement('div');
  listItem.innerHTML = `
    <div class="orderCheck">
        <div>
          <div class="content">
            <div class="small-pic">
              <img src="${productInfo.image}" alt="">
            </div>
            <div class="text">
              <p>상품: ${productInfo.name}</p>
              <p>제품설명 : ${productInfo.explanation}</p>
              <p>수량: ${cartProduct.quantity}개</p>
              <p>가격: ${productInfo.price}원</p>
            </div>
          </div>
        </div>
      </div>`;
  cartListElement.appendChild(listItem);
  } else {
    console.error(`Product with ID ${cartProduct.productId} not found in the products array.`);
  }
});


// const cartSumaryHTML = '';


// cart.forEach((cartItem) => {
//   const productId = cartItem.productId;


//   let matchingProduct;

//   products.forEach((product) => {
//     if (product.id === productId) {
//       matchingProduct = product;
//     }
//   });




//     if (matchingProduct) {
//       cartSumaryHTML += `


//         <div class="orderCheck">
//           <div>
//             <div class="content">
//               <div class="small-pic">
//                 <img src="${matchingProduct.image}" alt="">
//               </div>
//               <div class="text">
//                 <p>상품: ${matchingProduct.name}</p>
//                 <p>제품설명 : ${matchingProduct.explanation}</p>
//                 <p>수량: ${quantity}개</p>
//                 <p>가격:${matchingProduct.price}원</p>
//               </div>
//             </div>
//           </div>
//         </div>

//   `;
//     }
// });
// const list = document.querySelector('.products-text');
// list.innerHTML = cartSumaryHTML;
