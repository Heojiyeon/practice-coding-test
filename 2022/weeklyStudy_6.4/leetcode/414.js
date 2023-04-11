function solution(nums) {
    nums = nums.sort((a, b) => b - a);
    let count = 1;
    let max = nums[0];
    if (nums.length < 3) return max;
    else {
        for (i = 1; i < nums.length; i++) {
            if (max > nums[i]) {
                count++;
                max = nums[i];
            }
            if (count == 3) break;
        }
        if (count < 3) return nums[0];
        return max;
    }
}

console.log(solution([3, 2, 1])); //1
console.log(solution([1, 1, 2]))//2
console.log(solution([1, 2, 3, 4, 5, 2]));//1