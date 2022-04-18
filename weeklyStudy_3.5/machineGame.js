function counting(arr) {
    let newArr = [];
    let count = 0;

    for (i = 0; i < arr.length; i++) {
        if (newArr.length == 0) {
            newArr.push(arr[i]);
        } else {
            if (newArr[newArr.length - 1] != arr[i]) {
                newArr.push(arr[i]);
            } else {
                newArr.pop();
                count += 2;
            }
        }
    }
    return count;
}

function solution(board, moves) {
    let arr = [];

    for (i = 0; i < moves.length; i++) {
        let curr = moves[i] - 1;
        for (j = 0; j < board.length; j++) {
            let answer = board[j][curr];
            if (answer != 0) {
                arr.push(answer);
                board[j].splice(curr, 1, 0);
                break;
            }
        }
    }
    return counting(arr);
}
console.log(solution(
    [[0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]],

    [1, 5, 3, 5, 1, 2, 1, 4]));