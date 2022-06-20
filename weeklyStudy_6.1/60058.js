function solution(p) {
    let u = '';
    let v = '';

    let countLeft = 0;
    let countRight = 0;

    for (i = 0; i < p.length; i++) {
        if (p[i] == '(') countLeft++;
        else countRight++;
        u += p[i];
        if (countLeft == countRight) break;
    }
    v = p.slice(u.length);

    console.log("균형잡힌 문자열 u: ", u);
    console.log("나머지 문자열 v: ", v);

    let uCheck = checkCorrect(u);
    let vCheck = checkCorrect(v);

    console.log("u: ", uCheck);
    console.log("v: ", vCheck);

    if (uCheck && vCheck) return p;
    else if (!uCheck && vCheck) {
        console.log("reverse: ", reverseStr(u, 1, u.length - 1));
        return '(' + v + ')' + reverseStr(u, 1, u.length - 1);
        // return '(' + v + ')' + u.slice(1, u.length - 1).split('').reverse().join('');
    }
    else if (uCheck && !vCheck) {
        let result = u + solution(v);
        console.log(result);
        return result;
    }
}

function reverseStr(str, a, b) {
    return str.slice(a, b).split('').reverse().join('');
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
// console.log(solution(")(")); //"()"
// console.log("---------------");
// console.log(solution("()))((()")); //"()(())()"