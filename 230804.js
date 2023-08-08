// function callThreeTimes(callback) {
//   for (let i = 0; i < 3; i++) {
//     callback(i);
//   }
// }
// function print(i) {
//   console.log(`${i}번째 함수 호출`);
// }

// callThreeTimes(print);



document.addEventListener('DOMContentLoaded', () => {
  const rects2 = document.querySelectorAll('.rect');

  rects2.forEach((rect, index) => {
    const width = (index + 1) * 100;
    const src = `https://placekitten.com/${width}/250`;
    rect.setAttribute('src', src);
  });
});


// rects.forEach((rect, index) => {
//   const width = (index + 1) * 100;
//   const src = `http://placekitten.com/${width}/250`;
//   rect.src = src;
// });


const students = ['개똥', '소똥', '말똥', '비둘기똥'];
for (student of students) {
  console.log(`${student}`);
}

/**
 * 고양이 사진 토글효과
 */
const cat01 = document.querySelector('#cat1');
const cat02 = document.querySelector('#cat2');
const cat03 = document.querySelector('#cat3');

cat01.onclick = function() {
  document.body.classList.toggle('dark');
};

cat02.onclick = function() {
  document.body.classList.toggle('blue');
};

cat03.onclick = function() {
  document.body.classList.toggle('pink');
};


/**
 * 사진클릭시 고앵이 사진 사라지는효과
 */
const cat04 = document.querySelector('#cat4');

cat04.onclick = function() {
  cat04.classList.toggle('hidden');
};

const catmustache = document.querySelector('#catmustache');
const price = '고앵이 콧수염 2개 만원';
catmustache.addEventListener('click', () => {
  const newp = document.createElement('p');
  const Text = document.createTextNode(price);
  newp.appendChild(Text);
  newp.style.fontSize = '5em';
  newp.style.color = 'pink';
  document.body.appendChild(newp);
}, {once: true});









