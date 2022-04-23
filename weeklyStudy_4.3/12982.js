function selectDepartment(count, d) {
    let selected = [];
    for (i = 0; i < d.length; i++) {
        selected.push(d[i]);
        if (selected.length == count) break;
    }
    return selected;
}

function solution(d, budget) {
    let answer;
    if (d.reduce((a, b) => a + b) == budget) return answer = d.length;
    else {
        d.sort((a, b) => a - b);
        let result;
        let count = d.length - 1;
        console.log("count", count);
        // 선택할 수 있는 부서 개수 = count
        result = selectDepartment(count, d);
        console.log("result", result);
        let sum = result.reduce((a, b) => a + b);
        if (sum > budget) {
            console.log("too big");
            count--;
            result = selectDepartment(count, d);
            console.log("changed", result);
        }
        else if (sum < budget) console.log("too small");
        // if (result.reduce((a, b) => a + b) > budget) {
        //     count--;
        //     console.log(count);
        //     for (i = 0; i < d.length; i++) {
        //         result.push(d[i]);
        //         if (result.length == count) break;
        //     }
        //     console.log(result);
        // }

    }
}
console.log(solution([1, 3, 2, 5, 4], 9)); //3
// console.log(solution([2, 2, 3, 3], 10)); //4