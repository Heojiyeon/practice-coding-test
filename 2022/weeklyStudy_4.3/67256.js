function solution(numbers, hand) {
    const leftSide = [1, 4, 7, 10];
    const rightSide = [3, 6, 9, 12];
    let answer = '';
    let currLeft = leftSide[3];
    let currRight = rightSide[3];

    for (i = 0; i < numbers.length; i++) {
        let currNum = numbers[i];
        console.log(currNum);
        if (leftSide.includes(currNum)) {
            answer += 'L';
            currLeft = currNum;
            console.log("currLeft", currLeft);
            console.log("currRight", currRight);
            console.log("answer", answer);
        }
        else if (rightSide.includes(currNum)) {
            answer += 'R';
            currRight = currNum;
            console.log("currLeft", currLeft);
            console.log("currRight", currRight);
            console.log("answer", answer);
        }
        else {
            if (currNum == 0) {
                currNum = 11;
                console.log("Im 0 but now Im ", currNum);
            }

            if (answer.length == 0) {
                hand == "right" ? answer += "R" : answer += "L";
                console.log("answer's length = 0, answer: ", answer);
            } else {
                let a = Math.abs(currNum - currLeft);
                let b = Math.abs(currNum - currRight);
                console.log("currLeft", currLeft);
                console.log("currRight", currRight);
                console.log("왼쪽과의 차이", a, "오른쪽과의 차이", b);
                if ((a == 1 || a == 3) && b != 1 && b != 3) {
                    answer += "L";
                    currLeft = currNum;
                    console.log("left win, ", answer);
                } else if ((b == 1 || b == 3) && a != 1 && a != 3) {
                    answer += "R";
                    currRight = currNum;
                    console.log("right win, ", answer);
                }
                else if ((a == 1 || a == 3) && (b == 1 || b == 3)) {
                    if (hand == "right") {
                        answer += "R";
                        currRight = currNum;
                    } else {
                        answer += "L";
                        currLeft = currNum;
                    }
                    console.log("same, ", answer);
                }
                else if ((a == 2 || a == 4) && b != 2 && b != 4) {
                    answer += "L";
                    currLeft = currNum;
                    console.log("left win, ", answer);
                }
                else if ((b == 2 || b == 4) && a != 2 && a != 4) {
                    answer += "R";
                    currRight = currNum;
                    console.log("right win, ", answer);
                }
                else if ((a == 2 || a == 4) && (b == 2 || b == 4)) {
                    if (hand == "right") {
                        answer += "R";
                        currRight = currNum;
                    } else {
                        answer += "L";
                        currLeft = currNum;
                    }
                    console.log("same, ", answer);
                }
                else if (a > b) {
                    answer += "R";
                    currRight = currNum;
                    console.log("right win, ", answer);
                }
                else if (a < b) {
                    answer += "L";
                    currLeft = currNum;
                    console.log("left win, ", answer);
                }
                else if (a == b && hand == "left") {
                    answer += "L";
                    currLeft = currNum;
                    console.log("left win, ", answer);
                }
                else if (a == b && hand == "right") {
                    answer += "R";
                    currRight = currNum;
                    console.log("right win, ", answer);
                }

            }
        }
    }
    console.log(answer);
}

//console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
//"LRLLLRLLRRL"
//console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
//"LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
// "LLRLLRLLRL"