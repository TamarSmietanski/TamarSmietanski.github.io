// let btn1=document.getElementById('counter1');
// btn1.addEventListener('click',()=>{counter1.increase()})

// function counter(btn){
//    this.counter=0;
//    this.btn=btn;
// }

// counter.prototype.increase=function(){
//     this.counter++;
//     this.btn.innerText=this.counter;
// }

 //let counter1=new counter(btn1);
// console.log(counter1);

let btn1=document.getElementById('counter1');
btn1.addEventListener('click',()=>{counter1.increase()})
let btn2=document.getElementById('counter2');
btn2.addEventListener('click',()=>{counter2.increase()})
let btn3=document.getElementById('counter3');
btn3.addEventListener('click',()=>{counter3.increase()})
class counter{
    constructor(btn){
        this.btn=btn;
        this.counter=0;

    }
     increase(){
         this.counter++;
         this.btn.innerText=this.counter;
     }
}
let counter1=new counter(btn1);
console.log(counter1);
let counter2=new counter(btn2);
console.log(counter2);
let counter3=new counter(btn3);
console.log(counter3);