// get the element 
let spanE1 = document.getElementById('num1');
let spanE2 = document.getElementById('num2');

// element --- property
//var num1 = parseInt(document.getElementById('n1').textContent); 
let n1 = parseInt(spanE1.textContent);
let n2 = parseInt(spanE2.textContent);
console.log(typeof n1);

//process
var c = n1 + n2;
document.write(c);
//display

