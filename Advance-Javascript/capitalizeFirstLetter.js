

function capitalizeFirstLetter(str){
    if(str.charAt(0) === str.charAt(0).toUpperCase()){
        console.log("If Condition..");
        return str
    }else{
        console.log("Else condition");
        return str.charAt(0).toUpperCase()+ str.slice(1)
    }
}
let str = "hello World";
console.log(capitalizeFirstLetter(str));