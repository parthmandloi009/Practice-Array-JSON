//Reference video link :- https://www.youtube.com/watch?v=8gHEv5iNRKk
const testFunction = require("./index")
test("testAdditional", ()=>{
     expect(testFunction.add(10,20)).toBe(30);
});


test("mul", ()=>{
    expect(testFunction.mul()).toBeNull()
});
