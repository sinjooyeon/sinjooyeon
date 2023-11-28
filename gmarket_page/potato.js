import {selectedVegetables} from './cart.js';
import {vegetable} from './vegetable.js';



document.querySelectorAll('.vegetable').forEach(button => {
  button.addEventListener('click', () => {
 
    const vegetableId = button.getAttribute('data-vegetable');

    const selectedVegetable = vegetable.find(veg => veg.id === vegetableId);

   console.log(selectedVegetable);
  });
});



const countElement = document.querySelector('.count');


let basketCount = 0;


document.querySelectorAll('.vegetable').forEach(button => {
  button.addEventListener('click', () => {

    const vegetableId = button.getAttribute('data-vegetable');

  
    const selectedVegetable = vegetable.find(veg => veg.id === vegetableId);


    basketCount += selectedVegetable.quantity;
    selectedVegetables.push(selectedVegetable);

    countElement.textContent = ` ${basketCount}`;
  });
});



// window.addEventListener('beforeunload', () => {

//   localStorage.setItem('selectedVegetables', JSON.stringify(selectedVegetables));
// });


// window.addEventListener('load', () => {

//   const storedVegetables = localStorage.getItem('selectedVegetables');

 
//   selectedVegetables = storedVegetables ? JSON.parse(storedVegetables) : [];


//   basketCount = selectedVegetables.reduce((total, veg) => total + veg.quantity, 0);
//   countElement.textContent = ` ${basketCount}`;
// });






// const addButton = document.querySelectorAll('.vegetable');



// function addToCart(productId) {
//   let matchingItem;
//   cart.forEach((cartItem) => {
//     if (productId === cartItem.productId) {
//       matchingItem = cartItem;
//     }
//   });


//   if (matchingItem) {
//     matchingItem.quantity += 1;
//   } else {
//     cart.push({
//       productId: productId,
//       quantity: 1

//     });
//   };
// }

// function updateCartQuantity() {
//   let cartQuantity = 0;


//   cart.forEach((cartItem) => {
//     cartQuantity += cartItem.quantity;
//   });
//   const textquantity = document.querySelector('.count');
//   textquantity.innerHTML = cartQuantity;
// }


// addButton.forEach((button) => {
//   button.addEventListener('click', () => {
//     const productId = button.dataset.productId;
//     addToCart(productId);
//     updateCartQuantity();
//   });
// });


