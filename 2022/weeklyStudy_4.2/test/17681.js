// 두 지도에서 하나라도 벽이면 전체 지도에서도 벽
// 두 지도에서 모두 공백이면 전체 지도에서도 공백
// 지도는 n x n (정사각형 배열 형태)
// 공백 = 0, 벽 = 1
// 주어진 값의 배열은 행의 이진수 값
// 원래의 지도 문자열 배열로 출력하기

// 이진수 계산 함수
function calBinary(n, arr) {
    let result = [];
    let answer = [];

    arr.forEach((e1) => {
        currNum = e1;
        while (currNum != 1) {
            upVal = Math.floor(currNum / 2);
            downVal = currNum % 2;
            currNum = upVal;
            answer.push(downVal);
        }
        answer.push(currNum);

        if (answer.length < n) {
            let count = n - answer.length;
            while (count != 0) {
                answer.push(0);
                count--;
            }
        } else {
            answer;
        }
        answer.reverse();
        result.push(answer);
        answer = [];
    });
    return result;
}

function printHash(arr1, arr2) {
    let curr_arr1 = [];
    let curr_arr2 = [];
    let result_arrs = [];
    let resultMap = [];

    for (i = 0; i < arr1.length; i++) {
        curr_arr1 = arr1[i];
        curr_arr2 = arr2[i];
        for (j = 0; j < curr_arr1.length; j++) {
            curr_arr1[j] == 0 && curr_arr2[j] == 0 ? result_arrs.push(" ") : result_arrs.push("#");
        }
        resultMap.push(result_arrs);
        result_arrs = [];
    }
    return resultMap;

}

function solution(n, arr1, arr2) {
    let resultArr1 = [];
    let resultArr2 = [];
    let resultArr = [];
    let realResult = [];
    let currResult = '';

    resultArr1 = calBinary(n, arr1);
    resultArr2 = calBinary(n, arr2);

    resultArr = printHash(resultArr1, resultArr2);

    for (k = 0; k < resultArr.length; k++) {
        currResult = resultArr[k].join('');
        realResult.push(currResult);
    }
    return realResult;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
// ["#####","# # #", "### #", "# ##", "#####"]