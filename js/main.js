console.log("main.js active");

/***********  SCRIPT  ***************/
let numIn1 = "";
let numIn2 = "";
let numOut1 = "";
// let numX = getElementById('numIn1');
// let numY = getElementById("numIn2");


document.getElementById('addIn')
	.addEventListener("click", function(){
		add(numIn1, numIn2)
	});
// object.addEventListener("click", myScript);
// object.addEventListener("click", myScript);
// object.addEventListener("click", myScript);


function calculate (x, y, func) {
	return func(numX, numY)
}

function add(x,y) {
	return x + y
}
	console.log("add", );

function subtract(x, y) {
  return x - y
}

function multipy(x, y) {
  return x * y
}
function divide(x, y) {
  return x / y
}













