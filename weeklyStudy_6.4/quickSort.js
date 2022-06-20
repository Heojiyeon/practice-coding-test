// // 주어진 배열에 따른 정렬된 피벗 인덱스 리턴
// function pivots(arr, start = 0, end = arr.length - 1) {
//     // swap 함수
//     function swap(arr, i, j) {
//         let tmp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = tmp;
//     }
//     let pivot = arr[start];
//     let swapIdx = start;

//     for (i = start + 1; i <= end; i++) {
//         if (pivot > arr[i]) {
//             swapIdx++;
//             swap(arr, swapIdx, i);
//         }
//     }
//     swap(arr, start, swapIdx);
//     return swapIdx;
// }

// function quickSort(arr, left = 0, right = arr.length - 1) {
//     if (left < right) {
//         let pivotIdx = pivots(arr, left, right);
//         quickSort(arr, left, pivotIdx - 1);
//         quickSort(arr, pivotIdx + 1, right);
//     }
//     return arr;
// }


function pivots(arr, start = 0, end = arr.length - 1) {
    let swapIdx = start;
    let pivot = arr[start];

    for (i = start + 1; i <= end; i++) {
        console.log("end", i);
        if (pivot > arr[i]) {
            swapIdx++;
            [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
        }
    }
    [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivots(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}



console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3])); //3
// console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

// 4 8 2 1 5 7 6 3
// 3 2 1 4 5 7 6 8
