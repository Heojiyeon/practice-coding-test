function solution(priorities, location) {
    let idx = [];
    for (i = 0; i < priorities.length; i++) {
        idx.push([priorities[i], i]);
    }
    console.log(idx);
    let locNum = idx[location];
    console.log(locNum);
    let maxNum = Math.max(...priorities);
    console.log(maxNum);
    let count = 0;

    while (idx.length != 0) {
        let curr = idx[0];
        if (curr[0] == maxNum) {
            if (curr[1] == location) {
                idx.shift();
                count++;
                break;
            }
            else {
                console.log(curr[0], "나는 아직 아니에요");
                priorities.shift();
                console.log(priorities);
                idx.shift();
                console.log(idx);
                count++;
                console.log("프린트 했어요!", count);
            }
        }
        else {
            console.log(curr[0], "저는 최댓값보다 작아요");
            let tmp1 = priorities[0];
            priorities.shift();
            priorities.push(tmp1);
            console.log(priorities);
            let tmp2 = idx[0];
            idx.shift();
            idx.push(tmp2);
            console.log(idx);
        }
        maxNum = Math.max(...priorities);
    }
    return count;
}

console.log(solution([2, 1, 3, 2], 2)); //1
// console.log(solution([1, 1, 9, 1, 1, 1], 0)); //5