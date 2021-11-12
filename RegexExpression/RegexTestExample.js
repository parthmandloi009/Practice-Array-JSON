//Password matching regex
let pass = "Parth@789"
let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
let results = reg.test(pass)

//Email Matching Regex
let email = "parth@gmail.com"
let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let res = emailReg.test(email);
//console.log(res);

//Credit card regex pattern(VISA Card)
let card = "4111111111111111"
let regCard = /^4[0-9]\d+$/;
let result = regCard.test(card);
//console.log(result);

//Q:-Write a regex function to distinguish and pick the values of email address, phone number from the below paragraph.
let para =   `Lorem ipsum dolor 9221122108 sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat.
             Nunc aliquet bibendum enim facilisis gravida. mytraining@deqode.com Nisl nunc mi 
             ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna 
             fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque 
             in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. +91-20200-21210 
             Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl 
             suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce 
             (+91)-20200-21210 ut placerat mt@test.inc orci nulla. Pharetra vel turpis nunc eget 
             lorem dolor. Tristique senectus et netus et malesuada.`



let paraReg = /\W+deqode/g  

let Email = paraReg.exec(para);

//console.log(Email);

//Implement the setTimeout function using native javascript only.
const fun = (()=>{
setTimeout(()=>{
    console.log("This is the set time out function.");
    
},2000)
})();

// Implement a javascript Array having the following prototype functions without using Native javascript array:
// - push //adding value in array
// - pop  //remove last element in array
// - shift // remove first element in array
// - unshift // adding element in 0 th index
// - length //find a length of array
// - splice :-  At position 2, add 2 elements, remove 1
//     var fruits = ["Banana", "Orange", "Apple", "Mango"];
//     fruits.splice(2, 1, "Lemon", "Kiwi");
//     Output :- Banana,Orange,Lemon,Kiwi,Mango


    
