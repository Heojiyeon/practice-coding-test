function solution(number, k) {
    let result = [];
    for (num of number) {
        console.log(num);
        while (result.length != 0 && result[result.length - 1] < num && k > 0) {
            result.pop();
            k--;
        }
        result.push(num);
    }
    result = result.length > number.length - k ? result.splice(0, number.length - k) : result;
    return result.join('');
}


console.log(solution("1924", 2)); //"94"
console.log("--------------");
console.log(solution("1231234", 3)); //"3234"
console.log("--------------");
console.log(solution("4177252841", 4)); //"775841"
console.log("--------------");
console.log(solution("4321", 1)); //"432"