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
  const rests2 = document.querySelectorAll('.rect');

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



