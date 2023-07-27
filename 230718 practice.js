/**
 * 계산총합값
 * @param {number} n 숫자
 * @returns {number}
 */
function calcSum1(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return (sum);
}
let num = parseInt(prompt("몇살이냐"));
console.log(`1에서 ${num}까지 더하면 ${calcSum1(num)}이다`);


/**
 * 계산총합값
 * @param {number} n 숫자
 * @returns {number}
 */
function calcSum2(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return (sum);
}
let num1 = parseInt(prompt("몇까지 더해줄까?"));
console.log(`1부터 ${num1}까지 더해쥼 ${calcSum2(num1)}이다`);


/**
 * 계산총합값 
 * @param {number} n 숫자
 * @returns {number} 계산된 값
 */
function calcSum3(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return (sum);
}
let num2 = parseInt(prompt('아무숫자나 입력해보시게'));
console.log(` 1부터 ${num2}까지 더하면 ${calcSum3(num2)}이땨`);

calcSum3();

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
let h1 = parseInt(prompt('오징어다리 몇개?'));
let h2 = parseInt(prompt('문어다리 몇개?'));
let y = add(h1, h2);
console.log(y);


/**
 * 메서드호출
 */
var calculator = {
  operand1: 1,
  operand2: 1,
  add: function () {
    this.result = this.operand1 + this.operand2;
  }
};
calculator.add();
calculator.result
