/*
@uestion:-Write two functions that use Promises that you can chain! The first function, makeAllCaps(), 
will take in an array of words and capitalize them, and then the second function,
sortWords(), will sort the words in alphabetical order. 
If the Array contains anything but Strings, it should throw an error.
*/

function capitalize(word){
    return new Promise((resolve,reject)=>{
        let checkString = word.every(i => (typeof i === "string"));
        if(checkString){
            for(var i = 0 ; i < word.length ; i++){
                word[i] = word[i].toUpperCase();
            }    
             resolve(word)
        }else{
            reject(false);
            console.log("Not Array of string.");
        }
    })
}

function sortArray(words){
    console.log("++++++",words);
    return new Promise((resolve,reject)=>{
        resolve(words.sort());
    })
}

let arr= ["rahul","shayam","amit","mohan","ram"];
capitalize(arr)
.then(sortArray)
.then((data)=>{
console.log(data);
})
.catch((error)=>{
    console.log(error);
})