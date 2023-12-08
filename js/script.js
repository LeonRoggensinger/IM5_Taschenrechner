let wrongAnswers = [];

document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('#buttons button:not(#equals, #clear)');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const btnValue = this.getAttribute('data-value');
            display.value += btnValue;
            activateButtonVisualEffect(this);
        });
    });

    document.getElementById('equals').addEventListener('click', function () {
        try {
            let inputValue = display.value;
            let expression = display.value.replace('×', '*').replace('÷', '/');
            display.value = calculateExpression(expression);
            let userResult = calculateExpression(expression);
            checkGameResult(userResult, inputValue);
        } catch (e) {
            display.value = "Error";
        }
    });

    document.getElementById('clear').addEventListener('click', function () {
        display.value = "";
        activateButtonVisualEffect(this);
    });

    // Event-Listener für Tastatureingaben
    document.addEventListener('keydown', function(event) {
        handleKeyboardInput(event);
    });

    initializeGame();
});

function calculateExpression(expr) {
    if (!expr.trim()) {
        return ''; // Leerer String für leeren Ausdruck
    }
    if (/[^0-9+\-*/().]/.test(expr)) {
        throw new Error('Invalid characters in expression');
    }
    return Function('"use strict";return (' + expr + ')')();
};

function initializeGame() {
    wrongAnswers = [];
    display.value = "";
    generateGameGoal();
};

function generateGameGoal() {
    const targetNumberElement = document.getElementById('target-number').querySelector('span');
    const fixedNumberElement = document.getElementById('fixed-number').querySelector('span');
    const targetOperatorElement = document.getElementById('target-operator').querySelector('span');
    const operators = ['+', '-', '*', '/'];

    // Zufällige Zahl zwischen 0 und 100 generieren
    const randomNumber = Math.floor(Math.random() * 101);
    //Zufällige Schlüsselzahl zwischen 10 und 20 generieren
    const randomFixedNumber = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    // Zufälligen Operator wählen
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];

    targetNumberElement.textContent = randomNumber;
    fixedNumberElement.textContent = randomFixedNumber;
    targetOperatorElement.textContent = randomOperator;
};

function checkGameResult(userResult, inputValue) {
    const targetNumber = parseInt(document.getElementById('target-number').querySelector('span').textContent);
    const targetOperator = document.getElementById('target-operator').querySelector('span').textContent;
    const fixedNumber = parseInt(document.getElementById('fixed-number').querySelector('span').textContent);
    const resultMessage = document.getElementById('result-message');
    const resultPinboard = document.getElementById('result-pinboard');

    if (!isNaN(userResult) && userResult == targetNumber && inputValue.includes(targetOperator) && inputValue.includes(fixedNumber)) {
        resultMessage.textContent = "Richtig! Du hast das Ziel erreicht.";
        document.body.classList.add('correct-answer');
        setTimeout(() => document.body.classList.remove('correct-answer'), 500);
        initializeGame();
    } else {
        resultMessage.textContent = "Leider falsch. Versuchs nochmal!";
        wrongAnswers.push(inputValue + " = " + userResult);
        resultPinboard.innerHTML = '';
        wrongAnswers.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element
            resultPinboard.appendChild(li);
        });
        document.body.classList.add('wrong-answer');
        setTimeout(() => document.body.classList.remove('wrong-answer'), 500);
    }
};


function handleKeyboardInput(event) {
    const key = event.key;
    const display = document.getElementById('display');
    
    // Zahlen und Operatoren
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/'].includes(key)) {
        display.value += key;
        activateButtonVisualEffect(document.querySelector(`button[data-value="${key}"]`));
    }

    // Gleichheitszeichen (Enter)
    if (key === 'Enter') {
        document.getElementById('equals').click();
        activateButtonVisualEffect(document.getElementById('equals'));
        event.preventDefault(); // Verhindert Standardverhalten der Enter-Taste
    }

    // Clear (Backspace)
    if (key === 'Backspace') {
        document.getElementById('clear').click();
        activateButtonVisualEffect(document.getElementById('clear'));
        event.preventDefault(); // Verhindert Standardverhalten der Backspace-Taste
    }
};


function activateButtonVisualEffect(buttonElement) {
    if (!buttonElement) return; // Abbruch, wenn kein Element gefunden wurde
    buttonElement.classList.add('active-button');
    setTimeout(() => {
        buttonElement.classList.remove('active-button');
    }, 100); // Entfernt den Effekt nach 100 Millisekunden
};
