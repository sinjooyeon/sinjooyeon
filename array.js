


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



candy = ['mandarin', '알사탕', 'kiwi', 'squid', '딸기', '머스캣', '라임', 'octopus', 'apple', 'orange', '멜론맛', '콩가루맛'];
const array1 = candy.entries();
for (const [index, element] of candy.entries()) {
  console.log(index, element);
}





// 현재 요소만 사용
array.forEach((currentElement) => { /* ... */ });
array.forEach(function(currentElement) { /* ... */ });

// 현재 요소와 인덱스 사용
array.forEach((currentElement, index) => { /* ... */ });
array.forEach(function(currentElement, index) { /* ... */ });

// 현재 요소와 인덱스, 전체 배열 사용
array.forEach((currentElement, index, array) => { /* ... */ });
array.forEach(function(currentElement, index, array) { /* ... */ });

// 모든 인수와 this 까지 사용
array.forEach((currentElement, index, array) => { /* ... */ }, thisValue);
array.forEach(function(currentElement, index, array) { /* ... */ }, thisValue);








const bo = ['mandarin', '알사탕', 'kiwi', 'squid', '딸기', '머스캣', '라임', 'octopus', 'apple', 'orange', '멜론맛', '콩가루맛', 'tomato', 'potato'];
bo.shift();
bo.splice(6, 3, '멸치', '꽁치');
bo.slice(1, 10);
bo.splice(5, 0, '고등어', '오징어', '꼴뚜기');

bo.slice(0, 10);

bo.find((element) => element.length == 3);
bo.findIndex((element) => element.length == 3);

bo.findLast((element) => element.length == 3);

bo.findLastIndex((element) => element.length == 3);
bo.shift();
bo.pop();
bo.indexOf('꼴뚜기');

bo.splice(3, 0, ['사탕', '생선조림', '닭강정']);
bo.flat(1);
bo.copyWithin(0, 12, 16);
bo.reverse();
bo.includes('고등어');
bo.indexOf('고등어');


const aa = bo.entries();
console.log(aa.next().value);

bo.fill('불가사리', 7, 9);

bo.forEach((element) => console.log(element));

bo.every((element) => element.length < 7);
bo.some((element) => element.length < 2);
bo.sort();
bo.at(1);
bo.filter((element) => element.length == 3);


const zz = bo.forEach((element) => console.log(element));
const cc = bo.map((element) => console.log(element));






const iterator = bo.values();
for (const value of iterator) {
  console.log(value);
}
































