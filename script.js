var result = document.getElementById("result");

function show(number){
	
	result.value += number;
}

function showOperators(operator) {
	
	result.value += operator;
}

function calc() {
	
	result.value = eval(result.value);
}

function clearResult() {
	
	result.value = "";
}