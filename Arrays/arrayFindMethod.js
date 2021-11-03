//Array find Method
const ages = [3,4,5,6,9,8];
function checkAge(age){
    return age>4;
}
const agg = ages.find(checkAge)
console.log(agg);
