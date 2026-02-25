// script.js
let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
}

function setOperation(op) {
    if (currentInput === '') return;

    if (previousInput !== '') {
        calculateResult();
    }

    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
        if (currentInput === '' || previousInput === '') return;
    
        let result;
        let prev = parseFloat(previousInput);  // Primeiro número
        let current = parseFloat(currentInput); // Segundo número (que será a porcentagem)
    
        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    alert('Erro! Divisão por zero.');
                    clearDisplay();
                    return;
                }
                result = prev / current;
                break;
            case '%':
                // Aplica a porcentagem no primeiro número (prev) e soma
                result = prev + (prev * current / 100); // Calcula a porcentagem do primeiro número
                break;
            default:
                return;
        }
    
        display.value = result;
        currentInput = result.toString();
        operator = '';
        previousInput = '';
    }