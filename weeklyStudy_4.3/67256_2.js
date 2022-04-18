function solution(numbers, hand) {
    /*
    const key = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ["*", 0, "#"]
    ];
    */
    const key2 = [
        [1, 4, 7, "*"],
        [2, 5, 8, 0],
        [3, 6, 9, "#"]
    ];

    const leftSide = key2[0];
    const midSide = key2[1];
    const rightSide = key2[2];

    let answer = '';
    let currLeft = leftSide[3];
    let currRight = rightSide[3];
    let currMid;

    console.log("currLeft", currLeft, "currRight", currRight);
    let a, b, c;
    a = 3;
    b = 3;

    for (i = 0; i < numbers.length; i++) {
        let currNum = numbers[i];
        console.log(currNum);
        if (leftSide.includes(currNum)) {
            answer += 'L';
            a = leftSide.indexOf(currNum);
            a_row = 0;
            currLeft = key2[0][a];
            console.log("left currIndex", a);
            console.log("currLeft1", currLeft);
            console.log("currRight1", currRight);
        }
        else if (rightSide.includes(currNum)) {
            answer += 'R';
            b = rightSide.indexOf(currNum);
            b_row = 2;
            currRight = key2[2][b];
            console.log("right currIndex", b);
            console.log("currLeft2", currLeft);
            console.log("currRight2", currRight);
        }
        else if (midSide.includes(currNum)) {
            c = midSide.indexOf(currNum);

            currMid = key2[1][c];
            c_row = 1;
            console.log("mid currIndex", c);
            console.log("currLeft3", currLeft);
            console.log("currRight3", currRight);
            console.log("currMid3", currMid);
            console.log("a", a, "b", b, "c", c);

            let leftGap, rightGap;

            if (!midSide.includes(currLeft) && !midSide.includes(currRight)) {
                leftGap = Math.abs(1 - 0) + Math.abs(c - a);
                rightGap = Math.abs(1 - 2) + Math.abs(c - b);
            }
            else if (midSide.includes(currLeft) && !midSide.includes(currRight)) {
                a = midSide.indexOf(currLeft);
                leftGap = Math.abs(c - a);
                rightGap = Math.abs(c_row - b_row) + Math.abs(c - b);
            }
            else if (!midSide.includes(currLeft) && midSide.includes(currRight)) {
                b = midSide.indexOf(currRight);
                leftGap = Math.abs(c_row - a_row) + Math.abs(c - a);
                rightGap = Math.abs(c - b);
            }
            else if (midSide.includes(currLeft) && midSide.includes(currRight)) {
                a = midSide.indexOf(currLeft);
                b = midSide.indexOf(currRight);
                leftGap = Math.abs(c - a);
                rightGap = Math.abs(c - b);
            }

            console.log("leftGap", leftGap, "rightGap", rightGap);

            if (leftGap == rightGap) {
                if (hand == "right") {
                    answer += "R";
                    currRight = key2[1][c];
                } else {
                    answer += 'L';
                    currLeft = key2[1][c];
                }
            }
            else {
                if (leftGap < rightGap) {
                    answer += 'L';
                    currLeft = key2[1][c];
                }
                else if (leftGap > rightGap) {
                    answer += 'R';
                    currRight = key2[1][c];
                }
            }
        }
        console.log("answer", answer);
        console.log("-----------");
    }
    console.log(answer);
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
//"LRLLLRLLRRL"
//console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
//"LRLLRRLLLRR"
//console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
// "LLRLLRLLRL"