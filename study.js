<script>
  function private() {
    a = (new Date()).toJSON();
    alert(a.replace(/(\d+-\s+-\d\d)T(\d\d:\d\d:\d\d)\..+/, (_, a, b) => `${a} ${b}`));
  }
  private();
</script>;




study;







////////////////ㅁㄴㅇㅁㄴㅇㄴㅇㅁㅇㅁㅇㅁㄴㅇ


const rawstring = '안녕하세요 밥은 먹었냐?';
const typearr = new TextEncoder().encode(rawstring);
const wiredstring = [...typearr].map(num => String.fromCharCode(num)).join('');
const b64encoded = btoa(wiredstring);
/*;
console.log('rawstring', rawstring);
console.log('b64encoded', b64encoded);
*/


const b64decoded = atob(b64encoded);
const splited = b64decoded.split("");
const numarray = splited.map(function (c) {
  return c.charCodeAt(0);
});
const typearr2 = new Uint8Array(numarray);

const 원문 = new TextDecoder().decode(typearr2);
// console.log(b64encoded, ' -> ',  원문);
// console.log('같은거 맞아?', rawstring == 원문? '응': '아니야');



// const json = localStorage.getItem('식대계산');
// const obj = JSON.parse(json)
// console.log(obj);

function insane() {
  return [1, 5, 4, 7, 7, 34, 8, 89, 65422, 763, 8, 8]
    .map(num => num % 100)
    .filter(num => num > 10);
}


function level3() {
  const a = [1, 5, 4, 7, 7, 34, 8, 89, 65422, 763, 8, 8];
  const b = a.map(num => num % 100);
  const c = b.filter(num => num > 10);
  return c;
}
function level2() {
  const a = [1, 5, 4, 7, 7, 34, 8, 89, 65422, 763, 8, 8];
  const b = a.map(function (num) {
    return num % 100;
  });
  const c = b.filter(function (num) {
    return num > 10;
  });
  return c;

}

function level1() {
  const a = [1, 5, 4, 7, 7, 34, 8, 89, 65422, 763, 8, 8];
  const b = [];
  for (var i = 0; i < a.length; i++) {
    b.push(a[i] % 100);
  }
  const c = [];
  for (var i = 0; i < b.length; i++) {
    if (b[i] > 10) {
      c.push(b[i]);
    }
  }
  return c;


}

const l1 = level1();
console.log('level_1', l1);
const l2 = level2();
console.log('level_2', l2);
const l3 = level3();
console.log('level_3', l3);
const ii = insane();
console.log('insane', ii);




function test_compare_object() {
  const a = {
    "a0": 0,
    "a1": 1,
  };
  const ak = Object.keys(a);
  const aksort = ak.sort();
  const newa = {};
  for (var i = 0; i < aksort.length; i++) {
    const key = aksort[i];
    const val = a[key];
    newa[key] = val;
  }

  const d = {
    "a1": 1,
    "a0": 0,
  };

  const dk = Object.keys(a);
  const dksort = dk.sort();
  const newd = {};
  for (var i = 0; i < dksort.length; i++) {
    const key = dksort[i];
    const val = d[key];
    newd[key] = val;
  }

  console.log(JSON.stringify(a), JSON.stringify(d));
  console.log(JSON.stringify(a) == JSON.stringify(d));
  console.log(JSON.stringify(newa), JSON.stringify(newd));
  console.log(JSON.stringify(newa) == JSON.stringify(newd));

}

function test_compare_array() {
  const a = [1, 2];

  const b = [2, 1];
  console.log(JSON.stringify(a), JSON.stringify(b));
  console.log(JSON.stringify(a) == JSON.stringify(b));

}
test_compare_object();
// test_compare_array()





function add() {
  // console.log(b+c);
  // console.log(arguments);
  console.log('안농?! ' + arguments[0]);
  add('신주연');
}
function aㄴㄴㄴ() {
  return 1 + 1;
}

// localStorage.setItem('fna', '{"functiona":"return 1+1"}')



// const fna = JSON.parse(localStorage.getItem('fna'))

const a = Function("alert(prompt('입력해봐'))");
a();





function test_for() {
  for (var i = 0; i < 10; i++) {

    if (i < 5) {
      console.log('계속');
      continue;
    } else {
      console.log('다음');
    }
    if (i == 8) {
      console.log('와!! 멈춰!');
      break;
    }
    console.log(i);
  }
  console.log('끗');
}
function test_while() {
  var i = Math.random() * 100;
  while (i < 90) {
    console.log('계속');
    i = Math.random() * 100;

  }
  console.log('끗');
}
function test_switch() {
  var i = Math.random() < 0.5 ? 'a' : 'b';
  while (true) {
    if (i == 'a') {
      console.log('와 마지막이다! a', i);
      break;
    } else {
      console.log(i);
    }
    // switch (i) {
    // case 'a':
    //     console.log('와 마지막이다! a', i);
    //     break;
    // default:
    //     console.log(i);
    // }
    console.log('계속');
    i = Math.random() < 0.5 ? 'a' : 'b';

  }
  console.log('끗');
}
function test_for_same_while() {
  var i = Math.random() < 0.5 ? 'a' : 'b';
  for (; true;) {
    if (i == 'a') {
      console.log('와 마지막이다! a', i);
      break;
    } else {
      console.log(i);
    }
    // switch (i) {
    // case 'a':
    //     console.log('와 마지막이다! a', i);
    //     break;
    // default:
    //     console.log(i);
    // }
    console.log('계속');
    i = Math.random() < 0.5 ? 'a' : 'b';

  }
  console.log('끗');
}
test_for_same_while()














































