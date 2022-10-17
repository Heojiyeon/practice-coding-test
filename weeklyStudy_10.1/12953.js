function solution(arr) {

    function calculator(a, b) {
        return a == 0 ? b : calculator(b % a, a);
    }

    return arr.reduce((a, b) => (a * b) / calculator(a, b));
}


console.log(solution([2, 6, 8, 14])); //168
console.log(solution([1, 2, 3])); //6
console.log(solution([3, 4, 9, 16])); //144