var A = [7, 2, 6, 4, 5];
var B = [1, 6, 4, 9,5];

var union = [ ...new Set([...A,...B])]

console.log(union);


var arr = [ { id: 10, name: 'apple' }, { id: 20, name: 'orange' } ];

for(let i of arr){
    console.log(i.name);
}