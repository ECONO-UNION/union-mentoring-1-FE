// 콜백함수를 이용하여 나만의 reduce함수 만들기
// reduce는 initialValue가 있으면, initialValue를 처음으로 하여, reduce를 해간다.
// accumulator = initialValue
// initialValue가 없으면, array의 첫번째 원소값을 처음으로 하여, reduce를 해간다.
// accumulator = array[0]

const customReduce = (array, func, initialValue) => {
    let accumulator = initialValue;
    let currentValue;
    let idx = 0;

    if (!accumulator) { // initialValue가 없으면
        accumulator = array[idx++];
    }

    while (idx < array.length) {
        currentValue = array[idx++];
        accumulator = func(accumulator, currentValue);
    }

    return accumulator;
}

const newvalue = customReduce([1, 2, 3], (pre, acc) => pre + acc, 3)
console.log(newvalue) // 9