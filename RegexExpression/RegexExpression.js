//References Video youtube video link :- https://www.youtube.com/watch?v=nVLdEdX9gNU

let str = "This is improves file for improve project";

//------------exec function(this fun will return an array for match or null for no match)----------------
//----------For search----------------------
// let reg = /improve/; //For search
// let res = reg.exec(str);
// console.log(res);


//---------For globaly search----------------
// let reg = /improve/g; //For Globaly search
// let res1 = reg.exec(str);
// console.log(res1);


//---------For casesensative  search----------
// let reg = /improve/i; //For avoid chapital letter search
// let res2 = reg.exec(str);
// console.log(res2);


//------------test function(Return true and false)---------------
// let reg = /improve/g;
// let res = reg.test(str)
// console.log(res);


//---------------match function(It will return array of results or null)-----------//
// let reg = /improve/g;
// let result = str.match(reg)
// console.log(result)
//Output :- [ 'improve', 'improve' ]


//---------------search function(Return index of first match else -1)-----------//
// let reg = /improve/g;
// let result = str.search(reg)
// console.log(result);
//Output :- 8


//---------------relace fucntion(Return new replaced string with all the replacements)-----//
// let reg = /improve/g;
// let result = str.replace(reg,"Code improve")
// console.log(result);
//Output :- This is Code improves file for Code improve project
