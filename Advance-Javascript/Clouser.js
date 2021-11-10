function parent(n) {
  let ans = 1;
  function child() {
    if (n == 0 || n == 1) {
      return ans;
    } else {
      for (let i = n; i >= 1; i--) {
        ans = ans * i;
      }
      return ans;
    }
  }
  return child();
}
let num = 7;
console.log("The factorial of " + num + " is " + parent(num));
