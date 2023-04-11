function solution(user_id, banned_id) {
    let exps = [];
    for (i of banned_id) exps.push(changeExp(i));
    console.log(exps);

    for (i = 0; i < exps.length; i++) {
        let currExp = exps[i];
        for (j = 0; j < user_id.length; j++) {
            let currUser = user_id[j];
            if (RegExp(currExp, 'g').test(currUser)) {
                console.log(currUser);
            }
        }
    }
}

function changeExp(exp) {
    let count = 0;
    let result = '(';
    for (i = 0; i < exp.length; i++) {
        let currBan = exp[i];
        if (currBan == '*') {
            count++;
            if (i == exp.length - 1) {
                let currAnswer = `\\w{${count}}`;
                result = result.concat(currAnswer);
            }
        }
        else if (currBan != '*') {
            if (count != 0) {
                let currAnswer = `\\w{${count}}${currBan}`;
                result = result.concat(currAnswer);
                count = 0;
            }
            else result = result.concat(currBan);
        }
    }
    return result = result.concat(')\\b');
}

// console.log(solution(
//     ["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"]
// )); //2

console.log(solution(
    ["frodo", "fradi", "crodo", "abc123", "frodoc"], ["*rodo", "*rodo", "******"]
)); //2