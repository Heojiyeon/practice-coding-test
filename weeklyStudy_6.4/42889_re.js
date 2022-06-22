function solution(N, stages) {
    let map = new Map();
    let i = 1;
    while (i <= N) {
        map.set(i, calRate(i, stages));
        i++;
    }
    console.log(map);
    const result = new Map([...map].sort((a, b) => b[1] - a[1]));
    console.log(result);
    return [...result.keys()];
}

function calRate(stage, stages) {
    let upper = 0;
    let lower = 0;

    for (i = 0; i < stages.length; i++) {
        if (stage <= stages[i]) {
            if (stage == stages[i]) upper++;
            lower++;
        }
    }
    return upper / lower;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));//[3,4,2,1,5]