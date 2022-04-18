function calculator(rounds) {
    let round1, round2, round3;
    console.log(rounds);
    for (i = 0; i < 3; i++) {
        let currRound = rounds[i];
        let currScore = 0;
        console.log(currRound);
        for (j = 0; j < currRound.length; j++) {
            if (currRound[j] == 0) {
                currScore += currRound[j];
                currScore = currScore * 1;
            }
            else if (currRound[j] * 1 || currRound[j] == 0) {
                currScore += currRound[j];
                currScore = currScore * 1;

            }
            if (currRound[j] == "S" || "D" || "T") {
                switch (currRound[j]) {
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
            if (currRound[j] == "*" || "#") {
                switch (currRound[j]) {
                    case "*":
                        console.log("Im *");
                        if (i == 0) currScore = currScore * 2;
                        else if (i == 1) {
                            currScore = currScore * 2;
                            round1 = round1 * 2;
                        } else {
                            currScore = currScore * 2;
                            round2 = round2 * 2;
                        }
                        break;
                    case "#":
                        currScore = currScore * (-1);

                    default:
                        break;
                }
                console.log(currScore);
            }
        }
        if (i == 0) round1 = currScore;
        if (i == 1) round2 = currScore;
        if (i == 2) round3 = currScore;
    }
    console.log("round1: ", round1);
    console.log("round2: ", round2);
    console.log("round3: ", round3);
    return round1 + round2 + round3;
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

//console.log(solution("1S2D*3T")); //37
console.log(solution("1D2S#10S")); //9
console.log("---------------");
console.log(solution("1D2S0T")); //3
//console.log(solution("1S*2T*3S")); //23
