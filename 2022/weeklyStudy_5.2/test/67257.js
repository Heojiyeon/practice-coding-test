function calculator(handleExpression, operatorP) {
    let exp = handleExpression;
    operatorP.forEach((currOp) => {
        while (exp.includes(currOp)) {
            for (i = 0; i < exp.length; i++) {
                let currCal = '';
                if (currOp == exp[i]) {
                    currCal = exp.slice(i - 1, i + 2).join('');
                    let prevExp = exp.slice(0, i - 1);
                    let nextExp = exp.slice(i + 2);
                    exp = exp.slice(i + 2);
                    exp = [...prevExp, eval(currCal), ...nextExp];
                    currCal = '';
                }
            }
        }
    });
    return exp[0];
}

// 연산자 우선순위 순열 계산 함수
function getPermutations(arr, selectNumber) {
    let result = [];
    if (selectNumber == 1) return arr.map((value) => [value]);
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutations(rest, selectNumber - 1);
        const attatched = permutations.map((permutation) => [fixed, ...permutation]);
        result.push(...attatched);
    });
    return result;
}

function solution(expression) {
    // let handleExpression = [];
    let operator = [];
    let currNum = '';

    // for (i = 0; i < expression.length; i++) {
    //     if (expression[i] * 1 || expression[i] == 0) {
    //         currNum += expression[i];
    //         if (i == expression.length - 1) handleExpression.push(currNum * 1);
    //     }
    //     else {
    //         handleExpression.push(currNum * 1);
    //         handleExpression.push(expression[i]);
    //         if (!operator.includes(expression[i])) operator.push(expression[i]);
    //         currNum = '';
    //     }
    // }

    const handleExpression = expression.split(/(\D)/);
    console.log(handleExpression);

    // 연산자 우선 순위 모든 경우 구하기
    let operatorP = [];
    operatorP = getPermutations(operator, operator.length);

    // 가장 큰 값 리턴하기
    let currMax = 0;
    operatorP.forEach((currOp) => {
        let currAnswer = Math.abs(calculator(handleExpression, currOp));
        if (currMax == 0) currMax = currAnswer;
        else {
            if (currMax < currAnswer) currMax = currAnswer;
        }
    })
    return currMax;
}

// console.log(solution("100-200*300-500+20")); // 60420
console.log(solution("50*6-3*2")); // 300
// (1) * > - , 294
// (2) - > * , 300