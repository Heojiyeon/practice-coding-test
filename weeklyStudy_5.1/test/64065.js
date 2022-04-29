// 튜플의 순서는 유의미하다.
// 튜플 원소의 개수는 유한함.
// 중복이 없는 튜플은 '{' '}'를 이용해 표현
// 튜플을 표현하는 집합이 주어질 때, 그 튜플이 무엇인지 배열에 담아 리턴
function solution(s) {
    let arr = [];
    let currNum = '';

    let result = [];
    let countResult = [];

    for (i = 0; i < s.length; i++) {
        if (s[i] * 1 || s[i] == 0) currNum += s[i];
        else {
            arr.push(currNum);
            currNum = '';
        }
    }
    const set = new Set(arr);

    set.forEach((e) => {
        if (e != '') result.push(e);
    });

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
    // 카운트 리저트 값이 큰 순서대로 result 출력
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