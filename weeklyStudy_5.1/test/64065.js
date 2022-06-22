// 튜플의 순서는 유의미하다.
// 튜플 원소의 개수는 유한함.
// 중복이 없는 튜플은 '{' '}'를 이용해 표현
// 튜플을 표현하는 집합이 주어질 때, 그 튜플이 무엇인지 배열에 담아 리턴
function solution(s) {
    let arr = [];
    let currNum = '';

    let result = [];
    let countResult = [];

    // 주어진 문자열에 나타나는 모든 숫자 배열 구하기
    for (i = 0; i < s.length; i++) {
        if (s[i] * 1 || s[i] == 0) currNum += s[i];
        else {
            arr.push(currNum);
            currNum = '';
        }
    }
    console.log("arr", arr);
    const set = new Set(arr);

    set.forEach((e) => {
        if (e != '') result.push(e);
    });

    console.log("result", result);

    // 모든 숫자에 대한 출현 횟수 계산
    for (i = 0; i < result.length; i++) {
        let curr = result[i];
        let count = 0;

        for (j = 0; j < arr.length; j++) {
            if (curr == arr[j]) {
                count++;
            }
        }
        console.log("count", count);
        countResult.push(count);
    }
    console.log("countResult", countResult);

    console.log("result", result, "countResult", countResult);
    // 출현 횟수에 따른 배열 정렬 후 리턴
    let currCountMax;
    let a2 = [];

    for (i = 0; i < result.length; i++) {
        currCountMax = Math.max(...countResult);
        a2.push(result[countResult.indexOf(currCountMax)] * 1)
        countResult[countResult.indexOf(currCountMax)] = -1
    }
    console.log(a2);
}


// console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")); //[2, 1, 3, 4]
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")); //[2,1,3,4]
// console.log(solution("{{20,111},{111}}")); // [111, 20]