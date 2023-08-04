
const pp = document.createElement('p');
const text = document.createTextNode('오징어');
pp.appendChild(text);
const basisNode = document.querySelectorAll('p')[2];
document.body.insertBefore(pp, basisNode);



const pp2 = document.createElement('p');
const text2 = document.createTextNode('꼴뚜기');
pp2.appendChild(text2);
document.body.insertBefore(pp2, basisNode);


const pp3 = document.createElement('p');
const text3 = document.createTextNode('명태');
pp3.appendChild(text3);
document.body.insertBefore(pp3, basisNode);


const pp4 = document.createElement('p');
const text4 = document.createTextNode('생태');
pp4.appendChild(text4);
document.body.insertBefore(pp4, basisNode);


const newImg2 = document.createElement('img');
const srcNode2 = document.createAttribute('src');
srcNode2.value = 'images/morning.jpg';
newImg2.setAttributeNode(srcNode2);
document.body.appendChild(newImg2);


/**
     * 속성값이 있는 노드 추가하기
     */
const newImg = document.createElement('img');
const srcNode = document.createAttribute('src');
srcNode.value = 'images/afternoon.jpg';
newImg.setAttributeNode(srcNode);

document.body.appendChild(newImg);



const kkolButton = document.querySelector('#kkol');
const candyButton = document.querySelector('#candy');
function earning(name, wage = 10000, hours = 45) {
  return (`* ${name} 급여내역 
  --시급 : ${wage}원 
  --일한시간 : ${hours}시간
  --총금액 : ${wage * hours}`);
}

earning('꼴뚜기');
earning('캔디', 12000);

kkolButton.addEventListener('click', () => {
  const newP2 = document.createElement('p');
  const textNode55 = document.createTextNode(`${earning('꼴뚜기')}`);
  newP2.appendChild(textNode55);
  document.body.appendChild(newP2);
});

candyButton.addEventListener('click', () => {
  const newP3 = document.createElement('p');
  const textNode55 = document.createTextNode(`${earning('캔디')}`);
  newP3.appendChild(textNode55);
  document.body.appendChild(newP3);
});




const starsButton = document.querySelector('#stars');
function stars() {
  let output2 = '';

  for (let i = 1; i < 15; i++) {
    for (let j = 15; j > i; j--) {
      output2 += ' ';
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      output2 += '*';
    }
    output2 += '\n';
  }

  return output2;
}

starsButton.addEventListener('click', () => {
  const star2 = document.createElement('p');
  const textNode66 = document.createTextNode(stars());
  star2.appendChild(textNode66);
  document.body.appendChild(star2);
});




// const bttn3 = document.querySelector("button");
// function display() {
//   document.write("클릭했꾸나");
// }
// bttn3.addEventListener("click", display);


// function openPopup() {
//   window.open("230802.html", "이벤트팝업", "width=600 height=500 left=1000 top=1000");
// }
// const bttn4 = document.querySelector("button");
// bttn4.onclick = openPopup;



// /**
//  * 속성과 메소드 구분
//  * 메소드 내부에서 this키워드 사용하기
//  */
// const pet = {
//   name: '구름',
//   eat: function (food) {
//     alert(this.name + '은/는' + food + '을/를 먹습니다.')
//   }
// }
// pet.eat('개똥')



/**
     * 화면의 중양에서 팝업창 열기
     */
const bttn5 = document.querySelector('button');
const popWidth = 600;
const popHeight = 500;

bttn5.addEventListener('click', function() {
  const left = (screen.availWidth - popWidth) / 2;
  const top = (screen.availHeight - popHeight) / 2;
  window.open('images/wall.jpg', '이벤트팝업', `width=${popWidth} height=${popHeight} left=${left} top=${top}`);
});



/**
     * 디지탈시계만들기
     */
const displayTime = document.querySelector('#clock');

const clock = () => {
  const current = new Date();
  let hrs = current.getHours();
  let mins = current.getMinutes();
  let secs = current.getSeconds();


  let period = 'AM';
  if (hrs === 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs -= 12;
    period = 'PM';
  }
  hrs = (hrs < 10) ? '0' + hrs : hrs;
  mins = (mins < 10) ? '0' + mins : mins;
  secs = (secs < 10) ? '0' + secs : secs;

  displayTime.innerText = `${period} ${hrs} : ${mins} : ${secs} `;
};


setInterval(clock, 1000);



function Book(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;
  this.finish = function() {
    let str = '';
    this.done === false ? str = '읽는 중' : str = '완독';
    return str;
  };
}

/**
     * 생성자 함수로 객체만들기
     */
const book1 = new Book('웹 표준의 정석', 648, false);
const book2 = new Book('점프 투 파이썬', 360, true);

console.log(`${book1.title} - ${book1.pages}쪽 - ${book1.finish()}<br>`);
console.log(`${book2.title} - ${book2.pages}쪽 - ${book2.finish()}<br>`);




