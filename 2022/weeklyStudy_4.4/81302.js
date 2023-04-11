// 맨해튼 거리 계산 함수
function manhattan(x, y) {
    let manhattan = Math.abs(x[0] - y[0]) + Math.abs(x[1] - y[1]);
    return manhattan;
}

function checkPartition(place) {
    let answer = true;

    // 1. P 위치 찾기
    let persons = [];
    for (i = 0; i < place.length; i++) {
        let currRow = place[i];
        for (j = 0; j < currRow.length; j++) {
            let currCol = currRow[j];
            if (currCol == "P") persons.push([i, j]);
        }
    }
    console.log("persons", persons);

    // 2. 맨해튼 거리 계산하기
    for (i = 0; i < persons.length; i++) {
        for (j = i + 1; j < persons.length; j++) {
            console.log(persons[i], persons[j]);
            let result = manhattan(persons[i], persons[j]);
            console.log(result);
            if (result == 2) {
                console.log("be careful!", persons[i], persons[j]);
                // 같은 행
                if (persons[i][0] == persons[j][0]) {
                    let sameRow = persons[i][0];
                    let gapCol = persons[i][1] + 1;
                    console.log("sameRow", sameRow, "gapCol", gapCol);
                    console.log("Are you partition?", place[sameRow][gapCol]);
                    if (place[sameRow][gapCol] == "O") return (!answer * 1);
                }
                // 같은 열
                else if (persons[i][1] == persons[j][1]) {
                    let samCol = persons[i][1];
                    let gapRow = persons[i][0] + 1;
                    console.log("samCol", samCol, "gapRow", gapRow);
                    console.log("Are you partition?", place[gapRow][samCol]);
                    if (place[gapRow][samCol] == "O") return (!answer * 1);
                }
                // 행과 열 모두 다를 경우
                else {
                    let check1 = place[persons[i][0]][persons[j][1]];
                    let check2 = place[persons[j][0]][persons[i][1]];
                    console.log("check1", check1, "check2", check2);
                    if (check1 == "O" || check2 == "O") return (!answer * 1);

                }
            }
            else if (result == 1) {
                console.log("거리두기 실패!");
                return (!answer * 1);
            }
        }
    }
    return answer * 1;
}

function solution(places) {
    let checked = [];
    places.forEach((place) => {
        checked.push(checkPartition(place));
    });
    return checked;
}

// console.log(solution(["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"])); //1
// console.log("---------");
// console.log(solution(["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"])); //0
// console.log("---------");
// console.log(solution(["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"])); //1
// console.log("---------");
// console.log(solution(["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"])); //1
// console.log("---------");
// console.log(solution(["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"])); //1
// console.log("---------");
// console.log(solution(["POOOP", "XPOXX", "OXXPX", "OOXOX", "POXXP"])); //0
// console.log(checkPartition(["OPOPO", "OOOOO", "OOOOO", "OOOOO", "OOOOO"])); // 0
console.log(checkPartition(["PXOOO", "OOOOO", "PXOOO", "OOOOO", "OOOPO"])); //0

// console.log(solution(
//     [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
//     ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
//     ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
//     ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
//     ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]));
    // [1, 0, 1, 1, 1]