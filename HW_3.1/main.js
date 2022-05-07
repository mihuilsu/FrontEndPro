const num1 = +prompt ('Enter 1st number');
const operation = prompt ('Choose operation +, -, *, /');
const num2 = +prompt ('Enter 2nd number');
var result;

if (isNaN(num1)) {
      alert('Wrong 1st number')
      console.log('Error')
      location.reload();
}
  else if (num1 == '') {
      alert('Empty 1st number')
      console.log('Error')
      location.reload();
}
  else if (isNaN(num2)) {
      alert('Wrong 2nd number')
      console.log('Error')
      location.reload();
}
  else if (num2 == '') {
      alert('Empty 2nd number')
      console.log('Error')
      location.reload();
};

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
      console.log('SyntaxError');
      location.reload();
  };

alert(result);  
console.log(result);
location.reload();
