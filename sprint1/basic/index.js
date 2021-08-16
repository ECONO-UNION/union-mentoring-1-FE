const Process = function () {
    const input = "17sa8b";
    const numInputs = input.replace(/[^0-9]/g, '').split('');
    let answer = [];
    let numbers = '';
    let letters = '';

    for (let i = 0; i < input.length; i++) {
        if (numInputs.includes(input[i])) {
            numbers += input[i];
            if (i === input.length - 1) { // 마지막이라면
                answer.push({ type: 'number', value: parseInt(numbers, 10) });
                numbers = '';
            }
            if (!numInputs.includes(input[i + 1])) { // 다음 것이 문자라면
                answer.push({ type: 'number', value: parseInt(numbers, 10) });
                numbers = '';
            }
        }
        else {
            letters += input[i];
            if (i === input.length - 1) { // 마지막이라면
                answer.push({ type: 'string', value: letters });
                numbers = '';
            }
            if (numInputs.includes(input[i + 1])) { // 다음 것이 숫자라면
                answer.push({ type: 'string', value: letters });
                letters = '';
            }
        }
    }
    console.log(answer);
}

Process();