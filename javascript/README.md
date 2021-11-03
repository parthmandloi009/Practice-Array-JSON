## Javascript
1) Scope
    Local Scope
    Gobal Scope

2) IIFE (Immediately Invoked Function Expression)
Ans:-As the name suggests IIFE is a function in javascript which immediately invoked and executed as soon as it is defined. Variables declared within the IIFE cannot be accessed by the outside world and this way you can avoid global scope from getting polluted. So the primary reason to use IIFE is to immediately executes the code and obtain data privacy.

3) Closures
Ans:-A closure is simply a function inside another function that has access to the outer function variable. Now, this definition sound pretty much straightforward but the real magic is created with the scope. The inner function (closure) can access the variable defined in its scope (variables defined between its curly brackets), in the scope of its parent function, and the global variables. Now here you need to remember that the outer function can not have access to the inner function variable (we have already discussed this in scope concept). Let’s take an example and understand it in a better way.