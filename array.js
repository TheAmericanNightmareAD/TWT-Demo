// array is a linear data structure..
/*


*/

// let array = [4,7,9,2,5,3,0,1,10,70,80];

// for (let i = 0; i < array.length; i++) {
// for (let j = i+1; j < array.length; j++){
//   if (array[i]>array[j]) {
//     let temp=array[i]
//     array[i]=array[j]
//     array[j]=temp;
//   }
// }
  
// }
// console.log("sorted array is ",array);



//find sorted array
let array=[5,8,7,9,3,0,1,200,40,300,500,1000,5500,5205,3600]
//sort this array---
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[i]>array[j]) {
      let temp=array[i]
      array[i]=array[j]
      array[i]=temp;
    }
    
  }
  
}

console.log("The sorted array is", array);




let array5=[7,5,8,9,100,5,6,0,33,785,998,100,15242]
for (let i = 0; i < array.length; i++) {
for (let j = 0; j < array.length; j++) {
  if (array[i]>array[j]) {
    let temp=array[i]
    array[i]=array[j]
    array[1]=temp
  }
  
}
  
}
console.log("array sorted",array5);



let text="hello"


// take a string as input and check the longest string in the sentence ans pass that string
function checkLongestString(sentence) {
  let words = sentence.split(' ');
  let longestWord = '';

  for (let word of words) {
      if (word.length > longestWord.length) {
          longestWord = word;
      }
  }

  return longestWord;
}

console.log(checkLongestString("I love javascript and hate it at the same time"))


///check the longest string 
function checkthelongeststring(sentence1){
  let wards=sentence1.split(' ');
  let longestwordIs = ' ';

  for (let word of wards){
    if (word.length > longestwordIs) {
      longestwordIs = word;
    }
  }
  return longestwordIs
}
console.log(checkLongestString ("lovedi sidk iskfu lkfkohidsofkdsj sld"));
