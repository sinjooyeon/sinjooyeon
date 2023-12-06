
import {vegetable} from './vegetable.js';

const selectedVegetablesString = localStorage.getItem('selectedVegetables');
const selected = JSON.parse(selectedVegetablesString);
console.log(selected);
const cartListElement = document.getElementById('basket');


const cartItems = {};

selected.forEach(cartProduct => {
  const productId = cartProduct.id;
  const productInfo = vegetable.find(product => product.id === productId);

  if (productInfo) {
    if (cartItems[productId]) {
      cartItems[productId].quantity += cartProduct.quantity;
    } else {
      cartItems[productId] = {...cartProduct, ...productInfo};
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

function dropdownChanged() {
  let selectedValue = document.getElementById("dropdown").value;
  document.getElementById("result").innerHTML = "선택된 항목: " + selectedValue;
}

document.getElementById("dropdown").addEventListener("change", dropdownChanged);


