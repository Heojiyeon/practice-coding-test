function calculator(rounds) {
    let prevScore = 0;
    let resultScore = 0;

    rounds.forEach((e) => {
        let currScore = 0;

        console.log(e);
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
                        } else {
                            currScore = currScore * 2;
                        }
                        break;
                    case "#":
                        currScore = (-1) * currScore;
                        break;

                    default:
                        break;
                }
            }
        }
        if (prevScore == 0) {
            prevScore = currScore;
        } else {
            if (resultScore != 0) {
                prevScore = resultScore;
                resultScore = 0;
            } else {
                prevScore = prevScore + currScore;
            }
        }
    });
    return prevScore;
}

function solution(dartResult) {
    let currRound = '';
    let rounds = [];
    let answer;

    for (i = 0; i < dartResult.length; i++) {
        if (currRound.length == 0) {
            currRound += dartResult[i];
        }
        else {
            if (dartResult[i] * 1) {
                rounds.push(currRound);
                currRound = '';
                currRound += dartResult[i];
            }
            else {
                currRound += dartResult[i];
            }
        }
        if (i == (dartResult.length - 1)) {
            rounds.push(currRound);
        }
    }
    answer = calculator(rounds);
    return answer;
}
console.log(solution("1D2S#10S")); //9
// console.log(solution("1S2D*3T")); //37
// console.log(solution("1D2S0T")); //3
// console.log(solution("1D2S3T*")); //59