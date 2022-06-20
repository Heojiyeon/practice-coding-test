function solution(p) {
    let u = '';
    let v = '';

    let result = '';

    let countLeft = 0;
    let countRight = 0;

    let uCheck = false;
    let vCheck = false;

    if (p.length == 0) return result;

    for (i = 0; i < p.length; i++) {
        if (p[i] == '(') countLeft++;
        else countRight++;
        u += p[i];
        if (countLeft == countRight) break;
    }
    v = p.slice(u.length);

    console.log("균형잡힌 문자열 u: ", u);
    console.log("나머지 문자열 v: ", v);

    uCheck = checkCorrect(u);
    vCheck = checkCorrect(v);

    console.log("u: ", uCheck);
    console.log("v: ", vCheck);

    if (uCheck && vCheck) result = u + v;

    if (!vCheck) {
        result += u;
        // v = solution(v);
        result += solution(v);
    }
    else if (!uCheck) {
        u = '(' + solution(v) + ')' + reverseStr(u);
        result += u;
    }
    // result = u.concat(...v);
    console.log("u 바뀐거임", u);
    console.log("v 바뀐거임", v);
    // console.log(v.concat(...u));
    // result = v.concat(...u);
    // console.log("찐 최종", result);
    // return result;
    return result;
}

function reverseStr(str) {
    console.log("바꿀라고 들어온 str", str);
    let reverseResult = '';
    str = str.slice(1, str.length - 1);
    console.log("앞뒤 짜른 str", str);
    for (i of str) {
        if (i == '(') reverseResult += ')';
        else reverseResult += '(';
    }
    console.log(reverseResult);
    return reverseResult;
}

function checkCorrect(str) {
    let correct = true;
    let curr = '';
    if (str[0] == ')') return !correct;

    for (i = 0; i < str.length; i++) {
        if (str[i] == '(' && str[i + 1] == ')') {
            let left = str.slice(0, i);
            let right = str.slice(i + 2);
            curr = left.concat(right);
            break;
        }
        // else return !result;
    }
    if (curr.length != 0) {
        console.log(curr);
        correct = solution(curr);
    }
    return correct;
}

console.log(solution("(()())()")); //"(()())()"
console.log("---------------");
console.log(solution(")(")); //"()"
console.log("---------------");
console.log(solution("()))((()")); //"()(())()"
console.log("---------------");
console.log(solution("))()((")); //"()()()" 