 /*
   Question:- Write a function testNum that takes a number as an argument and returns a 
   Promise that tests if the value is less than or higher than the value 10.
 */
 function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (!num) {
      console.log("Please enter number.");
    }
    if (num==10) {
        console.log("Number is 10.");
      }
    if (num > 10) {
      console.log("Number greater then 10.");
      resolve(num)
    } else {
      
      console.log("Number less then 10.");
    }
  });
}


checkNumber(9).then((num)=>{
    console.log("True",num);
}).catch((error)=>{
    console.log(error);
})