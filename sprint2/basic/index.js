// 콜백함수를 이용하여 나만의 map 함수 만들기
const nums = [1, 2, 3, 4, 5];
const customMap = (array, func) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(func(array[i]));
    }
    return result;
};
const newNums = customMap(nums, num => num * 2);
console.log(newNums); // [2, 4, 6, 8, 10];