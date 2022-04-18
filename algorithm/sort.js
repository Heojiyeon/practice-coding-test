// 선택정렬 구현
// function findMax(arr) {
//     for (i = 0; i < arr.length; i++) {
//         let minIdx = i;

//         for (j = i + 1; j < arr.length; j++) {
//             if (arr[minIdx] > arr[j]) {
//                 minIdx = j;
//             }
//         }
//         if (minIdx !== i) {
//             let tmp = arr[minIdx];
//             arr[minIdx] = arr[i];
//             arr[i] = tmp;
//         }
//     }
//     return arr;
// }

function selectionSort(array) {
    let maxIdx;
    for (i = array.length - 1; i >= 0; i--) {
        maxIdx = i;
        for (j = array.length - 2; j >= 0; j--) {
            if (array[maxIdx] < array[j]) {
                maxIdx = j;
            }
        }
        if (maxIdx != i) {
            let tmp = array[maxIdx];
            array[maxIdx] = array[i];
            array[i] = tmp;
        }
    }
    return array;
}

// console.log(findMax([2, 44, 5, 200, 9])); //[2, 5, 9, 44, 200]
console.log(selectionSort([2, 44, 5, 200, 9])); //[2, 5, 9, 44, 200]