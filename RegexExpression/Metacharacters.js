//References Video youtube video link :- https://www.youtube.com/watch?v=nVLdEdX9gNU

//-------------Metacharacters---------------//

let str = "This is improves file for improve project colour fixe?d jai*n";
let reg = /^This/; //Start with This sign ^
    reg = /project$/ //End with project sign $
    reg = /f.le/ //match any single character . 
    reg = /f*le/ //match more any 0 or more
    reg = /colou?r/ //u optional
    reg = /fixe\?d/ // have special character string 
    reg = /jai\*n/ // have special character string 
    reg = /\wprove/ // "\w" will match the prove in word 
    reg = /\w+prove/ // "\w" will match the prove in word more than one
    reg = /\Wfile/  // start with _ ,space,number,alphabate
    reg = /\W+file/  // start with _ ,space,number,alphabate more than one
    reg = /\sfor/ // white space check 
    reg = /\Sfor/ // white space check before have any character
    reg = /\dimprove/ //check digit
    reg = /\Dimprove/ //check non digit
    reg = /\D+improve/ //check non digit more than one
if(reg.test(str)){
    let finalResponse = reg.exec(str)
    console.log(finalResponse);
}else{
    console.log("not match");
}
