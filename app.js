// const fs = require("fs");
// const text= {
//     firstName:"Parth",
//     lastName:"Mandloi"
// }


// let data = JSON.stringify(text)
// fs.writeFile('./textFile.txt', data, function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });
  

// const data = fs.readFileSync('./textFile.txt',
//             {encoding:'utf8', flag:'r'});
// Display the file data
//console.log(data);

//let arr = [4,1,5,2,6,3,7,1,23,4];
//console.log(arr.indexOf(23));

// var toFindDuplicates = arr => arr.filter((item, index) => {
//     arr.indexOf(item) !== index
//     console.log(arr.indexOf(item));
//    // console.log(index);
// })

// var duplicateElements = toFindDuplicates(arr)
// console.log(duplicateElements) 


// const user = (name)=>{

//     console.log("User Name:"+name);
// }

// const address = (callback)=>{

//     console.log("Address Called");
//     callback("Parth")
// }

// address(user);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    }
   
   var arr = [2, 11, 37, 42];
    shuffleArray(arr);
    console.log(shuffleArray(arr));
   


