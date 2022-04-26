// 1.  점수, 보너스 계산은 한번에 진행하여
// 2. 각 라운드 점수 저장
// 3. 옵션을 다루는 함수 따로 생성

function calculator(rounds) {
    let scores = [];
    let curr, curr1, curr2;

    for (i = 0; i < rounds.length; i++) {
        if (rounds[i] * 1 || rounds[i] == 0) {
            scores.push(rounds[i]);
        }
        if (rounds[i] == '*') {
            if (scores.length >= 2) {
                curr1 = scores[scores.length - 1] * 2;
                curr2 = scores[scores.length - 2] * 2;
                scores.pop();
                scores.pop();
                scores.push(curr2, curr1);
                console.log(scores);
            } else {
                curr = scores[scores.length - 1] * 2;
                scores.pop();
                scores.push(curr);
            }
        }
        else if (rounds[i] == '#') {
            curr = scores[scores.length - 1] * (-1);
            scores.pop();
            scores.push(curr);
        }
    }
    return scores.reduce((a, b) => a + b);
}

function solution(dartResult) {
    let currRound = '';
    let rounds = [];
    let result;


    for (i = 0; i < dartResult.length; i++) {
        if (dartResult[i] * 1) currRound += dartResult[i];
        else if (dartResult[i] == '0') currRound += dartResult[i];

        else if (dartResult[i] == 'S' || dartResult[i] == 'D' || dartResult[i] == 'T') {
            if (currRound.length != 0) {
                currRound *= 1;

                if (dartResult[i] == 'S') currRound = currRound;
                else if (dartResult[i] == "D") currRound = currRound * currRound;
                else currRound = currRound * currRound * currRound;
            }
            rounds.push(currRound);
            currRound = '';
        }

        else if (dartResult[i] == '*' || dartResult[i] == '#') {
            rounds.push(dartResult[i]);
        }
    }

    result = rounds.find((e) => e == "*" || e == "#") ?
        calculator(rounds) : rounds.reduce((a, b) => a + b);

    return result;
}

console.log(solution("1S2D*3T*")); //72
// console.log(solution("10S2D*3T")); // 55
// console.log(solution("1D2S#10S")); // 9
// console.log(solution("1D2S0T")); // 3
// console.log(solution("1S*2T*3S")); // 23
// console.log(solution("1D#2S*3S")); // 5
// console.log(solution("1T2D3D#")); // -4
// console.log(solution("1D2S3T*")); // 59
// console.log(solution("0S3D2T")); //17