console.log("main.js active");


//-------- EVENT LISTENERS ---------

var numberAdd = document.getElementById('addIn')
	numberAdd.addEventListener("click", function() {

		let x = document.getElementById('numIn1').value;
		x = Number(x);

		let y = document.getElementById("numIn2").value;
		y = Number(y);

		calculate(x, y, 'add');
	});


var numberSub = document.getElementById('subtractIn')
	numberSub.addEventListener("click", function() {

		let x = document.getElementById('numIn1').value;
		x = Number(x);

		let y = document.getElementById("numIn2").value;
		y = Number(y);

		calculate(x, y, 'subtract');
	});



var numberMultiply = document.getElementById('multiplyIn')
	numberMultiply.addEventListener("click", function() {

		let x = document.getElementById('numIn1').value;
		x = Number(x);

		let y = document.getElementById("numIn2").value;
		y = Number(y);

		calculate(x, y,'multiply');
	});




var numberDiv = document.getElementById('divideIn')
	numberDiv.addEventListener("click", function() {

		let x = document.getElementById('numIn1').value;
		x = Number(x);

		let y = document.getElementById("numIn2").value;
		y = Number(y);

		calculate(x, y, 'divide');
	});


//-------- CALCULATION FUNCTONS ---------


function add(x, y) {
	var result = x + y;

	var resultOut = document.getElementById("output");
	resultOut.innerHTML = result;
}

function subtract(x, y) {

	var result = x - y;

	var resultOut = document.getElementById("output");
	resultOut.innerHTML = result;
}

function multiply(x, y) {

	var result = x * y;

	var resultOut = document.getElementById("output");
	resultOut.innerHTML = result;
}

function divide(x, y) {

	var result = x / y;

	var resultOut = document.getElementById("output");
	resultOut.innerHTML = result;
}



// Create a function that accepts three arguments.
//     1. First number
//     2. Second number
//     3. A function that performs an operation on them


function calculate(x, y, operation) {

	switch(operation) {
	    case "add":
	        add(x, y);
	        break;
	    case "subtract":
	        subtract(x, y);
	        break;
	    case "multiply":
	        multiply(x, y);
	        break;
	    case "divide":
	        divide(x, y);
	        break;
	    default:
	        console.log("Error");
	}
}




