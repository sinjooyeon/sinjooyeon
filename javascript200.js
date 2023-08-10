
/**
 * 반복문배우기
 */

var hometown = [
  {name: '진', city: '과천'},
  {name: '남준', place: '일산', city: '고양'},
  {name: '호석', place: '광주', city: '전라도'},
  {name: '지민', place: '부산', city: '경상도'}
];

var isHometown = function(h, name) {
  console.log(`함수가 실행되었습니다. ${h.city} 도시에서 ${name} 을 찾습니다.`);

  if (h.name === name) {
    console.log(`${h.name} 의 고향은 ${h.city} ${h.place} 입니다.`);
    return true;
  }
  return false;
};

var h;
while (h = hometown.shift()) {
  if (!h.name || !h.place || !h.city) {
    continue;
  }

  var result = isHometown(h, '호석');
  if (result) {
    break;
  }
}

var i = 0;
var names = ['남준', '정국', '윤기', '호섭'];
var cities = ['경기', '부산', '대구', '광주'];
do {
  hometown[i] = {name: names[i], city: cities[i]};
  i++;
} while (i < 4);

console.log(hometown);



/**
 * 객체 속성 접근/추가/수정/삭제
 */

var family = {
  'address': 'Seoul',
  members:   {},
  addFamily: function(age, name, role) {
    this.members[role] = {
      age:  age,
      name: name
    };
  },
  getHeadcount: function() {
    return Object.keys(this.members).length;
  }
};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');

var printMembers = function() {
  var members = family.members;
  for (role in members) {
    console.log('role => ' + role + ', name => ' + members[role].name +
     ', age => ' + members[role].age);
  }
};
printMembers();

var members = family.members;
members.nephew = {age: 3, name: 'hyun'};
members.niece = {age: 5, name: 'lyn'};
delete members.aunt;
delete members.dog;
printMembers();
