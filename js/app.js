

'use strict';
let sum=0;
let Name=prompt('what is your name ?');
alert('Hello '+Name);

alert('let us play a gussing game ');

// 1 Q
function question1(){
    let answer=prompt('is my name Qutadah Almomani ?');

    answer=answer.toLowerCase();
    
   
    console.log(answer);
   if (answer==='y'||answer==='yah'||answer==='yes') {
       alert('you are right');
       sum++;
       console.log(sum);
   }  else if (answer==='n' || answer==='no' || answer==='nop') {
       alert('you are wrong');
   }
   else{
       alert('please answer with ( yes , yah , y ,no , nop , no )');
   }
}
question1();

function question2(){
    answer=prompt('do i create this website as assessment for lab ?');

answer=answer.toLowerCase();

console.log(answer);
if (answer==='y'||answer==='yah'||answer==='yes') {
   alert('you are right');
   sum++;
   console.log(sum);
   
}  else if (answer==='n' || answer==='no' || answer==='nop') {
   alert('you are wrong');
}
else{
   alert('please answer with ( yes , yah , y ,no , nop , no )');
}}
question2();



answer=prompt('do i learn programming in this course ?');

 answer=answer.toLowerCase();

 console.log(answer);
if (answer==='y'||answer==='yah'||answer==='yes') {
    alert('you are right');
    sum++;
    console.log(sum);
    
}  else if (answer==='n' || answer==='no' || answer==='nop') {
    alert('you are wrong');
}
else{
    alert('please answer with ( yes , yah , y ,no , nop , no )');
}


answer=prompt(' i am 25 years old ,is that right ? ');

 answer=answer.toLowerCase();

 console.log(answer);
if (answer==='y'||answer==='yah'||answer==='yes') {
    alert('you are right');
    sum++;

    console.log(sum);
} else if (answer==='n' || answer==='no' || answer==='nop') {
    alert('you are wrong');
}
else{
    alert('please answer with ( yes , yah , y ,no , nop , no )');
}


answer=prompt('did i study in one of a jordanian university ? ');

 answer=answer.toLowerCase();

 console.log(answer);
if (answer==='y'||answer==='yah'||answer==='yes') {
    alert('you are right');
    sum++;
    console.log(sum);
    
} else if (answer==='n' || answer==='no' || answer==='nop') {
    alert('you are wrong');
}
else{
    alert('please answer with ( yes , yah , y ,no , nop , no )');
}



let num=prompt('guess a number betwen 1 and 50 ');


for (let i = 1; i < 4; i++) {
    
    if(num===22)
    {
        sum++;
        console.log(sum);
         alert('you are right');
        break;
       
    
 
    }
    else if(num<22) {
        
        num=prompt('you shoud try again your guessing is too short '+ 'this is your ' + i +' try');
        
    }
    else if(num>22){
        num=prompt('you shoud try again your guessing is too high '+ 'this is your ' + i +' try');
    }
  }

 
alert('the corrict answer is 22');
console.log(num);
let cars = ["mitsubishi", "Volvo", "BMW","mercedes","ford"];
let ans =prompt('what is my favorite car brand ');


ans=ans.toLowerCase();
console.log(ans);

let q = 0 ;
for (let i = 0; i < 5; i++) {
    q++;
    if (ans==='mitsubishi' || ans==='volvo'|| ans==='bmw' || ans==='mercedes' || ans==='ford') { 
        
        alert('you are right');
        sum++;
        console.log(sum);
       break;
        
        
   
        
    }
     else {ans =prompt('wrong guess try again' );
       
    }
     
}
if (q==5){
    alert('the right answer is "mitsubishi", "Volvo", "BMW","mercedes","ford"') 
}
console.log(ans);

alert('thank you ' + Name + ' for play this game your score is '+sum+' /7 have a nice time in our website');
