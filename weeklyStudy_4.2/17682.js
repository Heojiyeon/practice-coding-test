// 점수 계산 함수
function calculator(rounds) {
    console.log("Im in calculator with ", rounds);
    let prevScore = 0;
    let resultScore = 0;
    let answer;

    rounds.forEach((e) => {
        let currScore = 0;

        for (i = 0; i < e.length; i++) {

            if (e[i] * 1 || e[i] == 0) {
                currScore += e[i];
                currScore = currScore * 1;
                console.log(currScore);
                continue
            }
            if (e[i]) {
                switch (e[i]) {
                    case "S":
                        currScore = currScore;
                        break;
                    case "D":
                        currScore = currScore * currScore;
                        break;
                    case "T":
                        currScore = currScore * currScore * currScore;
                        break;
                    default:
                        break;
                }
            }
            if (e[i]) {
                switch (e[i]) {
                    case "*":
                        if (prevScore != 0) {
                            currScore = (prevScore * 2) + (currScore * 2);
                            resultScore = currScore;
                        } else currScore = currScore * 2;
                        break;
                    case "#":
                        currScore = (-1) * currScore;
                        break;

                    default:
                        break;
                }
            }
        }
        if (prevScore == 0) prevScore = currScore;
        else {
            if (resultScore != 0) {
                prevScore = resultScore;
                resultScore = 0;
            }
            else prevScore = prevScore + currScore;
        }

    });
    return prevScore;

    // for (j = 0; j < round.length; j++) {
    //     // 점수
    //     if (round[j] * 1 || round[j] == 0) {
    //         score += round[j];
    //         score = score * 1;
    //         continue
    //     }
    //     // 보너스
    //     else if (round[j] == "S" || round[j] == "D" || round[j] == "T") {
    //         switch (round[j]) {
    //             case "S":
    //                 score = score;
    //                 break;
    //             case "D":
    //                 score = score * score;
    //                 break;
    //             case "T":
    //                 score = score * score * score;
    //                 break;

    //             default:
    //                 break;
    //         }
    //         continue
    //     }
    //     // 옵션
    //     else if (round[j] == "#" || round[j] == "*") {
    //         switch (round[j]) {
    //             case "#":
    //                 score = score * (-1);
    //                 break;
    //             //     case "*":
    //             //         prevResult = prevResult * 2;
    //             //         score = score * 2;
    //             //         score = score + prevResult;
    //             //         break;

    //             default:
    //                 break;
    //         }
    //         console.log("real total score is ", score);
    //     }
    // }

}

function solution(dartResult) {
    let currRound = '';
    let rounds = [];
    let answer;

    for (i = 0; i < dartResult.length; i++) {
        if (currRound.length == 0) currRound += dartResult[i];
        else {
            if (dartResult[i] * 1) {
                rounds.push(currRound);
                currRound = '';
                currRound += dartResult[i];
            }
            else currRound += dartResult[i];
        }
        if (i == (dartResult.length - 1)) rounds.push(currRound);
    }

    answer = calculator(rounds);
    return answer;
    // for (i = 0; i < dartResult.length; i++) {
    //     if (currRound.length == 0) {
    //         currRound += dartResult[i];
    //     }
    //     else {
    //         if (dartResult[i] * 1) {
    //             calculator(currRound);
    //             currRound = '';
    //             currRound += dartResult[i];
    //         } else {
    //             currRound += dartResult[i];
    //         }
    //     }
    //     if (i == (dartResult.length - 1)) {
    //         calculator(currRound);
    //     }
    // }
}

// console.log(solution("1S2D*3T")); //37
console.log(solution("1D2S#10S")); //9