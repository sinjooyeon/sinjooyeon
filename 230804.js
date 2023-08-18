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


// price.onclick = offDisplay();

// function offDisplay() {
//   document.getElementById('offDistplay').style.display = 'none';
// }

// price.onclick = function() {
//   price.classList.toggle('hidden');
// };



const catmustache = document.querySelector('#catmustache');
catmustache.addEventListener('click', () => {
  const picture = 5;
  const rdNumber = Math.floor(Math.random() * picture) + 1;
  document.body.style.backgroundImage = `url(images/pic-${rdNumber}.jpg)`;
});





function test() {
  const a = '안뇽';
  const b = '신난다';
  const c = `${a}${b}`;
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


/**
 * 클래스를 사용해 객체만들기
 */
class fruit9 {
  constructor(taste, color, condition) {
    this.taste = taste;
    this.color = color;
    this.condition = condition;
  }

  appearance() {
    let con = '';
    this.condition === false ? con = '못난이 과일' : con = '최고급';
    return con;
  }
}
const fruit8 = new fruit9('sour', 'red', false);
const fruit7 = new fruit9('daldal', 'yellow', true);

console.log(`${fruit8.taste}한 맛의 색상은 ${fruit8.color}이고 상품의 상태는${fruit8.appearance()}입니다`);
console.log(`${fruit7.taste}한 맛의 색상은 ${fruit7.color}이고 상품의 상태는${fruit7.appearance()}입니다`);




str = '안녕 바보 똥꼬야';
str.startsWith('바');
str.startsWith('안');
str.endsWith('꼬야');
str.includes('바보');

array1 = str.split('');

array2 = str.split(' ');

const index = array1.indexOf(' ');
array1.splice(2, 1);

/^안/.test(str);

/야$/.test(str);


candy = ['mandarin', '알사탕', 'kiwi', 'squid', '딸기', '머스캣', '라임', 'octopus', 'apple', 'orange', '멜론맛', '콩가루맛'];
const array1 = candy.entries();
for (const [index, element] of candy.entries()) {
  console.log(index, element);
}


































