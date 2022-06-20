var majorityElement = function (nums) {
    let majority = nums.length / 2;
    for (i = 0; i < nums.length; i++) {
        let currNum = nums[i];
        let count = 0;
        for (j = i; j < nums.length; j++) {
            if (currNum == nums[j]) count++;
            if (count > majority) return currNum;
        }
    }
};
console.log(majorityElement([3, 2, 3])); //3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); //2