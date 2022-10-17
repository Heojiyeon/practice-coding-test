function solution(progresses, speeds) {
    let restDays = [];

    for (i = 0; i < progresses.length; i++) {
        let restDay = Math.ceil((100 - progresses[i]) / speeds[i]);
        restDays.push(restDay); //[7, 3, 9] [5, 10, 1, 1, 20, 1]
    }
    console.log(restDays);

    let result = [];

    function calculator(restDays) {
        if (restDays.length == 0) return result;
        let curr = restDays[0];
        let count = 1;
        if (restDays.length == 1) {
            result.push(count);
            return result;
        }
        for (i = 1; i < restDays.length; i++) {
            if (curr < restDays[i]) break;
            else count++;
        }
        for (j = count; j > 0; j--) {
            restDays.shift();
        }
        result.push(count);
        console.log("restDays", restDays);
        console.log("result", result);
        restDays = calculator(restDays);
    }
    calculator(restDays);
    return result;
}

console.log(solution([93, 30, 55], [1, 30, 5])); //[2,1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); //[1,3,2]