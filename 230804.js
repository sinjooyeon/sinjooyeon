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
  newp.style.fontSize = '3em';
  newp.style.color = 'pink';
  document.body.appendChild(newp);
}, {once: true});

// price.onclick = offDisplay();

// function offDisplay() {
//   document.getElementById('offDistplay').style.display = 'none';
// }

// price.onclick = function() {
//   price.classList.toggle('hidden');
// };


function test() {
  const a = '안뇽';
  const b = '신난다';
  const c = `${a}
${b}   







`;
  console.log(c);
}
test();


if (true) {
  console.log('ohooyeah!!!');
  console.log('ohooyeah!!!');
}
const b = 1624453355000 < Date.now();
const a = 1624453355000 < Date.now() ? 1624453355000 < Date.now() ? true : (b) : false;




a = 'orange';

switch (a) {
  case 'orange':
    console.log('이게 뭔짓이냐!!!!!!');
    break;
  case 'melon':
  case 'banana':
    console.log('오랑캐!');
    break;
  default:
    console.log('오란다!');
}

if (['orange', 'melon', 'banana'].includes(a)) {
  console.log('오랑캐!');
} else {
  console.log('오란다!');
}




var names = ['Andrew', undefined, null, 0, '', false, 'Edward', 'Paul', 'Chris', 'John'];

while (names.length) {
  i = names.shift();
  console.log(i);
}



fruit = ['cherry', 'orange', 'kiwi', 'apple', 'strowberry'];

fruit.shift();
fruit.pop();
fruit.splice(1, 0, 'banana', 'tomato', 'melon', 'watermelon', 'peach', 'grape');

fruit.splice(3, 2);


const board = [
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
];

console.log(board.join('\n') + '\n\n');

// 폰을 앞으로 두 칸 전진
board[4][4] = board[6][4];
board[6][4] = ' ';
console.log(board.join('\n'));





function Book(title, price) {
  this.title = title;
  this.price = price;
}
Book.prototype.buy = function() {
  console.log(`${this.title}을 (를) ${this.price}원에 구입하였습니다`);
};

const book1 = new Book('ABCDE', 10000);
book1.buy();



function Textbook(title, price, major) {
  Book.call(this, title, price);
  this.major = major;
}

Textbook.prototype.buyTextbook = function() {
  console.log(`${this.major}전공서적, ${this.title}을 구매하였습니다`);
};


Object.setPrototypeOf(Textbook.prototype, book.prototype);


const book2 = new Textbook('알고리즘', 5000, '컴퓨터공학');
book2.buyTextbook();
book2.buy();
