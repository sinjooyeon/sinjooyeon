


let o9= prompt("나이가 몇쩔?","");
let o8= prompt("다리가 몇개?","");

function add(a,b){
  return a+b;
}
let epu= add(o9,o8);
console.log (epu);

// practice  practice  practice   practice   practice   practice
// practice  practice  practice   practice   practice   practice



let w1= parseInt(prompt("나이가 몇쩔?",""));
let w2= parseInt(prompt("다리가 몇개?",""));

function add(a,b){
  return a+b;
}
let epw= add(w1,w2);
console.log (epw);

// practice  practice  practice   practice   practice   practice
// practice  practice  practice   practice   practice   practice




let g = "hello world"
g.replace("o","O")

g.charAt(0)


function for01(){
  for(   )
}

// practice  practice  practice   practice   practice   practice
// practice  practice  practice   practice   practice   practice

function calcSum(){
let sum = 0;
for (let i = 1 ; i<= 10 ; i++){
  sum +=i;
}
console.log (`1부터 10까지 더하면 ${sum}입니다`);
}

calcSum();

// practice  practice  practice   practice   practice   practice
// practice  practice  practice   practice   practice   practice

function calcSum() {
  let sum = 0;
  for(let i = 1 ; i<= 10 ; i++){
    sum += i;
  }
  console.log(`1부터 10까지 더하면 ${sum}입니다`);
}
 calcSum();

// practice  practice  practice   practice   practice   practice
// practice  practice  practice   practice   practice   practice



function calcSum(){
  let sum = 0;
  for (let i=1; i<=10; i++){
    sum+=i;
  }
  console.log(`1부터 10까지 더해${sum}입니다`)
}
calcSum();

// practice  practice  practice   practice   practice   practice
// practice  practice  practice   practice   practice   practice



function calcSum(){
  let sum = 0 ;
  for (let i=1; i<=10; i++){
    sum+=i;
  }
  console.log(`1부터 10까지 더해 ${sum}이다`)
}
calcSum();

// practice  practice  practice   practice   practice   practice
// practice  practice  practice   practice   practice   practice






function calcSum(){
  let sum=0;
  for (let i = 1; i<=10;i++){
    sum +=i;
  }
console.log(`난 ${sum}이야`)

}
calcSum();


// practice  practice  practice   practice   practice   practice
// practice  practice  practice   practice   practice   practice




function calcSum(n){
  let sum=0;
  for (let i = 1 ; i<=n ; i++){
    sum +=i;
  }
console.log(`난 1부터 ${n}까지 더하믄 ${sum}이징`);
}
calcSum(8);

// practice  practice  practice   practice   practice   practice
// practice  practice  practice   practice   practice   practice



function calcSum(n){
  let sum = 0;
  for ( let i =1 ; i<=n;i++){
    sum +=i
  }
  return(sum)
}
let num =parseInt(prompt("몇까지 더해줄까?"))
console.log(`1부터 ${num}까지 더해쥼 ${calcSum(num)}이다`)




// practice  practice  practice   practice   practice   practice
// practice  practice  practice   practice   practice   practice


let num1 = parseInt(prompt("나이?"));
let num2 = parseInt(prompt("생일 몇월?"));

function add(a,c){
  return a*c;
}
let tt= add(num1, num2);
console.log(tt);




function calcSum(n){
  let sum = 0;
  for (let i= 1;  i<=n; i++){
    sum += i;
  }
return(sum)
}

let num = parseInt(prompt("나이는?"));
console.log(`1부터 ${num}까지 더함 ${calcSum(num)}이다`);


 

//계산기 만들어봄

let num1 = parseInt(prompt("앞의 숫자"));
let num2 = prompt("연산 +_*/");
let num3 = parseInt(prompt("뒤의 숫자"));

function add(a,b,c){
  if (b =='+'){
   console.log(a+c);
  }else if(b=='-'){
    console.log(a-c);
  }else if(b=='*'){
    console.log(a*c);
  }else if(b=='/'){
    console.log(a/c);
  }
  }

let u = add(num1,num2,num3);



///////////////////////////////


var hi = "hello";
function greeting(){
  console.log(hi);
}

greeting(hi);


var hi = "good morning~!"
function greeting(){
  console.log(hi);
}
greeting(hi);


///////////////////////////
var hi = "hello"
function change(){
  hi="bye";
}
console.log(hi);
change();
console.log(hi);

////////////////////////////
const factor = 5;

function calc(num){
  return num * factor;
}
{
  
  let result = calc(10);
  document.write(`result : ${result}`);
}
//잘못된것. 변수 접근이 안된다고 하는데 지금은 뭘 말하는지 몰겠음 다시 나중에 확인하겠음



let hi = function(){
  return `안녕하세요?`;
  }
hi();



let hi =function(){
return `안녕하세요?`;
}
hi();





let hi =function(){
  return `안녀아세요?`;
}
hi();



let hi = ()=>{return`dkssudgktyd?`};
hi();



let hi = ()=> `dkssudgktpdy?`;
hi();




let hi2 = function(user){
  console.log(`${user}님 안녕하심?`);
}
hi2 ("홍길똥");


let hi= function(user){
  return `${user}님 방갑수`;
}
hi('김치');



let hi= user=> console.log(`${user}님 언제옴니꽈?`);
hi("꼴뚜기");

let hi = user=> console.log(`${user}님 안녕하심??`);
hi("오징어");

let m9= parseInt(prompt("님 나이?"));
let m0= parseInt(prompt("충치 몇개?"));

function add(a,b){
  return a+b;
}
let o= add(m9,m0);
console.log(o);


let hi ="안녕하심뉘까?";

let g = function(user){
  console.log(`${user}남 안녕?`);
}
g("바보")

let greeting= user => console.log(`${user}님 안녕하심뉴ㅣ`);
greeting("바보");


////더하기 for문


function calcSum(n){
let sum = 0;
for(let i=1; i<=n;i++){
sum +=i;}

return (sum);
}

let num = parseInt(prompt("숫자를 입력해 보시죠?!"));
console.log(`1부터 ${num}을 더한수는 ${calcSum(num)}이당~~~`);


///////











function calcSum(n){
  let sum =0;
  for( let i=1; i<=n; i++){
    sum +=i;
  }
  return sum;
}

let num = parseInt(prompt("입력하죠"));
console.log(`1부터 ${num}까지 더하면 ${calcSum(num)}이 됩다`);





let greeting = user=> console.log(`${user}님 안녕하심?`);
greeting("발꾸락");





const bttn =document.querySelector("button");

function display(){
  alert("클릭했습니다.");
}
bttn.addEventListener("click",display);











































