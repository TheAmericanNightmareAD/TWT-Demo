console.log(5||5);

console.log(true||true);
console.log(true||false);
console.log(false||false);
console.log(false||true);


console.log(true && true);


// console.log(!true);
// console.log(!false);


// ///conditionals

// // let 5age = 17;
// // if (age>18) {
// //   console.log("You can drive");
// // }
// // console.log("use a bicycle");

// // dry run 
// /*
// ram = age >18
// 20 age>18>17- false 
// print nahi hoga
// 22 print karega use a bicycle
// */

// let age = 20;
// if (age<20) {
//   console.log("you are under 20");
  
// }
// if (age==18) {
//   console.log("I am 18");
  
// }
// if (age>18) {
//   console.log("I am over 18");
  
// }

// let m=23;
// if (0) {
//   console.log("You are selected");
  
// }

//else - nahi toh

// let age2 =16;

// if (age2>18) {
//   console.log("you can vote");
  
// }else{
//   console.log("you can not vote");
  
// }


let age = 475;
if (age<15) { // 47<15=false
  console.log("Go to School");
  
}else if (age>15 && age<18) { //47>15 && 47<18= false 
  console.log("Go to College");
  
}else if (age>18 && age<24) {// 47>18 && 47<24= false 
  console.log("Go to Work");
  
}else if (age>24 && age<30) {// 47>24 && 47>30=false
  console.log("Get Married");
  
}else if (age>30 && age<35) {//47>30 && 47<35=false
  console.log("Dropping your Kids off to school");
  
}else if (age>35 && age<45) {// 47>35 && 47<45=false
  console.log("Focus on Your Work");
  
}else if (age>45 && age<60) {//47>45 && 47<60= True
  console.log("Planning a Retirement");
  
}else if (age>60 && age<75) {
  console.log("Focus on Prayer");
  
}else if (age>75 && age<80) {
  console.log("Rest in Peace");
  
}else{
  console.log("You are die");
  
}

/// Question
let Marks = 55;
if (Marks>90) {// 55>90=false
  console.log("Grade A");
  
}else if (Marks>80 && Marks<90) {// 55>80 || 55<90
  console.log("Grade B");
  
}else if (Marks>70 && Marks<80) {// 55>70 55<80
  console.log("Grade C");
  
}else if (Marks>60 && Marks <70) {// 55>60 55<70
  console.log("Grade D");
  
}else if (Marks>50 && Marks<60) {//55>50 55<60
  console.log("Grade E");
  
}else{
  console.log("You are Fail");
  
}

/*
Odd Number- not divisible by 2
Evenn Number- divisible by 2
*/