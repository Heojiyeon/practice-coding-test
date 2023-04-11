function solution(child, mine) {
    child = child.sort((a, b) => a - b); // 아이들이 원하는 쿠키
    mine = mine.sort((a, b) => a - b); // 내가 가진 쿠키

    let count = 0;
    let maxNum = mine[mine.length - 1];

    for (i = 0; i < mine.length; i++) {
        for (j = 0; j < child.length; j++) {
            if (mine[i] >= child[j]) {
                count++;
                child[j] = maxNum + 1;
                break;
            }
        }
    }
    return count;
}

console.log(solution([1, 2, 3], [1, 1])); //1
console.log(solution([1, 2], [1, 2, 3])); //2