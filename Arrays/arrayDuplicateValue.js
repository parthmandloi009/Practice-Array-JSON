//Array Duplicate value 
const number = [65, 44, 12, 4,4,12,44];

const num = number.filter((item,index)=>{
    return number.indexOf(item) == index
})
console.log(num);
