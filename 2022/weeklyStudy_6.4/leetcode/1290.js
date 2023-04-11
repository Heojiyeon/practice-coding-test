function solution(head) {
    let result = 0;
    for (i = 0; i < head.length; i++) {
        if (head[i] == 1) {
            result += Math.pow(2, i);
        }
    }
    return result;
}
console.log(solution([1, 0, 1])); //5
console.log(solution([0])); //0