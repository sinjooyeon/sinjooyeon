

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


