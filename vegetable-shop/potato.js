
import {vegetable} from './vegetable.js';

const vegetable2s = document.querySelectorAll('.vegetable2')
const countElement = document.querySelector('.count');

const selectedVegetables = [];
let basketCount = 0;





vegetable2s.forEach(button => {
  button.addEventListener('click', () => {
    const vegetableId = button.getAttribute('data-vegetable');
    const selectedVegetable = vegetable.find(veg => veg.id === vegetableId);

    basketCount += selectedVegetable.quantity;
 selectedVegetables.push(selectedVegetable);

    countElement.textContent = ` ${basketCount}`;
    localStorage.setItem('selectedVegetables', JSON.stringify(selectedVegetables));
});
});







document.getElementById('cartt').addEventListener('click', () => {
  window.location.href = 'vegetablecartpage.html';
});


console.log(selectedVegetables);