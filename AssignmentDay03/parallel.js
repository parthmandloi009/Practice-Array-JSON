/*
Question:-What is parallel in nodejs
Answer :-When we have to run multiple tasks independent of each other without
         waiting until the previous task has completed, parallel comes into the picture.
*/
const async = require("async")
async.parallel({
    task1: function(callback) {
      setTimeout(function() {
        console.log('Task One');
        callback(null, 1);
      }, 200);
    },
    task2: function(callback) {
      setTimeout(function() {
        console.log('Task Two');
        callback(null, 2);
      }, 100);
      }
  }, function(err, results) {
    console.log(results);
    // results now equals to: { task1: 1, task2: 2 }
  });