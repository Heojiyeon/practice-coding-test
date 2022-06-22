function solution(nums1, nums2) {
    let result = [];
    nums1 = nums1.sort((a, b) => a - b);
    nums2 = nums2.sort((a, b) => a - b);

    for (i = 0; i < nums1.length; i++) {
        for (j = 0; j < nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                result.push(nums1[i]);
                nums2[j] = -1;
                console.log(nums2);
                break;
            }
        }
    }
    return result;
}

console.log(solution([1, 2, 2, 1], [2, 2])); //[2,2]
console.log(solution([4, 9, 5], [9, 4, 9, 8, 4]));// [4,9]