

'use strict';
let sum=0;
let Name=prompt('what is your name ?');
alert('Hello '+Name);

alert('let us play a gussing game ');

function question1(){
    let answer=prompt('is my name Qutadah Almomani ?');

    answer=answer.toLowerCase();
    
   
   if (answer==='y'||answer==='yah'||answer==='yes') {
       alert('you are right');
       sum++;
   }  else if (answer==='n' || answer==='no' || answer==='nop') {
       alert('you are wrong');
   }
   else{
       alert('please answer with ( yes , yah , y ,no , nop , no )');
   }
}
question1();

function question2(){

  let  answer=prompt('do i create this website as assessment for lab ?');

answer=answer.toLowerCase();

if (answer==='y'||answer==='yah'||answer==='yes') {
   alert('you are right');
   sum++;
   
}  else if (answer==='n' || answer==='no' || answer==='nop') {
   alert('you are wrong');
}
else{
   alert('please answer with ( yes , yah , y ,no , nop , no )');
}}
question2();


function question3(){
   let answer=prompt('do i learn programming in this course ?');

 answer=answer.toLowerCase();

if (answer==='y'||answer==='yah'||answer==='yes') {
    alert('you are right');
    sum++;
    
}  else if (answer==='n' || answer==='no' || answer==='nop') {
    alert('you are wrong');
}
else{
    alert('please answer with ( yes , yah , y ,no , nop , no )');
}

}
question3();


function question4(){
  let  answer=prompt(' i am 25 years old ,is that right ? ');

    answer=answer.toLowerCase();
   
   if (answer==='y'||answer==='yah'||answer==='yes') {
       alert('you are right');
       sum++;
   
   } else if (answer==='n' || answer==='no' || answer==='nop') {
       alert('you are wrong');
   }
   else{
       alert('please answer with ( yes , yah , y ,no , nop , no )');
   }

}
question4();

function question5(){

  let  answer=prompt('did i study in one of a jordanian university ? ');

    answer=answer.toLowerCase();
   
   if (answer==='y'||answer==='yah'||answer==='yes') {
       alert('you are right');
       sum++;
       
   } else if (answer==='n' || answer==='no' || answer==='nop') {
       alert('you are wrong');
   }
   else{
       alert('please answer with ( yes , yah , y ,no , nop , no )');
   }


}
question5();

function question6(){
    let num=prompt('guess a number betwen 1 and 50 ');


for (let i = 1; i < 4; i++) {
    
    if(num===22)
    {
        sum++;
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

}
question6();

function question7(){
    let cars = ['mitsubishi', 'volvo', 'bmw','mercedes','ford'];
    let ans='';
    
    ans=ans.toLowerCase();
  loop:for ( let j=0 ; j<6 ; j++ ){
     ans =prompt('what is my favorite car brand ');
    ans=ans.toLowerCase();
 for ( let i=0 ; i< cars.length ; i++){

if(cars[i]===ans){
    sum++;
    alert('you are right');
           
           break loop;
}


}   
    if ( j===5){
    alert('the right answer is ' + cars);
    

    }else if( j<6){
        alert('wrong guess try again');
    }
  
   
 
    }
 
   

}
question7();

alert('thank you ' + Name + ' for play this game your score is '+sum+' /7 have a nice time in our website');


