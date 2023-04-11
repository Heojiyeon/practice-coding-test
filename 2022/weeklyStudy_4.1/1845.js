function solution(nums) {
    let selectNum = nums.length / 2;
    let count = new Set(nums).size;

    /*
    for (i = 1; i < nums.length; i++) {
        let curr = nums[0];
        if (curr != nums[i]) {
            count++;
        }
    }
    */

    return count >= selectNum ? selectNum : count;
}

console.log(solution([3, 1, 2, 3])); //2
console.log(solution([3, 3, 3, 2, 2, 4])); //3
console.log(solution([3, 3, 3, 2, 2, 2])); //2