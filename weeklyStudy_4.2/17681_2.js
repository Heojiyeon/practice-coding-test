function calBinary(n, arr) {
    let resultArr = [];

    arr.forEach((e) => {
        let curr = e.toString(2);

        if (curr.length < n) {
            let count = n - curr.length;
            for (i = count; i > 0; i--) {
                curr = '0' + curr;
                count--;
            }
        }
        resultArr.push(curr);
    });

    return resultArr;
}

function printHash(arr1, arr2) {
    let resultHash = [];
    let resultString = '';

    for (i = 0; i < arr1.length; i++) {
        let currArr1 = arr1[i];
        let currArr2 = arr2[i];
        for (j = 0; j < currArr1.length; j++) {
            currArr1[j] == 0 && currArr2[j] == 0 ? resultString += " " : resultString += "#";
        }
        resultHash.push(resultString);
        resultString = '';
    }
    return resultHash;
}

function solution(n, arr1, arr2) {
    let result1 = calBinary(n, arr1);
    let result2 = calBinary(n, arr2);

    return printHash(result1, result2);
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
// ["#####","# # #", "### #", "# ##", "#####"]