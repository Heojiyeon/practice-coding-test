function divide(arr) {
    let mid = Math.floor(arr.length / 2);

    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    if (arr.length <= 1) return arr;

    console.log(left, right);

    return merge(divide(left), divide(right));

}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            result.push(right[j]);
            console.log(result);
            j++;
        }
        else {
            result.push(left[i]);
            console.log(result);
            i++;
        }
    }
    if (i == left.length) {
        result = result.concat(...right.slice(j));
    }
    else {
        result = result.concat(...left.slice(i));
    }
    return result;
}
// 1. arr크기가 1보다 작거나 같을 때까지 나눔
// 2. 다 나눴으면 한쪽씩 정렬
// [0, 1, 93, 8] [2, 4]
// (1) [0, 1, 93] [8]
// [0, 1] [93]
// [0] [1]
// [0, 1] [93]
// [0, 1, 93]
// [0, 1, 8, 93]
//(2) [2][4]
//[2, 4]
//(1),(2) merge => [0, 1, 2, 4, 8, 93]

console.log(divide([0, 1, 93, 8, 2, 4]));