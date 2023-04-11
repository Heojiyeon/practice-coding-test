function cal(num) {
    let answer = [];
    for (i = 1; i <= num; i++) {
        if (num % i == 0) answer.push(i);
    }
    return answer;
}

function solution(n, m) {
    let result = [];

    let min, max;

    const answer = cal(n);
    const answer2 = cal(m);

    console.log(answer, answer2);

    for (i = 0; i < answer2.length; i++) {
        for (j = 0; j < answer.length; j++) {
            if (answer2[i] == answer[j]) {
                min = answer2[i];
            }
        }
    }
    max = min * (n / min) * (m / min);
    result.push(min, max);

    console.log(result);
}

//solution(4, 18);
//solution(9, 2);
solution(8, 4);
