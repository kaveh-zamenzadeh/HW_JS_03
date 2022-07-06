const calculator = {
    result: 0,
    lefthand: +prompt("Enter lefthand number:"),
    righthand: +prompt("Enter righthand number:"),
    
    addition() {
        this.result= this.lefthand + this.righthand;
        return this.result;
    },
    subtraction() {
        this.result= this.lefthand - this.righthand;
        return this.result;
    },
    multiplication() {
        this.result= this.lefthand * this.righthand;
        return this.result;
    },
    division() {
        this.result= this.lefthand / this.righthand;
        return this.result;
    },
    getAll() {
        return [calculator.addition(), calculator.division(),
        calculator.multiplication,calculator.subtraction()]
    }

}
console.log(calculator.getAll())