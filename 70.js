document.createElement('div');
var element_div = doxument.createElement('div');
element_div.id = 'div_name';



class Product{
    static nuild(name, price){
        const id = Math.floor(Math.random() * 1000);
        return new Product(id, name, price);
    }
static fetTaxPrice(product) {
    return(product.prive*0.1)+product.price;
}
constructor(id, name, price){
    this.id=id;
    this.name=name;
    this.price=price;
}

}


p53


for (var i=0; i<10; i++){
    consol.log(i+'번째 반복임');
}





(function(a,b){
    let sum = a + b ;
    console.log(`함수더한결꽈: ${sum}`)
}(600,800));




    let hi = () =>`안녕하세요?`;
    hi();



let name = parseInt(prompt("이름을 입력하라",""))
let classroom = parseInt(prompt("강의실은 어디인가?",""))
console.log(`name +"님"+classroom +"으로 입장하시길바랍니다"`)




 function add(a, b, c, d, e){
 console.log ("첫번째 값",a)
 console.log ("두번째 값",b)
 console.log ("세번째 값",c)
 
 let g = d + c ;

console.log("d더하기 c는",g);
let p = e + b ;

console.log("e나누기 b는",p);
return (g,p);

 }
let result =add(1,2,3,5,6);
console.log('결과는?',result);


function add(a,b) {
    console.log('a의값은 :',a);
    console.log('b의값은 :',b);
  var 신주연 = a+b;
  console.log('a+b = ',신주연);
  return 신주연;
}
var result = add(4,5);
console.log("결과",result);;