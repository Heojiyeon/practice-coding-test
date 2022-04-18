function solution(numbers, hand) {
    const key = [
        [1, 4, 7, "*"],
        [2, 5, 8, 0],
        [3, 6, 9, "#"]
    ];

    const leftSide = key[0];
    const midSide = key[1];
    const rightSide = key[2];

    let currLeft = leftSide[3];
    let currRight = rightSide[3];

    let a = 3;
    let b = 3;
    let c;

    let answer = '';

    for (i = 0; i < numbers.length; i++) {
        let currNum = numbers[i];
        if (leftSide.includes(currNum)) {
            answer += 'L';
            a = leftSide.indexOf(currNum);
            currLeft = key[0][a];
        }
        else if (rightSide.includes(currNum)) {
            answer += 'R';
            b = rightSide.indexOf(currNum);
            currRight = key[2][b];
        }
        else if (midSide.includes(currNum)) {
            c = midSide.indexOf(currNum);
            currMid = key[1][c];

            let leftGap, rightGap;

            if (!midSide.includes(currLeft) && !midSide.includes(currRight)) {
                leftGap = 1 + Math.abs(c - a);
                rightGap = 1 + Math.abs(c - b);
            }
            else if (midSide.includes(currLeft) && !midSide.includes(currRight)) {
                a = midSide.indexOf(currLeft);
                leftGap = Math.abs(c - a);
                rightGap = 1 + Math.abs(c - b);
            }
            else if (!midSide.includes(currLeft) && midSide.includes(currRight)) {
                b = midSide.indexOf(currRight);
                leftGap = 1 + Math.abs(c - a);
                rightGap = Math.abs(c - b);
            }
            else if (midSide.includes(currLeft) && midSide.includes(currRight)) {
                a = midSide.indexOf(currLeft);
                b = midSide.indexOf(currRight);
                leftGap = Math.abs(c - a);
                rightGap = Math.abs(c - b);
            }

            if (leftGap == rightGap) {
                if (hand == "right") {
                    answer += "R";
                    currRight = key[1][c];
                } else {
                    answer += 'L';
                    currLeft = key[1][c];
                }
            }
            else {
                if (leftGap < rightGap) {
                    answer += 'L';
                    currLeft = key[1][c];
                }
                else if (leftGap > rightGap) {
                    answer += 'R';
                    currRight = key[1][c];
                }
            }
        }
    }
    return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
//"LRLLLRLLRRL"
//console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
//"LRLLRRLLLRR"
//console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
// "LLRLLRLLRL"