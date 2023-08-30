

/**
 * getter예문
 */
const person = {
  firstName: 'Alice',
  lastName:  'Johnson',
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
};

console.log(person.fullName); // 출력: Alice Johnson


/**
 * setter예문
 */
const person2 = {
  firstName2: '',
  lastName2:  '',
  set fullName2(name) {
    const parts = name.split(' ');
    this.firstName2 = parts[0];
    this.lastName2 = parts[1];
  },
  get fullName2() {
    return this.firstName2 + ' ' + this.lastName2;
  }
};

person2.fullName2 = 'Bob Smith';
console.log(person2.firstName2); // 출력: Bob
console.log(person2.lastName2); // 출력: Smith

/**
 * getter setter예문
 */
const student = {
  _age: 0,
  set age(value) {
    if (value >= 0 && value <= 120) {
      this._age = value;
    } else {
      console.error('Invalid age value');
    }
  },
  get age() {
    return this._age;
  }
};

student.age = 18;
console.log(student.age);// 출력: 18

student.age = 150; // 유효하지 않은 값 설정 시 에러 출력

/**
 * 생성자 체이닝
 */
class Calculator {
  constructor(value = 0) {
    this.value = value;
  }

  add(num) {
    this.value += num;
    return this; // 생성자 체이닝을 위해 자기 자신을 반환
  }

  subtract(num) {
    this.value -= num;
    return this;
  }
}

const calc = new Calculator(10);
calc.add(5).subtract(3);
console.log(calc.value); // 출력: 12

/**
 * 객체 할당
 */
const target = {a: 1, b: 2};
const source = {b: 4, c: 5};

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true



















