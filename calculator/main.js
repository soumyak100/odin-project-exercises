function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function operate(operator, operand1, operand2) {
	let result = 0;
	switch (operator) {
		case "+":
			result = add(operand1, operand2);
			break;
		
		case "-":
			result = subtract(operand1, operand2);
			break;
		
		case "*":
			result = multiply(operand1, operand2);
			break;
			
		case "/":
			if (operand2 === 0) {
				// Show error message
				result = "Division by zero is not possible";
			}
			else {
				result = divide(operand1, operand2);
			}
			break;
	}
	
	return result;
}

function init() {
	const resultArea = document.querySelector("#result-area");
	const btn7 = document.querySelector("#btn-7");
	btn7.addEventListener("click", () => resultArea.value = btn7.textContent);
}

init();