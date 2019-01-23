type Calc={
    number1:number,
    number2:number,
    func:string,
    setInputs:(firstInput:number,secondInput:number,selectValue:string)=>void,
    sum:()=>number,
    mult:()=>number,
    minus:()=>number
}
let Calculator:Calc ={
    number1:2,
    number2:2,
    func:'*',
    setInputs(firstInput:number,secondInput:number,selectValue:string):void{
        this.number1=firstInput;
        this.number2=secondInput;
        this.func=selectValue;
    },
    sum():number{
        return this.number1+this.number2;
    },
    mult():number{
        return this.number1*this.number2;
    },
    minus():number{
        return this.number1-this.number2;
    }

}

let btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click',()=> {
    let result = document.getElementsByTagName('p')[0];
    let firstInput = parseInt(document.getElementsByTagName('input')[0].value);
    let secondInput = parseInt(document.getElementsByTagName('input')[1].value);
    let selectValue = document.getElementsByTagName('select')[0].value;

    Calculator.setInputs(firstInput, secondInput, selectValue);

    switch (selectValue) {
        case '+':
            result.innerHTML = Calculator.sum().toString();
            break;
        case '-':
            result.innerHTML = Calculator.minus().toString();
            break;
        case '*':
            result.innerHTML = Calculator.mult().toString();
            break;
    }
});