/**
 * N까지 더하기
 */
function test() {
  function calcSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return (sum);
  }
  const num = parseInt(prompt('몇까지 더해줄까?'), 10);
  console.log(`1부터 ${num}까지 더해쥼 ${calcSum(num)}이다`);
}



/**
 * 함수 덧셈 연습
 *
 * @see {@link foo} for further information.
 * @see {@link https://github.com/sinjooyeon}
 * @example
 * var a = add(1,2);
 * var result = add(Math.random(),add(1,2))
 * @param {number} a 숫자
 * @param {number} b 숫자
 * @returns {number} ㅅㅅㅎ로롤
 */
function add(a, b) {
  return a + b;
}
const h1 = parseInt(prompt('오징어다리 몇개?'), 10);
const h2 = parseInt(prompt('문어다리 몇개?'), 10);
const y = add(h1, h2);
console.log(y);



/**
 * 프롬프트에서 취소를 했는지 체크
*/
const userInput = prompt('이름을입력하세요');
if (userInput === null) {
  alert('취소했습니다.');
} else {
  alert(userInput);
}




/**
 * 사용자 입력값이 홀수인지 짝수인지 구분
*/
let userNumber = prompt('숫자입력해봐');
if (userNumber !== null) {
  userNumber = parseInt(userNumber, 10);
  (userNumber % 2 === 0) ? alert(`${userNumber}:짝수`) : alert(`${userNumber}:홀수`);
}



/**
 * while 조건문으로 조건에따른 별표시
*/
let stars = parseInt(prompt('별의 갯수 : '), 10);

while (stars > 0) {
  document.write('*');
  stars--;
}



// 버튼 요소 가져옴
// 버튼 클릭하면 display 함수 실행
//
const bttn = document.querySelector('button');

function display() {
  alert('클릭했습니다.');
}

bttn.addEventListener('click', display);



//greeting 함수를 선언한 후 콜백 함수로 사용;
function greeting() {
  console.log('안녕하세요?');
}

setInterval(greeting, 2000);



//직접 함수를 선언하면서 실행;
setInterval(() => {
  console.log('안녕하세요?');
}, 2000);




//타이머 실행했따가 종료하기
let counter = 0;

const timer = setInterval(() => {
  console.log('안녕하세요?');
  counter++;
  if (counter === 5) {
    clearInterval(timer);
  }
}, 2000);


//일정시간 이후 표시하기
setTimeout(() => {
  console.log('안녕하세요?');
}, 3000);


/**
 * 버튼을 클릭해서 다크모드로 바꾸기
 */
const bttn2 = document.querySelector('button');
bttn2.onclick = () => {
  document.body.classList.toggle('dark');
};



/**
 * 키보드에서 키값찾기
*/

const body = document.body;
const result = document.querySelector('#result');

body.addEventListener('keydown', (e) => {
  result.innerText = `
      code :${e.code}, 
      key : ${e.key}`;
});


































