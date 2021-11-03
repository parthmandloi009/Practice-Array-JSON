// const fruits = ["Banana", "Orange", "Apple", "Mango"];


// function reverseArr(fruits){
//   var reverseVal = []
//   for(let i = fruits.length-1;i>=0;i--){
//       reverseVal.push(fruits[i]);
//   }
//   return reverseVal;
// }
// console.log(reverseArr(fruits));


const test = {
    name:"Parth",
    age:26
}
for (let [key, value] of Object.entries(test)) {
    console.log(`${key}: ${value}`);
  }