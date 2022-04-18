/*
function solution(s) {
    let arr = [];
    for (i = 0; i < s.length; i++) {
        arr.push(s[i]);
    }
    arr.reverse();
    console.log(arr);

    let tmp = '';

    for (j = 0; j < arr.length; j++) {
        if (arr[j] === arr[j].toUpperCase()) {
            tmp += arr[j];
            console.log(tmp);
            arr.splice(j, 1);
            console.log(arr);
        }
    }
    arr.push(tmp);
    return arr.join('');
}

*/

// 문자열 내림차순으로 배치하기
function solution(s) {
    return s.split('').sort().reverse().join('');

}

//console.log(solution("Abcdefg"));
//"gfedcbA"
//console.log(solution("ftZrca"));
//"acrtfZ"
console.log(solution("FbswDbAa"));
//"abwsbADF";