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

function start() {
    const formula = prompt("계산식을 입력하세요. 예: 10 + 2 * 3 - 4 / 2");

    if (!formula) {
        console.log("계산식이 입력되지 않았습니다.");
        return;
    }

    try {
        const result = calculate(formula);
        console.log(`계산식: ${formula}`);
        console.log(`결과: ${result}`);
    } catch (error) {
        console.log(`에러: ${error.message}`);
    }
}