function solution(numbers, hand) {
    const keypad = [[1, 4, 7, '*'],
    [2, 5, 8, 0],
    [3, 6, 9, '#']];
    let currLeft, currRight;
    let leftGap = 0;
    let rightGap = 0;
    let result = '';

    for (currNum of numbers) {
        for (i = 0; i < keypad.length; i++) {
            let currIdx = keypad[i].indexOf(currNum);
            if (currIdx != -1) {
                if (i == 0) {
                    result += 'L';
                    currLeft = '0'
                }
                else if (i == 2) {
                    result += 'R';
                }
                else {

                }
            }
        }
    }
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
// "LRLLLRLLRRL"
// console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
// "LRLLRRLLLRR"
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
// "LLRLLRLLRL"