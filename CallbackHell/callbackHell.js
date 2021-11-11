//CallBack Hell 

const getRollNo = ()=>{
    setTimeout(()=>{
        console.log("Api getting roll no.");
        let roll_no = [1,2,3,4,5,6];
        console.log(roll_no);

        setTimeout((rollNo)=>{           
            console.log(`My RollNumber is ${rollNo}`);

            setTimeout(()=>{
                console.log("My 3rd Roll Number..");

                setTimeout(()=>{
                    console.log("My 4th Roll Number");
                    
                },2000)
                
            },2000)

        },2000,roll_no[1])

    },2000)
}

getRollNo();