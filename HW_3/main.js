const num1 = +prompt("Enter 1st number");
const operation = prompt ("Choose operation +,-,*,/");
const num2 = +prompt("Enter 2nd number");
var result;

switch (operation) {  
  case "+":
    result = num1+num2;
    break;
  
  case "-":
    result = num1-num2;
    break;
  
  case "*": 
    result = num1*num2;
    break;
  
  case "/": 
    result = num1/num2;
    break;
  
  default: 
    alert(`Invalid operation: ${operation}`);
}

console.log(result);