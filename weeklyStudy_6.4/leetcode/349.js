function solution(nums1, nums2) {
    let result = [];
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    for (n1 of set1) {
        for (n2 of set2) {
            if (n1 == n2) result.push(n1);
        }
    }
    return result;
}

console.log(solution([1, 2, 2, 1], [2, 2])); //[2]
console.log(solution([4, 9, 5], [9, 4, 9, 8, 4])); //[4, 9]