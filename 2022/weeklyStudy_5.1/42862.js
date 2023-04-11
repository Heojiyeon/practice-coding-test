function solution(n, lost, reserve) {
    let result = n;
    lost.sort((a, b) => a - b); // 1, 2, 3
    reserve.sort((a, b) => a - b); // 2, 3, 4
    let realLost = [];

    for (i = 0; i < lost.length; i++) {
        if (reserve.includes(lost[i])) {
            reserve[reserve.findIndex((e) => e == lost[i])] = -1;
        }
        else realLost.push(lost[i]);
    }
    console.log("앙", reserve);
    console.log("잃어버린새끼들", realLost);
    for (i = 0; i < realLost.length; i++) {
        let currIdx;
        let currLost = realLost[i];
        // console.log(currLost);
        // if (reserve.includes(currLost)) {
        //     currIdx = reserve.findIndex((e) => e == currLost);
        //     reserve[currIdx] = -1;
        //     console.log(reserve);
        // } else {
        if ((reserve.includes(currLost - 1)) && ((currLost - 1) >= 1)) {
            console.log(reserve);
            currIdx = reserve.findIndex((e) => e == currLost - 1);
            if (reserve[currIdx] == -1) result--;
            else reserve[currIdx] = -1;
        }
        else if ((reserve.includes(currLost + 1)) && ((currLost + 1) <= n)) {
            console.log("씨발", reserve);
            console.log("이새끼가 문제야", (currLost + 1));
            currIdx = reserve.findIndex((e) => e == currLost + 1);
            if (reserve[currIdx] == -1) result--;
            else reserve[currIdx] = -1;
        }
        else result--;
        // }
    }
    return result;
}

console.log(solution(5, [2, 4], [1, 3, 5])); //5
console.log(solution(5, [2, 4], [3])); //4
console.log(solution(3, [3, 1], [2])); //2
console.log(solution(5, [1, 2, 4], [2, 3, 4, 5])); //4
console.log(solution(3, [1, 2], [2, 3])); //2
console.log(solution(5, [4, 2], [3, 1])); //5
console.log(solution(5, [1, 2, 3], [2, 3, 4])); //4