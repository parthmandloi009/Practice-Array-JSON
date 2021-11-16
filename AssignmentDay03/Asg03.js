/*
Question:-Using Promise create a function named 'sleep' that should invoke a callback function 
          after x seconds. NOTE: sleep function should not block the call stack.
*/ 
function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true)
        },5000)

    })
}

sleep().then(()=>{
    console.log("+++");
})