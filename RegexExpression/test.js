//Question :- First print test1 and second print test2

// function test1() {
//   setTimeout(() => {
//     console.log("test1");
//   }, 5000);
// }

// function test2() {
//   test1();
//   console.log("test2");
// }


//Resolve:-

// async function test1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("test1");
//       resolve();
//     }, 2000);
//   });
// }

// async function test2() {
//   await test1();
//   console.log("test2");
// }

// test2();


