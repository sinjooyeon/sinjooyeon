import { vegetable } from './vegetable.js';

const selectedVegetablesString = localStorage.getItem('selectedVegetables');
const selected = JSON.parse(selectedVegetablesString);
console.log(selected);
const cartListElement = document.getElementById('basket');

// 중복된 상품 수량 더하기를 위한 객체
const cartItems = {};

selected.forEach(cartProduct => {
  const productId = cartProduct.id;
  const productInfo = vegetable.find(product => product.id === productId);

  if (productInfo) {
    // 이미 선택된 상품인 경우 수량만 증가
    if (cartItems[productId]) {
      cartItems[productId].quantity += cartProduct.quantity;
    } else {
      // 처음 선택된 상품인 경우 새로운 객체 생성
      cartItems[productId] = { ...cartProduct, ...productInfo };
    }
  } else {
    console.error(`Product with ID ${productId} not found in the products array.`);
  }
});

// cartItems 객체를 배열로 변환하여 화면에 표시
const cartItemsArray = Object.values(cartItems);

cartItemsArray.forEach(cartProduct => {
  const listItem = document.createElement('div');
  listItem.innerHTML = `
    <div class="orderCheck">
      <div>
        <div class="content">
          <div class="small-pic">
            <img src="${cartProduct.image}" alt="">
          </div>
          <div class="text">
            <p>상품: ${cartProduct.id}</p>
            <p>제품설명 : ${cartProduct.description}</p>
            <p>수량: ${cartProduct.quantity}개</p>
            <p>가격: ${cartProduct.price}원</p>
          </div>
        </div>
      </div>
    </div>`;
  cartListElement.appendChild(listItem);
});

// 최종적으로 중복 처리된 상품 리스트를 화면에 추가
console.log(cartItemsArray);


























// import {vegetable} from './vegetable.js';

// const selectedVegetablesString = localStorage.getItem('selectedVegetables');
// const selected = JSON.parse(selectedVegetablesString);
// console.log(selected);
// const cartListElement = document.getElementById('basket');

// selected.forEach(cartProduct => {
  
//   const productInfo = vegetable.find(product => product.id === cartProduct.id);

//   if (productInfo) {
//     const listItem = document.createElement('div');
//     listItem.innerHTML = `
//       <div class="orderCheck">
//         <div>
//           <div class="content">
//             <div class="small-pic">
//               <img src="${productInfo.image}" alt="">
//             </div>
//             <div class="text">
//               <p>상품: ${productInfo.id}</p>
//               <p>제품설명 : ${productInfo.description}</p>
//               <p>수량: ${cartProduct.quantity}개</p>
//               <p>가격: ${productInfo.price}원</p>
//             </div>
//           </div>
//         </div>
//       </div>`;
//     cartListElement.appendChild(listItem);
//   } else {
    
//     console.error(`Product with ID ${cartProduct.productId} not found in the products array.`);
//   }
// });

