// 소수 만들기
// 그 수가 소수인지 확인하는 함수
function findPrime(sum) {
    let answer = true;
    for (i = 2; i < sum; i++) {
        if (sum % i == 0) return !answer;
    }
    return answer;
}

function solution(nums) {
    let x, y, z;
    let sum = 0;
    let arr = [];
    let count = 0;
    // 1. x, y, z를 선택하는 방법
    for (i = 0; i < nums.length; i++) {
        x = nums[i];
        for (j = i + 1; j < nums.length; j++) {
            y = nums[j];
            for (k = j + 1; k < nums.length; k++) {
                z = nums[k];
                // sum = x + y + z;
                console.log("x", x, "y", y, "z", z);
                arr.push(x + y + z);
                console.log("sum", x + y + z);
                // if (findPrime(sum) == true) count++;
            }
        }
    }
    for (m = 0; m < arr.length; m++) {
        if (findPrime(arr[m]) == true) count++;
    }
    return count;
}

// console.log(solution([1, 2, 3, 4]));//1
console.log("--------------");
console.log(solution([1, 2, 7, 6, 4])); //4