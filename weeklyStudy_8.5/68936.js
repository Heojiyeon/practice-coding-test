function solution(arr) {
    let result = [0, 0];

    let quad1 = [];
    let quad2 = [];
    let quad3 = [];
    let quad4 = [];

    function forSlice(targetNum, row) {
        let col1, col2;
        for (i = 0; i < row.length; i++) {
            let currRow = row[i];
            col1 = currRow.slice(0, targetNum);
            col2 = currRow.slice(targetNum);
        }
        return col1, col2;
    }

    function checkArr(arr) {
        let targetNum = arr.length / 2;
        console.log("target number is ", targetNum);
        if (targetNum == 1) return arr;
        let row1 = arr.slice(0, targetNum);
        let row2 = arr.slice(targetNum);
        // console.log("row1", row1);
        // console.log("row2", row2);
        quad1, quad2 = forSlice(targetNum, row1);
        for (i = 0; i < row2.length; i++) {
            let currRow = row2[i];
            let col1 = currRow.slice(0, targetNum);
            let col2 = currRow.slice(targetNum);
            quad3.push(...col1);
            quad4.push(...col2);
        }
        console.log("quad1", quad1);
        console.log("quad2", quad2);
        console.log("quad3", quad3);
        console.log("quad4", quad4);
    }

    checkArr(arr);
}


// console.log(solution([
//     [1, 1, 0, 0],
//     [1, 0, 0, 0],
//     [1, 0, 0, 1],
//     [1, 1, 1, 1]])); //[4, 9]

console.log(solution([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1]])); //[10, 15]