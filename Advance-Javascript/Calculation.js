const prompt = require("prompt-sync")({ sigint: true });

class main {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  get read() {
    return this.show();
  }

  show() {
    const num = prompt("Enter first number: ");
    const num1 = prompt("Enter second number: ");

    this.a = num;
    this.b = num1;

    console.log("Addition is:" + this.add());
    console.log("MUltipication is:" + this.multipication());
  }

  add() {
    return Number(this.a) + Number(this.b);
  }

  multipication() {
    return Number(this.a) * Number(this.b);
  }
}

const data = new main();
console.log(data.read);
