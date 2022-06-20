let merge = function (nums1, m, nums2, n) {
    let countNums1 = 1;
    for (i = 0; i < nums1.length; i++) {
        countNums1++;
        let countNums2 = 1;
        if (countNums1 > m) {
            console.log(i);
            nums1 = nums1.splice(i, 1, nums2[countNums2]);
            if (countNums2 == n) return nums1;
            countNums2++;
        }
    }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); //[1,2,2,3,5,6]
console.log(merge([1], 1, [0], 0)); //[1]