//References Video youtube video link :- https://www.youtube.com/watch?v=nVLdEdX9gNU

//-------------Brackets ---------------//
//--------------[]Brackets---------------//

let str = "This is codecode improves file for improve project colour fixe?d jai*n";

let reg = /imp[tyr]ove/ // match t,y,r any character
    reg = /imp[a-z]ove/ // match a to z character
    reg = /imp[a-zA-Z]ove/ // match a to z character small and also chapital 
    reg = /imp[^xyz]ove/ // ^ not x,y,z 
    reg = /imp[^xyz]o[v]e/ 

//----------------{}Brackets--------------//

    reg = /co{2}l/     // match 2 oo 
    reg = /co{0,2}l/   // match (0 to 2) o
    reg = /(code|co)/  // match double character
if(reg.test(str)){
    let finalResponse = reg.exec(str)
    console.log(finalResponse);
}else{
    console.log("not match");
}


