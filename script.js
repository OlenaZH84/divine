var second;
var number1 = prompt ("input the first number");
parseFloat(number1);
var number2 = prompt ("input the second number");
parseFloat(number2);
second=number2;
while (number2==0){
 alert ("you cannot divine by 0!");
 number2 = prompt ("input the second number"); 
 parseFloat(number2);
 }
alert(parseFloat(number1)/parseFloat(number2));