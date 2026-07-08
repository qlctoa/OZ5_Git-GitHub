const display = document.querySelector("#display");

let isPowerOn = false;
let currentFormula = "";

function updateDisplay(value) {
    display.value = value;
}

function togglePower() {
    isPowerOn = !isPowerOn;

    if (isPowerOn) {
        currentFormula = "";
        updateDisplay("0");
    } else {
        currentFormula = "";
        updateDisplay("");
    }
}

function clearDisplay() {
    if (!isPowerOn) {
        return;
    }

    currentFormula = "";
    updateDisplay("0");
}

function appendNumber(number) {
    if (!isPowerOn) {
        return;
    }

    if (number === "." && currentFormula.endsWith(".")) {
        return;
    }

    currentFormula += number;
    updateDisplay(currentFormula);
}

function appendOperator(operator) {
    if (!isPowerOn) {
        return;
    }

    if (currentFormula === "") {
        return;
    }

    const lastChar = currentFormula[currentFormula.length - 1];

    if (["+", "-", "*", "/"].includes(lastChar)) {
        currentFormula = currentFormula.slice(0, -1) + operator;
    } else {
        currentFormula += operator;
    }

    updateDisplay(currentFormula);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("0으로 나눌 수 없습니다.");
    }

    return a / b;
}

function tokenize(formula) {
    const tokens = formula.match(/\d+(\.\d+)?|[+\-*/]/g);

    if (!tokens) {
        return [];
    }

    return tokens;
}

function validateTokens(tokens) {
    if (tokens.length < 3 || tokens.length % 2 === 0) {
        return false;
    }

    for (let i = 0; i < tokens.length; i++) {
        if (i % 2 === 0 && isNaN(Number(tokens[i]))) {
            return false;
        }

        if (i % 2 === 1 && !["+", "-", "*", "/"].includes(tokens[i])) {
            return false;
        }
    }

    return true;
}

function calculate(formula) {
    const tokens = tokenize(formula);

    if (!validateTokens(tokens)) {
        throw new Error("잘못된 계산식입니다.");
    }

    const firstStep = [];

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        if (token === "*" || token === "/") {
            const left = Number(firstStep.pop());
            const right = Number(tokens[i + 1]);
            const result = token === "*" ? multiply(left, right) : divide(left, right);

            firstStep.push(result);
            i++;
        } else {
            firstStep.push(token);
        }
    }

    let result = Number(firstStep[0]);

    for (let i = 1; i < firstStep.length; i += 2) {
        const operator = firstStep[i];
        const right = Number(firstStep[i + 1]);

        if (operator === "+") {
            result = add(result, right);
        } else if (operator === "-") {
            result = subtract(result, right);
        }
    }

    return result;
}

function performCalculate() {
    if (!isPowerOn) {
        return;
    }

    try {
        const result = calculate(currentFormula);
        currentFormula = String(result);
        updateDisplay(currentFormula);
    } catch (error) {
        updateDisplay("Error");
        currentFormula = "";
        console.log(error.message);
    }
}