function solution(board, moves) {
    let count = 0;
    let result = [];

    moves.forEach((move) => {
        move = move - 1;
        for (i = 0; i < board.length; i++) {
            if (board[i][move] != 0) {
                let curr = board[i][move];
                if (result[result.length - 1] == curr) {
                    result.pop();
                    count += 2;
                }
                else result.push(curr);
                board[i][move] = 0;
                break;
            }
        }
    });
    return count;
}

console.log(solution(
    [[0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]],
    [1, 5, 3, 5, 1, 2, 1, 4])); // 4