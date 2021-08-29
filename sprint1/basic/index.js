let answer = [];

const pushToAnswer = (typeOfInput, valueOfInput) => {
    if (typeOfInput == 'number') {
        answer.push({ type: typeOfInput, value: parseInt(valueOfInput, 10) });
    }
    else {
        answer.push({ type: typeOfInput, value: valueOfInput });
    }
}

const isNumberInput = (input, i) => {
    const numInputs = input.replace(/[^0-9]/g, '').split('');
    return numInputs.includes(input[i])
}

const isLastInput = (input, i) => {
    return i === input.length - 1
}

const Process = () => {
    const input = "17sa8b";
    let numbers = '';
    let letters = '';

    for (let i = 0; i < input.length; i++) {
        if (isNumberInput(input, i)) {
            numbers += input[i];
            if (isLastInput(input, i) || !isNumberInput(input, i + 1)) { // 마지막이라면
                pushToAnswer('number', numbers);
                numbers = '';
            }
        }
        else {
            letters += input[i];
            if (isLastInput(input, i) || isNumberInput(input, i + 1)) { // 마지막이라면
                pushToAnswer('string', letters);
                letters = '';
            }
        }
    }
    console.log(answer);
}

Process();