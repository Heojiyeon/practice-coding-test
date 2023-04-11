// 맨해튼 거리 (x1, y1), (x2, y2) => |x1 - x2| + |y1 - y2|
// 맨해튼 거리가 2이하가 되지 않도록 
// 바로 붙어서 앉기 불가능
// 거리 2라도 가능한 경우
// 자리 사이 파티션이 있는 경우 허용
// P = 응시자가 앉은 자리, O = 빈 테이블, X = 파티션
// 모든 응시자 거리두기 시 1 리턴, 아닐 경우 0 리턴

function solution(place) {
    // 1. 행렬로 변경
    let answer = [];
    let result = true;
    for (i = 0; i < place.length; i++) {
        let currRow = place[i];
        answer.push(currRow.split(''));
    }
    console.log(answer);
    // 2. 모든 자리를 돌며 하나라도 안되는 경우가 있을 때 바로 false 리턴
    for (j = 0; j < answer.length; j++) {
        let curr = answer[j];
        for (k = 0; k < curr.length; k++) {
            if (j > 0 && j < 4 && k > 0 && k < 4) {
                console.log(answer[j][k]);
                if (answer[j][k - 1] || answer[j][k + 1] || answer[j - 1][k] || answer[j + 1][k] == "P") {
                    return !result;
                }
                else if (answer[j - 1][k - 1] || answer[j - 1][k + 1] || answer[j + 1][k - 1] || answer[j + 1][k + 1] == "O") {
                    return !result;
                }
            }
            // 가장자리 4개의 면 계산
            else {
                if (j == 0 && k != 0 && k != 4) {

                }
            }
        }
    }
    return result;
}

// 우선 place 한 개만 계산해봄
console.log(solution(
    [
        "POOOP",
        "OXXOX",
        "OPXPX",
        "OOXOX",
        "POXXP"
    ])); //1 > 거리두기 성공



// console.log(solution(
//     [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
//     ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
//     ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
//     ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
//     ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]));
// [1, 0, 1, 1, 1];


// POOOP
// OXXOX
// OPXPX
// OOXOX
// POXXP