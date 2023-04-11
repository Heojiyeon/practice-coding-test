// 최대 힙 구조로 변경
function heapSort(arr) {
    const size = arr.length;
    for (i = size - 1; i >= 0; i--) {
        let parent = arr[i];
        let leftChild = arr[(i * 2) + 1];
        let rightChild = arr[(i * 2) + 2];
    }
}

console.log(heapSort([6, 2, 3, 7, 1])); // [1, 2, 3, 6, 7]