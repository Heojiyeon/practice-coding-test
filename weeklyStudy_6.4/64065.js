function solution(s) {
    let result = [];

    s = s.slice(2, s.length - 2).split("},{");
    s = s.sort((a, b) => a.length - b.length);
    console.log(s);
    for (i = 0; i < s.length; i++) {
        if (i === 0) result.push(s[i] * 1);
        else {
            let curr = s[i].split(',');
            let prev = s[i - 1].split(',');
            console.log(curr, prev);
            for (j = 0; j < curr.length; j++) {
                for (k = 0; k < prev.length; k++) {
                    if (curr[j] == prev[k]) curr[j] = -1;
                }
            }
            console.log("curr", curr);
            let found = curr.find((num) => num != -1);
            console.log("found", found);
            result.push(found * 1);
        }
    }
    return result;
}


console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")); //[2,1,3,4]
// console.log(solution("{{20,111},{111}}")); //[111, 20]
// console.log(solution("{{123}}")); //123
// console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")); //[3,2,4,1]