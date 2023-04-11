function solution(citations) {
    let result = 0;
    let maxCit = citations.sort((a, b) => a - b)[citations.length - 1];
    console.log(maxCit);

    for (i = 0; i < maxCit; i++) {
        let quoted = 0;
        let unquoted = 0;
        let currH = i;
        console.log(currH);
        for (j = 0; j < citations.length; j++) {
            if (citations[j] >= currH) quoted++;
            else if (citations[j] <= currH) unquoted++;
        }
        console.log("currH", currH, "quoted", quoted, "unquoted", unquoted);
        if (quoted >= currH && unquoted <= currH) {
            if (result == 0) result = currH;
            else if (result != 0 && result < currH) result = currH;
            console.log("result", result);
        }
    }
    return result;
}

// function solution(citations) {
//     for (i = 0; i < citations.length; i++) {
//         let currNum = citations[i];
//         let idx = 0;
//         for (j = 0; j < citations.length; j++) {
//             if (currNum > citations[j]) {
//                 idx++;
//                 citations = swap(i, idx, citations);
//             }
//             console.log(currNum, citations);
//         }
//     }
// }

function swap(i, j, arr) {
    let tmp = arr[j];
    arr[j] = arr[i];
    arr[i] = tmp;
    return arr;
}

console.log(solution([3, 0, 6, 1, 5])); //3